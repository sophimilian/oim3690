const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoCategoryInput = document.getElementById("todoCategoryInput");
const taskCategories = document.getElementById("taskCategories");
const starredTodoList = document.getElementById("starredTodoList");
const activeTodoList = document.getElementById("activeTodoList");
const completedTodoList = document.getElementById("completedTodoList");
const starredEmptyNote = document.getElementById("starredEmptyNote");
const activeEmptyNote = document.getElementById("activeEmptyNote");
const completedEmptyNote = document.getElementById("completedEmptyNote");
const quickNotes = document.getElementById("quickNotes");
const itemsLeft = document.getElementById("itemsLeft");
const clearCompleted = document.getElementById("clearCompleted");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
quickNotes.value = localStorage.getItem("quickNotes") || "";

function saveTodos() {
	localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTaskCategorySuggestions() {
	taskCategories.innerHTML = "";
	const categories = [...new Set(
		todos
			.map((todo) => (todo.category || "").trim())
			.filter(Boolean)
	)].sort((a, b) => a.localeCompare(b));

	categories.forEach((categoryName) => {
		const option = document.createElement("option");
		option.value = categoryName;
		taskCategories.appendChild(option);
	});
}

function createTodoItem(todo) {
	const li = document.createElement("li");
	if (todo.completed) li.classList.add("completed");
	if (todo.starred) li.classList.add("starred");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = todo.completed;
	checkbox.addEventListener("change", () => {
		todo.completed = checkbox.checked;
		saveTodos();
		renderTodos();
	});

	const starButton = document.createElement("button");
	starButton.type = "button";
	starButton.className = "star-button";
	starButton.textContent = todo.starred ? "★" : "☆";
	starButton.setAttribute("aria-label", todo.starred ? "Unstar todo" : "Star todo");
	starButton.addEventListener("click", () => {
		todo.starred = !todo.starred;
		saveTodos();
		renderTodos();
	});

	const text = document.createElement("span");
	text.className = "todo-text";
	text.textContent = todo.text;

	const categoryBadge = document.createElement("span");
	categoryBadge.className = "todo-category";
	categoryBadge.textContent = (todo.category || "General").trim() || "General";

	const deleteButton = document.createElement("button");
	deleteButton.type = "button";
	deleteButton.className = "secondary";
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", () => {
		todos = todos.filter((item) => item.id !== todo.id);
		saveTodos();
		renderTodos();
	});

	li.append(checkbox, starButton, text, categoryBadge, deleteButton);
	return li;
}

function renderGroupedList(listElement, listTodos) {
	const grouped = {};
	listTodos.forEach((todo) => {
		const categoryName = (todo.category || "General").trim() || "General";
		if (!grouped[categoryName]) {
			grouped[categoryName] = [];
		}
		grouped[categoryName].push(todo);
	});

	Object.keys(grouped)
		.sort((a, b) => a.localeCompare(b))
		.forEach((categoryName) => {
			const headingItem = document.createElement("li");
			headingItem.className = "category-heading";
			headingItem.textContent = categoryName;
			listElement.appendChild(headingItem);

			grouped[categoryName].forEach((todo) => {
				listElement.appendChild(createTodoItem(todo));
			});
		});
}

function updateItemsLeft() {
	const remaining = todos.filter((todo) => !todo.completed).length;
	itemsLeft.textContent = `${remaining} item${remaining === 1 ? "" : "s"} left`;
}

function renderTodos() {
	starredTodoList.innerHTML = "";
	activeTodoList.innerHTML = "";
	completedTodoList.innerHTML = "";

	renderGroupedList(starredTodoList, todos.filter((todo) => !todo.completed && todo.starred));
	renderGroupedList(activeTodoList, todos.filter((todo) => !todo.completed && !todo.starred));
	renderGroupedList(completedTodoList, todos.filter((todo) => todo.completed));

	starredEmptyNote.style.display = starredTodoList.children.length ? "none" : "block";
	activeEmptyNote.style.display = activeTodoList.children.length ? "none" : "block";
	completedEmptyNote.style.display = completedTodoList.children.length ? "none" : "block";

	renderTaskCategorySuggestions();
	updateItemsLeft();
}

todoForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const text = todoInput.value.trim();
	if (!text) return;
	const category = todoCategoryInput.value.trim() || "General";

	todos.push({
		id: crypto.randomUUID(),
		text,
		category,
		completed: false,
		starred: false,
	});

	todoInput.value = "";
	saveTodos();
	renderTodos();
	todoInput.focus();
});

clearCompleted.addEventListener("click", () => {
	todos = todos.filter((todo) => !todo.completed);
	saveTodos();
	renderTodos();
});

quickNotes.addEventListener("input", () => {
	localStorage.setItem("quickNotes", quickNotes.value);
});

renderTodos();
