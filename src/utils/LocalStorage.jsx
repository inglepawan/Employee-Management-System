const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@gmail.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-10-24",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar Responsiveness",
        taskDescription: "Fix the navigation bar layout on mobile and tablet screens.",
        taskDate: "2026-10-25",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Dashboard Layout",
        taskDescription: "Build the initial dashboard layout with reusable React components.",
        taskDate: "2026-10-20",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Website Images",
        taskDescription: "Compress website images to improve page loading speed.",
        taskDate: "2026-10-18",
        category: "Optimization"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Form Validation",
        taskDescription: "Add email and password validation to the login form.",
        taskDate: "2026-10-26",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Amit",
    email: "employee2@gmail.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API Integration",
        taskDescription: "Integrate the user profile API into the frontend application.",
        taskDate: "2026-10-24",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update User Profile",
        taskDescription: "Add profile editing functionality with name and email fields.",
        taskDate: "2026-10-19",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test Login Functionality",
        taskDescription: "Test valid and invalid login credentials and error messages.",
        taskDate: "2026-10-25",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Resolve API Timeout",
        taskDescription: "Investigate and fix the API request timeout issue.",
        taskDate: "2026-10-17",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "employee3@gmail.com",
    password: "123",
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Task Management UI",
        taskDescription: "Create task cards displaying task titles, descriptions, and statuses.",
        taskDate: "2026-10-24",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Task Filters",
        taskDescription: "Add filters to display tasks by category and completion status.",
        taskDate: "2026-10-26",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Task Categories",
        taskDescription: "Organize tasks into development, testing, and documentation categories.",
        taskDate: "2026-10-20",
        category: "Planning"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Search",
        taskDescription: "Add a search bar to find tasks by their titles.",
        taskDate: "2026-10-27",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Task Card Styling",
        taskDescription: "Correct spacing and alignment issues in the task card component.",
        taskDate: "2026-10-18",
        category: "UI Fix"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Component Structure",
        taskDescription: "Review reusable components and remove duplicated UI code.",
        taskDate: "2026-10-21",
        category: "Code Review"
      }
    ]
  },

  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@gmail.com",
    password: "123",
    taskNumbers: {
      active: 4,
      newTask: 2,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Test Cases",
        taskDescription: "Write test cases for login, logout, and password validation.",
        taskDate: "2026-10-24",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Perform Regression Testing",
        taskDescription: "Verify that recent changes have not broken existing functionality.",
        taskDate: "2026-10-25",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Dashboard Navigation",
        taskDescription: "Verify that all dashboard navigation links work correctly.",
        taskDate: "2026-10-19",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Verify Mobile Layout",
        taskDescription: "Identify and report layout issues on smaller mobile screens.",
        taskDate: "2026-10-18",
        category: "Quality Assurance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Task Status Updates",
        taskDescription: "Verify that task statuses update correctly when employees complete tasks.",
        taskDate: "2026-10-27",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Document Reported Bugs",
        taskDescription: "Prepare a report documenting identified bugs and their reproduction steps.",
        taskDate: "2026-10-22",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Validate Form Errors",
        taskDescription: "Check whether appropriate error messages appear for invalid form inputs.",
        taskDate: "2026-10-26",
        category: "Quality Assurance"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikas",
    email: "employee5@gmail.com",
    password: "123",
    taskNumbers: {
      active: 5,
      newTask: 3,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Project Documentation",
        taskDescription: "Document the project setup process and important application features.",
        taskDate: "2026-10-24",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update README",
        taskDescription: "Update the README file with installation and usage instructions.",
        taskDate: "2026-10-20",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Pull Requests",
        taskDescription: "Review teammates' code changes and provide actionable feedback.",
        taskDate: "2026-10-25",
        category: "Code Review"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Improve Error Handling",
        taskDescription: "Add appropriate error handling for failed requests and unexpected responses.",
        taskDate: "2026-10-18",
        category: "Development"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Project Demo",
        taskDescription: "Prepare a demonstration of the task management application for the team.",
        taskDate: "2026-10-28",
        category: "Presentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Organize Project Files",
        taskDescription: "Organize components, assets, and utility files into appropriate folders.",
        taskDate: "2026-10-21",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Review Application Performance",
        taskDescription: "Identify unnecessary re-renders and opportunities to improve performance.",
        taskDate: "2026-10-27",
        category: "Optimization"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Logout",
        taskDescription: "Add logout functionality and clear the current user's session state.",
        taskDate: "2026-10-29",
        category: "Development"
      }
    ]
  }
];




const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return{employees, admin}
}