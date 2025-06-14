const courses = {
    "java-fullstack": {
        id: "java-fullstack",
        title: "Java Full Stack Development",
        description:
            "Master Java, Spring Boot, React, and MySQL to build enterprise-grade applications",
        duration: "6 months",
        students: "500+",
        modules: "12",
        rating: "4.9",
        icon: "💻",
        color: "from-blue-600 to-blue-800",
        previewVideo:
            "https://www.youtube.com/embed/RL2MsyLsCQM?si=jUHdjvzLVgCmfV-n",
        features: [
            "Core Java & Advanced Java",
            "Spring Boot & Spring MVC",
            "React.js & Redux",
            "MySQL & Hibernate",
            "RESTful APIs",
            "JDBC",
        ],
        highlights: [
            "Industry-relevant curriculum",
            "Live project experience",
            "Expert mentorship",
            "Placement assistance",
            "Access to study materials",
        ],
        price: {
            original: '₹55,000',
            discounted: '₹45,000',
            savings: '₹10,000'
          },
        curriculum: [
            {
                title: "Core Java",
                duration: "4 weeks",
                topics: [
                    "Introduction to Java",
                    "Features of Java",
                    "Setting up Java Development Environment",
                    "Understanding the Hello World Program in Detail",
                    "Identifiers in Java",
                    "Variables in Java",
                    "Primitive and Reference Data Types",
                    "Operators in Java",
                    "Accepting Input from the User",
                    "Control Flow Statements (if, switch, loops)",
                    "JVM Architecture",
                    "Classes and Objects",
                    "Instance vs Static Variables and Methods",
                    "Constructors",
                    "Instance and Static Blocks",
                    "Nested Classes (Static and Non-static)",
                    "Introduction to OOP Concepts",
                    "Polymorphism (Method Overloading & Overriding)",
                    "Inheritance and Super Keyword",
                    "Abstraction (Abstract Classes and Interfaces)",
                    "Encapsulation and Access Modifiers",
                    "Java 8 Features (Lambda Expressions, Streams, Optional Class)",
                    "Functional Interfaces",
                    "Default and Static Methods in Interfaces",
                    "Method References",
                    "Stream API",
                    "Arrays in Java",
                    "String Handling and StringBuilder",
                    "Exception Handling in Java (Try, Catch, Finally)",
                    "Multithreading Basics",
                    "Working with Collections Framework (List, Set, Map)",
                    "File Handling (Reading and Writing Files)",
                    "Annotations in Java",
                    "Enums and Their Usage",
                    "Introduction to Reflection API"
                ]
            },
            {
                "title": "Advanced Java",
                "duration": "8 weeks",
                "topics": [
                    "Introduction to JDBC",
                    "JDBC Drivers and Connection Pooling",
                    "CRUD Operations with JDBC",
                    "PreparedStatement vs Statement",
                    "Handling Transactions in JDBC",
                    "Servlets (Introduction, Lifecycle, Configurations)",
                    "Request and Response Handling in Servlets",
                    "Session Management in Servlets",
                    "JavaServer Pages (JSP)",
                    "MVC Design Pattern with JSP and Servlets",
                    "Spring Framework Overview",
                    "Spring Core (Bean Lifecycle, Dependency Injection)",
                    "Spring AOP (Aspect-Oriented Programming)",
                    "Spring MVC (Model-View-Controller)",
                    "Spring Boot Introduction and Setup",
                    "Spring Boot Auto Configuration",
                    "Spring Boot Starter Projects",
                    "Spring Boot with Thymeleaf Templates",
                    "Spring Boot with REST APIs",
                    "Spring Boot Security Basics",
                    "Spring Security Authentication and Authorization",
                    "Spring Data JPA (Repositories, CRUD Operations)",
                    "Spring Data JPA with Hibernate",
                    "Spring Security with OAuth2",
                    "Working with Spring Profiles",
                    "Handling File Uploads with Spring Boot"
                ]
            },
            {
                "title": "Frontend Development",
                "duration": "12 weeks",
                "topics": [
                    "Introduction to Web Development",
                    "HTML5 and CSS3 Basics",
                    "HTML Tags (Headings, Paragraphs, Links, Forms)",
                    "HTML Lists and Tables",
                    "CSS Selectors, Properties, and Syntax",
                    "CSS Box Model (Margin, Padding, Border)",
                    "CSS Layouts (Flexbox, Grid, Positioning)",
                    "Responsive Web Design with Media Queries",
                    "CSS Transitions and Animations",
                    "JavaScript Basics (Variables, Data Types, Functions)",
                    "JavaScript Control Structures (Loops, Conditionals)",
                    "ES6+ Features (Let/Const, Arrow Functions, Template Literals)",
                    "ES6+ Modules and Classes",
                    "DOM Manipulation with JavaScript",
                    "Event Handling in JavaScript",
                    "JavaScript Promises and Async/Await",
                    "Introduction to React.js",
                    "JSX Syntax and Expressions in React",
                    "React Component Architecture (Functional vs Class-based)",
                    "Component Lifecycle Methods",
                    "State and Props in React",
                    "React Hooks (useState, useEffect, useContext)",
                    "Event Handling in React",
                    "React Router for Navigation",
                    "Styling in React (Inline Styles, CSS Modules, Styled Components)",
                    "Handling Forms in React",
                    "Managing State in React with Redux",
                    "Redux Architecture (Store, Reducers, Actions)",
                    "Redux Thunk for Asynchronous Actions",
                    "Integrating Material UI in React",
                    "Building Forms and Custom Components with Material UI",
                    "Handling Errors and Debugging in React"
                ]
            },
            {
                "title": "Backend Development",
                "duration": "4 weeks",
                "topics": [
                    "Introduction to RESTful APIs",
                    "HTTP Methods (GET, POST, PUT, DELETE)",
                    "Designing RESTful APIs (Best Practices)",
                    "Spring Boot for REST APIs",
                    "Spring Boot with JPA for Database Access",
                    "Spring Boot Security with JWT",
                    "Working with Databases (MySQL, PostgreSQL)",
                    "Introduction to Hibernate ORM",
                    "Hibernate Annotations and Mapping",
                    "Hibernate Query Language (HQL)",
                    "Hibernate Criteria API",
                    "Database Transactions and Concurrency in Hibernate",
                    "Microservices Architecture (Introduction)",
                    "Designing Microservices with Spring Boot",
                    "Communication Between Microservices (REST, Feign)",
                    "Spring Cloud for Microservices",
                    "API Documentation with Swagger and OpenAPI",
                    "Spring Boot Actuator for Health Checks",
                    "Testing REST APIs with JUnit and Mockito",
                    "Spring Security in Microservices",
                    "OAuth2 and OpenID Connect Authentication in Microservices",
                    "Error Handling in Spring Boot",
                    "Unit Testing in Spring Boot",
                    "Logging and Monitoring in Spring Boot"
                ]
            },
            {
                "title": "Database",
                "duration": "4 weeks",
                "topics": [
                    "Introduction to Relational Databases (MySQL, PostgreSQL)",
                    "SQL Syntax and Operators",
                    "Creating and Managing Databases and Tables",
                    "SQL Constraints (Primary Key, Foreign Key, Unique, etc.)",
                    "Normalization and Denormalization",
                    "SQL Joins (Inner, Left, Right, Full)",
                    "SQL Aggregate Functions (COUNT, SUM, AVG, etc.)",
                    "Working with Views and Indexes in SQL",
                    "Transactions in SQL (COMMIT, ROLLBACK, SAVEPOINT)",
                    "Stored Procedures and Triggers in SQL",
                    "Database Backup and Recovery",
                    "Database Performance Optimization (Query Tuning)",
                    "Introduction to Docker and Containers",
                ]
            }
        ],
        projects: [
            {
                title: "E-commerce Platform",
                description:
                    "Build a full-featured e-commerce platform with user authentication, product management, and payment integration",
            },
            {
                title: "Social Media Dashboard",
                description:
                    "Create a social media analytics dashboard with real-time data visualization and reporting",
            },
            {
                title: "Task Management System",
                description:
                    "Develop a collaborative task management system with real-time updates and notifications",
            },
        ],
        instructors: [
            {
                name: "Sandeep Bhingale",
                role: "Senior Java Developer",
                experience: "8+ years",
                image: "/sandeep-bhingale.png",
                bio: "Sandeep  Bhingale has worked with leading tech companies and has mentored hundreds of students in their journey to becoming full-stack developers.",
            },
        ],
        testimonials: [
            {
                name: "Rahul Sharma",
                role: "Java Full Stack Developer",
                company: "Tech Solutions Inc.",
                image: "/testimonials/rahul.jpg",
                content:
                    "The Java Full Stack course transformed my career. The hands-on projects and expert guidance helped me land my dream job within 2 months of completing the course.",
            },
            {
                name: "Priya Patel",
                role: "Software Engineer",
                company: "Digital Innovations",
                image: "/testimonials/priya.jpg",
                content:
                    "The course structure was perfect, and the instructors were always available to help. The real-world projects gave me the confidence to tackle any development challenge.",
            },
        ],
    },
    "mern-stack": {
        id: "mern-stack",
        title: "MERN Stack Development",
        description:
            "Master MongoDB, Express.js, React, and Node.js to build modern web applications",
        duration: "5 months",
        students: "450+",
        modules: "10",
        rating: "4.8",
        icon: "🚀",
        color: "from-purple-600 to-purple-800",
        previewVideo: "https://www.youtube.com/embed/example1",
        features: [
            "MongoDB & Mongoose",
            "Express.js & Node.js",
            "React.js & Redux",
            "RESTful APIs",
            "Authentication & Authorization",
            "Real-time Applications",
            "Deployment",
        ],
        highlights: [
            "Industry-relevant curriculum",
            "Live project experience",
            "Expert mentorship",
            "Placement assistance",
            "Access to materials",
        ],
        price: {
            original: '₹55,000',
            discounted: '₹45,000',
            savings: '₹10,000'
          },
        "curriculum": [
            {
                "title": "JavaScript Fundamentals",
                "duration": "3 weeks",
                "topics": [
                    "Introduction to JavaScript and History",
                    "Basic Syntax and Structure",
                    "Variables and Constants (var, let, const)",
                    "Data Types (Primitive & Reference Types)",
                    "Operators (Arithmetic, Comparison, Logical, etc.)",
                    "Control Flow (if, else, switch, ternary operator)",
                    "Loops (for, while, do-while, forEach)",
                    "Functions (Declaration, Expression, Arrow Functions)",
                    "Scope and Closures",
                    "ES6+ Features",
                    "Let vs Const vs Var",
                    "Template Literals",
                    "Destructuring Assignment (Objects, Arrays)",
                    "Spread and Rest Operators",
                    "Object Literals and Shorthand Properties",
                    "Modules and Imports/Exports",
                    "Promises and Callbacks",
                    "Async/Await for Asynchronous Programming",
                    "Error Handling (Try-Catch, Throwing Errors)",
                    "Event Loop and Concurrency Model",
                    "JavaScript's `this` Keyword",
                    "Event Handling (addEventListener, Event Bubbling)",
                    "DOM Manipulation (Selecting, Modifying, and Creating Elements)",
                    "Local Storage and Session Storage",
                    "ES6+ Features: Map, Set, WeakMap, WeakSet",
                    "Iterators and Generators",
                    "Working with JSON",
                    "Debugging JavaScript Code",
                    "Best Practices for Writing Clean and Efficient JavaScript"
                ]
            },
            {
                "title": "Node.js & Express",
                "duration": "4 weeks",
                "topics": [
                    "Introduction to Node.js and its Ecosystem",
                    "Setting up Node.js Development Environment",
                    "Node.js Modules and NPM (Node Package Manager)",
                    "Core Modules in Node.js (fs, path, os, http, etc.)",
                    "Asynchronous Programming in Node.js (Callbacks, Promises)",
                    "Understanding the Event-Driven Architecture in Node.js",
                    "Express Framework Overview",
                    "Setting up Express Project",
                    "Middleware in Express (Request & Response Cycle)",
                    "Creating Routes and Handling Requests (GET, POST, PUT, DELETE)",
                    "Routing with Parameters and Query Strings",
                    "RESTful API Design with Express",
                    "Handling Form Data (urlencoded, JSON body parsing)",
                    "Working with JSON Responses in Express",
                    "Error Handling in Express (Try-Catch, Error Middleware)",
                    "Authentication and Authorization in Node.js (JWT, OAuth2)",
                    "User Authentication with Passport.js",
                    "Setting up MongoDB in Node.js with Mongoose",
                    "Building CRUD Operations in Express",
                    "Connecting Node.js Application to a Database",
                    "Handling File Uploads in Express (Using Multer)",
                    "Environment Variables and Configuration Management",
                    "Testing Express Applications (Mocha, Chai, Supertest)",
                    "Deploying Node.js Applications to Production",
                    "Error Handling and Debugging in Node.js"
                ]
            },
            {
                "title": "MongoDB & Database",
                "duration": "3 weeks",
                "topics": [
                    "Introduction to NoSQL Databases",
                    "Overview of MongoDB",
                    "Setting up MongoDB Database",
                    "MongoDB Data Types and Documents",
                    "MongoDB Collections and Databases",
                    "CRUD Operations in MongoDB (Insert, Find, Update, Delete)",
                    "Indexing in MongoDB for Performance Optimization",
                    "Using the MongoDB Shell and MongoDB Compass",
                    "Mongoose ODM (Object Data Modeling)",
                    "Setting up Mongoose in Node.js",
                    "Defining Schemas and Models with Mongoose",
                    "Validating Data with Mongoose Schema",
                    "Mongoose Query Methods and Aggregation",
                    "Aggregation Framework in MongoDB (Group, Sort, Project)",
                    "Handling Relationships in MongoDB (One-to-One, One-to-Many)",
                    "MongoDB Joins (Lookup)",
                    "Working with Embedded Documents in MongoDB",
                    "MongoDB Indexing for Fast Queries",
                    "Database Relationships and Referencing in MongoDB",
                    "Handling Data Integrity and Transactions in MongoDB",
                    "Data Modeling Best Practices",
                    "Optimizing MongoDB Performance",
                    "MongoDB Security Best Practices",
                    "Backup and Restore of MongoDB Databases",
                    "MongoDB Atlas (Cloud Service) Integration",
                    "Using MongoDB in a Node.js Environment"
                ]
            },
            {
                "title": "React.js & Redux",
                "duration": "5 weeks",
                "topics": [
                    "Introduction to React.js and Component-Based Architecture",
                    "Setting up React Development Environment (Create React App)",
                    "JSX Syntax and Rendering Elements",
                    "React Components (Class-based vs Functional Components)",
                    "Component Props and State",
                    "Event Handling in React",
                    "React Component Lifecycle (for Class Components)",
                    "Using useEffect and useState Hooks",
                    "Component Communication (Passing Data via Props)",
                    "Conditional Rendering in React",
                    "Forms and Input Handling in React",
                    "Lifting State Up Between Components",
                    "Handling Side Effects in React with useEffect",
                    "React Router for Navigation (Dynamic Routes, Nested Routes)",
                    "State Management in React with Redux",
                    "Redux Architecture (Store, Actions, Reducers)",
                    "Connecting Redux with React (Provider, connect)",
                    "Redux Thunk for Asynchronous Actions",
                    "Using Redux DevTools for Debugging",
                    "Redux Middleware (Logger, Thunk, Saga)",
                    "Context API for Prop Drilling",
                    "Handling Errors in React Applications",
                    "React Context and useContext Hook",
                    "Code Splitting in React (React.lazy, Suspense)",
                    "Styling in React (CSS Modules, Styled Components, Tailwind CSS)",
                    "React Performance Optimization (Memoization, Lazy Loading)",
                    "Deploying React Applications (Netlify, Vercel)",
                    "Working with APIs in React",
                    "Managing Side Effects and Async Logic in React",
                ]
            }
        ],
        projects: [
            {
                title: "E-commerce Platform",
                description:
                    "Build a full-featured e-commerce platform with real-time updates and payment integration",
            },
            {
                title: "Social Media App",
                description:
                    "Create a social media application with real-time chat and notifications",
            },
            {
                title: "Task Management System",
                description:
                    "Develop a collaborative task management system with real-time updates",
            },
        ],
        instructors: [
            {
                name: "Salman Shaikh",
                role: "MERN Developer",
                experience: "3+ years",
                image: "/salman-shaikh.jpg",
                bio: "Salman has worked with leading tech companies and specializes in building scalable MERN applications.",
            },
        ],
        testimonials: [
            {
                name: "Sarah Williams",
                role: "Full Stack Developer",
                company: "Tech Innovations",
                image: "/testimonials/sarah.jpg",
                content:
                    "The MERN Stack course provided me with all the skills needed to build modern web applications. The hands-on projects were particularly valuable.",
            },
        ],
    },
    "python-fullstack": {
        id: "python-fullstack",
        title: "Python Full Stack Development",
        description:
            "Master Python, Django, React, and PostgreSQL to build robust web applications",
        duration: "6 months",
        students: "400+",
        modules: "12",
        rating: "4.7",
        icon: "🐍",
        color: "from-green-600 to-green-800",
        previewVideo: "https://www.youtube.com/embed/example2",
        features: [
            "Python Programming",
            "Django Framework",
            "React.js & Redux",
            "PostgreSQL",
            "RESTful APIs",
            "Authentication",
            "Testing & Debugging",
            "Deployment",
        ],
        highlights: [
            "Industry-relevant curriculum",
            "Live project experience",
            "Expert mentorship",
            "Placement assistance",
            "Lifetime access to materials",
        ],
        price: {
            original: '₹55,000',
            discounted: '₹45,000',
            savings: '₹10,000'
          },
        curriculum: [
            {
                title: "Python Fundamentals",
                duration: "4 weeks",
                topics: [
                    "Python Basics",
                    "OOP in Python",
                    "Data Structures",
                    "File Handling",
                    "Error Handling",
                ],
            },
            {
                title: "Django Framework",
                duration: "5 weeks",
                topics: [
                    "Django Basics",
                    "Models & ORM",
                    "Views & Templates",
                    "Forms & Validation",
                    "Admin Interface",
                ],
            },
            {
                title: "Frontend Development",
                duration: "4 weeks",
                topics: [
                    "HTML5 & CSS3",
                    "JavaScript",
                    "React.js",
                    "Redux",
                    "Material UI",
                ],
            },
            {
                title: "Database & APIs",
                duration: "4 weeks",
                topics: [
                    "PostgreSQL",
                    "Django REST Framework",
                    "API Design",
                    "Authentication",
                    "Testing",
                ],
            },
        ],
        projects: [
            {
                title: "Blog Platform",
                description:
                    "Build a full-featured blog platform with user authentication and content management",
            },
            {
                title: "E-learning System",
                description:
                    "Create an e-learning platform with course management and student progress tracking",
            },
            {
                title: "Inventory Management",
                description:
                    "Develop an inventory management system with real-time updates and reporting",
            },
        ],
        instructors: [
            {
                name: "Michael Chen",
                role: "Python Developer",
                experience: "8+ years",
                image: "/instructors/michael.jpg",
                bio: "Michael is a Python expert with extensive experience in Django and full-stack development.",
            },
        ],
        testimonials: [
            {
                name: "David Kumar",
                role: "Python Developer",
                company: "Digital Solutions",
                image: "/testimonials/david.jpg",
                content:
                    "The Python Full Stack course gave me a solid foundation in both backend and frontend development. The projects were challenging and practical.",
            },
        ],
    },
    "data-science": {
        id: "data-science",
        title: "Data Science & Machine Learning",
        description:
            "Master Python, Statistics, Machine Learning, and Data Analysis to become a Data Scientist",
        duration: "8 months",
        students: "350+",
        modules: "15",
        rating: "4.9",
        icon: "📊",
        color: "from-orange-600 to-orange-800",
        previewVideo: "https://www.youtube.com/embed/example3",
        features: [
            "Python Programming",
            "Statistics & Probability",
            "Machine Learning",
            "Deep Learning",
            "Data Visualization",
            "Big Data Tools",
            "Natural Language Processing",
            "Model Deployment",
        ],
        highlights: [
            "Industry-relevant curriculum",
            "Real-world projects",
            "Expert mentorship",
            "Placement assistance",
            "Lifetime access to materials",
        ],
        price: {
            original: '₹55,000',
            discounted: '₹45,000',
            savings: '₹10,000'
          },
        curriculum: [
            {
                title: "Python for Data Science",
                duration: "4 weeks",
                topics: [
                    "Python Basics",
                    "NumPy & Pandas",
                    "Data Cleaning",
                    "Data Visualization",
                    "Statistical Analysis",
                ],
            },
            {
                title: "Machine Learning",
                duration: "6 weeks",
                topics: [
                    "Supervised Learning",
                    "Unsupervised Learning",
                    "Model Evaluation",
                    "Feature Engineering",
                    "Hyperparameter Tuning",
                ],
            },
            {
                title: "Deep Learning",
                duration: "5 weeks",
                topics: [
                    "Neural Networks",
                    "TensorFlow & Keras",
                    "CNN & RNN",
                    "Transfer Learning",
                    "Model Deployment",
                ],
            },
            {
                title: "Advanced Topics",
                duration: "4 weeks",
                topics: [
                    "Natural Language Processing",
                    "Computer Vision",
                    "Time Series Analysis",
                    "Big Data Tools",
                    "Model Deployment",
                ],
            },
        ],
        projects: [
            {
                title: "Customer Churn Prediction",
                description:
                    "Build a machine learning model to predict customer churn and identify key factors",
            },
            {
                title: "Image Classification",
                description:
                    "Create a deep learning model for image classification using CNN",
            },
            {
                title: "Sentiment Analysis",
                description:
                    "Develop an NLP model for sentiment analysis of customer reviews",
            },
        ],
        instructors: [
            {
                name: "Dr. Emily Wilson",
                role: "Data Scientist",
                experience: "10+ years",
                image: "/instructors/emily.jpg",
                bio: "Dr. Wilson has extensive experience in machine learning and data science, having worked with leading tech companies.",
            },
        ],
        testimonials: [
            {
                name: "Priya Sharma",
                role: "Data Scientist",
                company: "AI Solutions",
                image: "/testimonials/priya.jpg",
                content:
                    "The Data Science course provided me with a comprehensive understanding of machine learning and data analysis. The hands-on projects were invaluable.",
            },
        ],
    },
    "data-analytics": {
        id: "data-analytics",
        title: "Data Analytics & Business Intelligence",
        description:
            "Master data analysis, visualization, and business intelligence tools to drive data-driven decisions",
        duration: "4 months",
        students: "300+",
        modules: "8",
        rating: "4.7",
        icon: "📈",
        color: "from-blue-600 to-blue-800",
        previewVideo: "https://www.youtube.com/embed/example4",
        features: [
            "SQL & Database",
            "Data Visualization",
            "Business Intelligence",
            "Statistical Analysis",
            "Excel & Power BI",
            "Tableau",
            "Data Storytelling",
            "Dashboard Creation",
        ],
        highlights: [
            "Industry-relevant curriculum",
            "Real-world projects",
            "Expert mentorship",
            "Placement assistance",
            "Lifetime access to materials",
        ],
        price: {
            original: '₹55,000',
            discounted: '₹45,000',
            savings: '₹10,000'
          },
        curriculum: [
            {
                title: "Data Analysis Fundamentals",
                duration: "3 weeks",
                topics: [
                    "Excel Advanced",
                    "Statistical Analysis",
                    "Data Cleaning",
                    "Data Transformation",
                    "Basic SQL",
                ],
            },
            {
                title: "Data Visualization",
                duration: "4 weeks",
                topics: [
                    "Tableau Basics",
                    "Power BI",
                    "Dashboard Design",
                    "Interactive Reports",
                    "Data Storytelling",
                ],
            },
            {
                title: "Business Intelligence",
                duration: "4 weeks",
                topics: [
                    "Advanced SQL",
                    "ETL Processes",
                    "Data Warehousing",
                    "Business Metrics",
                    "KPI Analysis",
                ],
            },
            {
                title: "Advanced Analytics",
                duration: "3 weeks",
                topics: [
                    "Predictive Analytics",
                    "Time Series Analysis",
                    "Customer Analytics",
                    "Market Analysis",
                    "Report Automation",
                ],
            },
        ],
        projects: [
            {
                title: "Sales Analytics Dashboard",
                description:
                    "Create an interactive dashboard to analyze sales performance and trends",
            },
            {
                title: "Customer Behavior Analysis",
                description:
                    "Analyze customer behavior patterns and create actionable insights",
            },
            {
                title: "Market Research Report",
                description:
                    "Develop a comprehensive market research report with data visualization",
            },
        ],
        instructors: [
            {
                name: "Robert Taylor",
                role: "Business Intelligence Expert",
                experience: "9+ years",
                image: "/instructors/robert.jpg",
                bio: "Robert specializes in business intelligence and data analytics, helping companies make data-driven decisions.",
            },
        ],
        testimonials: [
            {
                name: "Anita Patel",
                role: "Business Analyst",
                company: "Global Analytics",
                image: "/testimonials/anita.jpg",
                content:
                    "The Data Analytics course provided me with practical skills in data visualization and business intelligence. The projects were directly applicable to my work.",
            },
        ],
    },
};



export default courses;