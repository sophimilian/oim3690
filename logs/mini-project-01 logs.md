## Iteration 1: Structure and Content 
- What questions did you ask? What surprised you about their answers? If you used AI to generate the initial HTML, what did it get right? What did you have to change to match the client's needs? 
    - I initially asked AI to only make me the skeleton of an html file and it did it correctly. I then asked it to help me complete the base requirements using the information in my proposal of everything my client wanted. I had to add sections for everything, add photos to a new folder (told it to use my photos I already inputted), add more < header > and < nav >, change the font family many times until i found one that matched what my client wanted, played with the size of the headings and body to make it proportional and make sure the website still look pretty and how my client wanted, asked it to make sure everything still looked proffessional, have it create a very light shade of pink to make it the background, add a dark/light mode, and then asked for it to add the logo on the front page of the website. 
    - I asked my client the general questions as to what they wanted in a website, format, styling, vibe, what sections did they want, how many sections did they want, what colors did they want to use, did they want pictures, a lot of words or a little, etc...
        - I was shocked that she liked the idea of the website being similar to Pinterest, she loved the aesthetic of it and how easy it was to navigate and how it keeps people hooked to it. 


## Iteration 2: Stylig and Layout
- What CSS properties did you learn? If you asked AI for help with styling, what did it suggest? Did you accept everything or modify some suggestions? 
    - I accepted mainly everything, except when changing font family, text size, gallery arrangement, and a couple of small tweeks. 
    - I had to change the padding/spacing many many times to make sections more compact so users can see the content on the website without scrolling a lot.
    - I learned how to create light/dark theme system using `:root` and `body[data-theme="dark"]` selectors.
    - **box-shadow** properties to add layered depth instead of borders
    - for the Pinterest-style gallery **CSS Grid** for an extensive layout and **column-count**
    - **position: sticky** to keep a header visible while scroling and **flexbox** for centering my clients logo and doing the hamburger menu


## Iteration 3: Feedback and Polish
- What feedback did your client give? What was the hardest change to make? What's one thing you'd do differently next time? 

    - My client loved the overall aesthetic (the light pink background and font family matched her luxury bridal vision that she wanted). She was especially pleased with the Pinterest-style gallery layout because it showcased her dress photos  without feeling cluttered and overwhelming. However, she initially felt the page required too much scrolling to see all the key sections, so I had to decrease the amount of padding and margins  to make the site more compact and user-friendly. She also requested that the navigation be turned into a hamburger menu so the header wouldn't take up too much of the screen, which ended up being a smart choice for mobile users too.
    - The hardest change was implementing the hamburger menu while keeping the logo centered and maintaining a clean, professional look. I had to learn how to use `position: absolute` for the hamburger button while keeping the logo centered with flexbox. Coordinating the CSS transitions and making sure the dark/light mode toggle worked properly inside the collapsible menu took many many times to finally get right.
    - Next time, I'd plan the mobile-first layout from the beginning instead of building desktop-first and then compressing everything because i feel like that would have been much much easier to go about it. I spent a lot of time deleting empty spacing, which felt inefficient because it took so much time to get it correct and to what my client liked. I would have also put the pictures in as one of the first steps because I had to adjust the pictures many times and made sure each picture matched the ones next to it so it looked curated.
