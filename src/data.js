const projects_data = [
    {
        kind: 'Featured Project',
        name: 'MUN-Ask_Bot',
        description: "This is a web app which answers all questions related to program and course information of Memorial University of Newfoundland.",
        points: ["It is trained on the university calender data and uses OpenAI's neural language model's embeddings endpoint and completions API like ChatGPT. ",
        "The model is fine tuned to remember conversations it is making and chat accordingly like a human being, giving 85% accurate answers in 3 seconds.", "This model is in the beginning stage of development and the next phase is fine tuning to enhance accuracy and user rewards to reinforce how it learns to answer."],
        stack: ['React ', 'Python ', 'Flask  ', 'Typescript ', 'OpenAI-API  ','py-Pandas ','py-BeautifulSoup ','Tailwind-CSS '],
        links: 'https://github.com/TBill06'
    },
    {
        kind: 'Featured Project',
        name: 'Employer Pension Fund Organization Fetch API',
        description: "Developed a script to fetch data bypassing Captcha to help a startup download publicly available data.",
        points: ["The code exploited a bug to bypass captcha and retrieve records of over 100,000 companies.","It helped the company in their data reporting project timeline to get it under 2 months and reduced manual work by 95%. "],
        stack: ['Python ','py-Pandas ','Postman ','py-BeautifulSoup '],
        links: 'https://github.com/TBill06/EPFO-API'
    },
    {
        kind: 'Academic Project',
        name: 'Collection of AI Projects',
        description: "Created the following Artificial Intelligence projects:",
        points: ["Built efficient path finding algorithms to solve mazes.","Developed genetic algorithm to solve Sudoku.","Built Connect 4 Game artificial algorithm using alpha-beta pruning and Mini-max algorithm.","Cannot provide source code for it due to course obligations."],
        stack: ['JavaScript ','Path finding algorithms ', 'Reinforcement-learning ', 'Genetic-algorithms ','Neural-Nets '],
        links: 'https://github.com/TBill06'
    },
    {
        kind: 'Collaborative Academic Project',
        name: 'King Domino Game',
        description: "Created a game as part of Software Engineering course",
        points: ["Developed an interactive board game with graphics.","The game has different levels and also AI opponent."],
        stack: ['Java ','UML Class Diagrams ','Use cases ','Swing ','Software Design patterns '],
        links: 'https://github.com/TBill06'
    },
    {
        kind: 'Academic Project', 
        name: 'Collection of Visual Computing Projects',
        description: "Created the following Computer Vision projects:",
        points: ["Developed and implemented various image processing filters like Gaussian, Sobel, Kuwahara, Prewitt.","Implemented convolution filters for thresholding operations, background removal operations.","Designed algorithms for image quality boosters and compressors.","Cannot link source code due to course obligations."],
        stack: ['Python ','Tkinter ','OpenCV ','Java ','py-Pandas ','py-numpy '],
        links: 'https://github.com/TBill06'
    },
    {
        kind: 'Featured Project',
        name: 'Responsive Restaurant Website',
        description: "This website was my first summer project",
        points: ["Used Bootstrap template to design a fluid UI wireframe for a restaurant.","The site was refactored for achieving web accessibility and responsiveness for different viewpoints."],
        stack: ['HTML ','CSS ','JavaScript ','Bootstrap ','Flexbox ','Media-Controls ','Tailwind-CSS' ],
        links: 'https://github.com/TBill06'
    }
]
export default projects_data