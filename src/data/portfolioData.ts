import { PortfolioData } from '../types';

/**
 * =========================================================================
 * SHARON K G - PORTFOLIO DATA SOURCE
 * =========================================================================
 * Synchronized with Sharon's official GitHub Pages portfolio (sharon10112003.github.io/Portfolio)
 * and verified academic records (MCA 9.3 CGPA, RVS College).
 */

export const portfolioData: PortfolioData = {
  personal: {
    name: 'SHARON K G',
    headline: 'I build modern, responsive websites and web apps. I enjoy clean code, thoughtful UI, and fast performance.',
    title: 'Full Stack & Web Developer | React.js, Node.js & MERN',
    qualification: 'Master of Computer Applications (MCA) — 9.3 CGPA',
    experienceLevel: 'Full Stack Developer',
    careerGoal:
      'Seeking a software development role to apply technical expertise, develop scalable applications, and contribute to effective software solutions.',
    shortBio:
      'I am Sharon K G, a passionate web and full-stack developer skilled in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL. I create interactive, responsive, and user-friendly web applications that look great on all devices. My goal is to build projects that are both visually appealing and highly functional.',
    fullBio: [
      'I am Sharon K G, a passionate web developer skilled in HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL. I create interactive, responsive, and user-friendly websites that look great on all devices. My goal is to build projects that are both visually appealing and highly functional.',
      'Currently pursuing my Master of Computer Applications (MCA) at RVS College of Arts and Science with a 9.3 CGPA, I combine deep theoretical computer science principles with practical software engineering craftsmanship.',
      'My background uniquely bridges business analytical discipline and software engineering: having completed my B.Com in Accounting and Finance (7.6 CGPA), I transitioned into technology to solve real-world problems through full-stack web and mobile development.',
      'I have designed and engineered production-grade applications including role-based election voting systems, issue tracking workflows, e-commerce storefronts, calculator engines, and productivity apps, implementing clean code, JWT stateless authentication, bcrypt encryption, and intuitive UI design.',
    ],
    email: 'sharongilbert2003@gmail.com',
    phone: '8903544693',
    phoneDisplay: '+91 8903544693',
    location: 'Tamil Nadu, India (Open to Relocation & Remote)',
    resumeFileName: 'Sharon_KG_Resume.pdf',
    profileImage: '/assets/aistudio/Profile2_39c053e6.jpeg',
    availableForHire: true,
  },

  socialLinks: [
    {
      platform: 'Email',
      url: 'mailto:sharongilbert2003@gmail.com',
      displayValue: 'sharongilbert2003@gmail.com',
      isPlaceholder: false,
    },
    {
      platform: 'Phone',
      url: 'tel:8903544693',
      displayValue: '+91 8903544693',
      isPlaceholder: false,
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/sharon10112003',
      displayValue: 'github.com/sharon10112003',
      isPlaceholder: false,
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/sharongk693',
      displayValue: 'linkedin.com/in/sharongk693',
      isPlaceholder: false,
    },
  ],

  /**
   * SKILLS
   * Mapped directly from Sharon's GitHub Pages portfolio and verified resume:
   * HTML5, CSS3, JavaScript, Bootstrap, React, Git & GitHub
   * Backend: Node.js, Express.js, REST APIs
   * Databases: MongoDB, MySQL, SQL
   * Programming Languages: JavaScript, Python, SQL
   * Concepts: JWT Authentication, Role-Based Access Control (RBAC), CRUD, Responsive Web Design
   */
  skills: [
    {
      title: 'Frontend Development',
      iconName: 'Layout',
      description: 'Designing performant, component-driven, responsive user interfaces.',
      skills: [
        {
          name: 'HTML5',
          tag: 'Semantic & Accessibility',
          description: 'Semantic markup structure, modern web forms, accessible element hierarchy, and SEO standard compliance.',
          highlight: true,
        },
        {
          name: 'CSS3 / Tailwind',
          tag: 'Responsive & Animations',
          description: 'Modern flexbox, CSS grid, custom animations, Tailwind utility styling, and sleek dark modes.',
          highlight: true,
        },
        {
          name: 'JavaScript (ES6+)',
          tag: 'DOM · Async/Await · ESNext',
          description: 'Modern asynchronous programming, closures, promises, functional array methods, and event handling.',
          highlight: true,
        },
        {
          name: 'React.js',
          tag: 'Hooks · State · SPA',
          description: 'Component architecture, custom hooks, reusable design patterns, Vite tooling, and client-side routing.',
          highlight: true,
        },
        {
          name: 'Bootstrap',
          tag: 'Grid & UI System',
          description: 'Bootstrap responsive grid systems, modal dialogs, navigation components, and utility classes.',
        },
      ],
    },
    {
      title: 'Backend Engineering',
      iconName: 'Server',
      description: 'Architecting scalable server-side business logic and secure REST endpoints.',
      skills: [
        {
          name: 'Node.js',
          tag: 'Runtime & Asynchronous',
          description: 'Server runtime execution, file streaming, event handlers, and modular NPM ecosystem.',
          highlight: true,
        },
        {
          name: 'Express.js',
          tag: 'Routing & Middleware',
          description: 'REST API routing, error handling pipelines, request validation, and CORS middleware.',
          highlight: true,
        },
        {
          name: 'REST APIs',
          tag: 'Endpoint Architecture',
          description: 'Structured HTTP verb conventions (GET, POST, PUT, DELETE), JSON payload contracts, and error responses.',
          highlight: true,
        },
        {
          name: 'Python',
          tag: 'Data & Scripting',
          description: 'Python scripting, structured programming, and data science foundational libraries.',
        },
      ],
    },
    {
      title: 'Databases & Storage',
      iconName: 'Database',
      description: 'Designing relational schemas, document modeling, and transactional data pipelines.',
      skills: [
        {
          name: 'MongoDB',
          tag: 'NoSQL & Mongoose ODM',
          description: 'Document-oriented database design, schema definitions with Mongoose, and indexing.',
          highlight: true,
        },
        {
          name: 'MySQL / SQL',
          tag: 'Relational Tables & Queries',
          description: 'Relational schemas, primary/foreign key constraints, normalization, multi-table JOINs, and ACID integrity.',
          highlight: true,
        },
      ],
    },
    {
      title: 'Developer Tools & Collaboration',
      iconName: 'Wrench',
      description: 'Modern development environment, API testing, and source collaboration.',
      skills: [
        {
          name: 'Git & GitHub',
          tag: 'Version Control',
          description: 'Branch management, commit history, merge conflict resolution, pull requests, and GitHub Pages hosting.',
          highlight: true,
        },
        {
          name: 'Postman',
          tag: 'API Testing & Debugging',
          description: 'Endpoint verification, payload simulation, authentication header inspection, and environment variables.',
        },
        {
          name: 'VS Code',
          tag: 'Development Environment',
          description: 'Integrated debugging, snippet extensions, linting integration, and rapid terminal workflows.',
        },
      ],
    },
  ],

  /**
   * CORE ARCHITECTURAL CONCEPTS
   */
  concepts: [
    'JWT Authentication',
    'Role-Based Access Control (RBAC)',
    'CRUD Application Architecture',
    'Responsive Web Design',
    'Password Hashing (bcrypt)',
    'Audit Logging',
    'Excel & CSV Data Processing',
    'Real-Time Analytics (Chart.js)',
  ],

  /**
   * PROJECTS SECTION
   * Includes all verified projects from Sharon's GitHub Pages portfolio and resume:
   * 1. E-Commerce Website (Live Demo on GitHub Pages)
   * 2. Calculator App (Live Demo on GitHub Pages)
   * 3. To-Do List App (Live Demo on GitHub Pages)
   * 4. Campus Vote – College Election Voting System (Full-Stack MERN)
   * 5. Ticket Management System (Full-Stack MERN)
   * 6. FreshMart (Mobile App)
   */
  projects: [
    {
      id: 'ecommerce-website',
      title: 'E-Commerce Website',
      subtitle: 'Electronics & Home Appliances Storefront',
      category: 'Web',
      type: 'Academic Project',
      period: 'Sep 2025 – Oct 2025 (2 Months)',
      summary:
        'A responsive modern e-commerce platform developed using HTML5, CSS3, and JavaScript tailored for browsing and purchasing consumer electronics and home appliances with interactive shopping cart and checkout flows.',
      image: '/assets/sharon/ecommerce.jpeg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'DOM Manipulation', 'LocalStorage'],
      keyFeatures: [
        'Product Catalog Presentation: Comprehensive catalog browsing for electronics and home appliances with high-resolution imagery',
        'Categorization & Search: Dynamic product categorization and real-time category filtering',
        'Interactive Shopping Cart: Add to cart, adjust quantities, calculate item subtotals, and persistent local storage',
        'Checkout Purchasing Flow: Multi-step checkout flow with form validation and order summary confirmation',
        'User Navigation & Login: Designed intuitive interfaces with product navigation, cart management, and login screens',
        'Responsive Layout: Fluid mobile and desktop layout ensuring seamless shopping across any device screen',
      ],
      architectureHighlights: [
        'Pure vanilla JavaScript DOM manipulation with modular state patterns for high-speed rendering',
        'Custom responsive CSS grid and flexbox layout without heavy external runtime dependencies',
        'Client-side cart persistence using browser LocalStorage for resilient shopping sessions',
      ],
      githubUrl: 'https://github.com/sharon10112003/E-Commerce-Website',
      liveDemoUrl: 'https://sharon10112003.github.io/E-Commerce-Website/',
      isGithubPlaceholder: false,
      isLiveDemoPlaceholder: false,
      featured: true,
    },
    {
      id: 'calculator-app',
      title: 'Calculator App',
      subtitle: 'Modern Responsive Arithmetic Engine',
      category: 'Web',
      type: 'Personal Project',
      period: 'Interactive Web Application',
      summary:
        'A sleek, responsive interactive calculator application built with modern HTML5, CSS3, and JavaScript supporting multi-operation math, decimal precision, and keyboard events.',
      image: '/assets/sharon/calculator.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Event Listeners'],
      keyFeatures: [
        'Multi-Operation Engine: Supports addition, subtraction, multiplication, division, and percentage calculations',
        'Real-Time Display: Interactive dual-screen display showing operator status and current input digits',
        'Keyboard Input Support: Seamless input through both on-screen buttons and physical numpad keys',
        'Error Handling: Graceful handling of edge cases such as division by zero and multiple consecutive decimals',
        'Neumorphic / Glass UI: Modern dark styling with tactile button press micro-animations',
      ],
      architectureHighlights: [
        'Clean state machine evaluating mathematical expressions safely without vulnerable eval() patterns',
        'Optimized DOM update cycles ensuring zero input latency across mobile and desktop browsers',
      ],
      githubUrl: 'https://github.com/sharon10112003/calculator',
      liveDemoUrl: 'https://sharon10112003.github.io/calculator/',
      isGithubPlaceholder: false,
      isLiveDemoPlaceholder: false,
      featured: true,
    },
    {
      id: 'todo-list-app',
      title: 'To-Do List App',
      subtitle: 'Task & Productivity Management Tool',
      category: 'Web',
      type: 'Personal Project',
      period: 'Interactive Web Application',
      summary:
        'A clean and intuitive productivity task manager built with HTML5, CSS3, and JavaScript featuring task creation, completion toggles, deletion, and local storage state persistence.',
      image: '/assets/sharon/todolists.jpeg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'DOM APIs'],
      keyFeatures: [
        'Task Lifecycle: Add new tasks, toggle task completion states, and delete finished tasks',
        'Persistent Local Storage: Automatically synchronizes task list with browser LocalStorage so tasks persist across reloads',
        'Task Filters: Quick filtering between All, Active, and Completed tasks',
        'Input Validation: Prevents empty or duplicate task submissions with friendly visual cues',
        'Responsive Mobile Interface: Touch-friendly buttons and clean typography tailored for smartphone use',
      ],
      architectureHighlights: [
        'Modular task object representation with unique timestamps for resilient CRUD handling',
        'Event delegation on parent containers minimizing memory footprint and listener overhead',
      ],
      githubUrl: 'https://github.com/sharon10112003/To-do-list',
      liveDemoUrl: 'https://sharon10112003.github.io/To-do-list/',
      isGithubPlaceholder: false,
      isLiveDemoPlaceholder: false,
      featured: true,
    },
    {
      id: 'campus-vote',
      title: 'Campus Vote',
      subtitle: 'College Election Voting System',
      category: 'Full-Stack',
      type: 'Personal Project',
      period: 'Jun 2026 – Aug 2026 (3 Months)',
      summary:
        'A comprehensive full-stack college election voting system engineered with Node.js, Express.js, React.js (Vite), Tailwind CSS, and MongoDB with Mongoose, featuring real-time vote analytics and rigorous security controls.',
      image: '/assets/images/campusvote_voting_system_1792946450881.jpg',
      technologies: [
        'React.js (Vite)',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose',
        'Tailwind CSS',
        'JWT Auth',
        'bcrypt',
        'Chart.js',
      ],
      keyFeatures: [
        'Student & Admin Interfaces: Dual-role architecture with secure ballot casting and dedicated administrator dashboards',
        'Vote Integrity Engine: One-vote-per-student validation mechanism preventing duplicate submissions',
        'Automated Confirmation: Instant automated vote confirmation emails sent upon successful ballot casting',
        'Bulk Management & Reporting: Bulk student registration via Excel/CSV file parsing and dynamic election report export',
        'Real-Time Election Analytics: Interactive visual turnout and vote distribution metrics powered by Chart.js',
        'Enterprise-Grade Security: Hardened with JWT stateless authorization, bcrypt password hashing, RBAC, and audit logging',
      ],
      architectureHighlights: [
        'Stateless JWT authentication with Role-Based Access Control (RBAC) protecting sensitive administrative actions',
        'MongoDB schema design with strict unique constraints ensuring vote uniqueness and zero tampering',
        'Excel/CSV streaming parser for seamless batch student onboarding and post-election audit trail generation',
      ],
      githubUrl: 'https://github.com/sharon10112003/campus-vote',
      liveDemoUrl: 'https://campusvote-sharonkg.vercel.app',
      isGithubPlaceholder: false,
      isLiveDemoPlaceholder: false,
      featured: true,
    },
    {
      id: 'ticket-management',
      title: 'Ticket Management System (TMS)',
      subtitle: 'Full-Stack Issue & Task Tracking Platform',
      category: 'Full-Stack',
      type: 'Academic Project',
      period: 'Mar 2026 – Apr 2026 (2 Months)',
      summary:
        'A full-stack ticket management and issue handling application built using React.js, Node.js, Express.js, and MongoDB to streamline team support and bug resolution pipelines.',
      image: '/assets/images/task_management_system_1792946450626.jpg',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'CSS3'],
      keyFeatures: [
        'Ticket Lifecycle Management: Create, edit, assign, prioritize, and track issue statuses from open to resolved',
        'Issue Tracking Workflows: Status tracking (To Do, In Progress, In Review, Done) with priority indicators',
        'RESTful API Backend: Express.js routes handling ticket validation, assignee management, and database persistence',
        'Data Model Integration: MongoDB schemas structuring ticket metadata, creator info, timestamps, and priority tags',
        'Unified Services: Integrated frontend and backend services using REST APIs for synchronized data management',
        'Responsive Dashboard: Clean user interface built for fast issue inspection and management',
      ],
      architectureHighlights: [
        'Decoupled client-server design with unified REST API contracts and clear HTTP status code standards',
        'Mongoose document indexing on ticket status and assignee for low-latency queries',
        'Structured error-handling middleware preventing unhandled promise rejections on the server',
      ],
      githubUrl: 'https://github.com/sharon10112003/ticket-management-system',
      liveDemoUrl: 'https://tms-sharonkg.vercel.app',
      isGithubPlaceholder: false,
      isLiveDemoPlaceholder: false,
      featured: true,
    },
    {
      id: 'freshmart',
      title: 'FreshMart',
      subtitle: 'Grocery Shopping Mobile Application',
      category: 'Mobile',
      type: 'Personal Project',
      period: 'Mobile Application',
      summary:
        'A cross-platform mobile grocery shopping application engineered with React Native and Expo, featuring dedicated customer and administrator experiences.',
      image: '/assets/images/freshmart_grocery_app_1792946450234.jpg',
      technologies: ['React Native', 'Expo', 'JavaScript', 'REST APIs', 'AsyncStorage'],
      keyFeatures: [
        'Customer Experience: Intuitive product catalog with category-based filtering (Produce, Dairy, Pantry, etc.)',
        'Administrator Experience: Product inventory listing, stock indicators, and pricing management',
        'Interactive Shopping: Add items to persistent cart, adjust item quantities, and instant total price calculation',
        'Favorites Collection: Quick-bookmark favorite groceries for rapid re-ordering',
        'Profile Management: View customer account details and saved delivery address',
        'Smooth Navigation: Seamless bottom tab navigation coupled with native stack transitions',
      ],
      architectureHighlights: [
        'Modular screen architecture decoupling UI components from state providers',
        'Offline cart persistence utilizing AsyncStorage for resilient shopping sessions',
        'Expo vector icons and responsive layout math optimized for diverse screen sizes',
      ],
      githubUrl: 'https://github.com/sharon10112003/freshmart-grocery-app',
      liveDemoUrl: 'https://expo.dev/@sharon10112003/freshmart-preview',
      isGithubPlaceholder: false,
      isLiveDemoPlaceholder: false,
      featured: true,
    },
  ],

  /**
   * EDUCATION SECTION
   * Exact verified academic records:
   * 2025 – Present: Master of Computer Applications, RVS College | 9.3 CGPA
   * 2022 – 2025: B.Com (Accounting and Finance), RVS College | 7.6 CGPA
   * 2022: Higher Secondary | 83%
   * 2020: Secondary | 80%
   */
  education: [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'RVS College of Arts and Science',
      year: '2025 – Present',
      gradeOrCgpa: '9.3 CGPA',
      status: 'Pursuing',
      highlights: [
        'Academic Distinction with outstanding 9.3 CGPA across advanced computing coursework',
        'Specializing in Full-Stack Software Engineering, Relational and NoSQL Databases, and RESTful Architectures',
        'Architected end-to-end applications including CampusVote election platform and Ticket Management System',
      ],
    },
    {
      degree: 'B.Com (Accounting and Finance)',
      institution: 'RVS College of Arts and Science',
      year: '2022 – 2025',
      gradeOrCgpa: '7.6 CGPA',
      status: 'Completed',
      highlights: [
        'Graduated with 7.6 CGPA, establishing strong foundation in financial modeling, cost analysis, and computational math',
        'Developed acute problem-solving methodologies that directly inform software architecture and database design',
      ],
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'State Board',
      year: '2022',
      gradeOrCgpa: '83%',
      status: 'Completed',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'State Board',
      year: '2020',
      gradeOrCgpa: '80%',
      status: 'Completed',
    },
  ],

  /**
   * CERTIFICATIONS & WORKSHOPS
   */
  certifications: [
    {
      title: 'Python for Data Science',
      issuer: 'NPTEL',
      date: 'Feb 2026',
    },
    {
      title: 'MySQL Workshop',
      issuer: 'RVS College of Arts and Science',
      date: 'Sep 2025',
    },
    {
      title: 'C Programming',
      issuer: 'Simplilearn',
      date: 'Jul 2025',
    },
  ],
};
