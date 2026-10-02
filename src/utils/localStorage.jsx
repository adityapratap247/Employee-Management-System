const employee = [
  {
    id: 1,
    username: "employee1",
    email: "employee1@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page for the employee management system.",
        taskDate: "2026-10-02",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navigation Bug",
        taskDescription: "Fix the navigation issue between the dashboard and profile pages.",
        taskDate: "2026-10-03",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create User Documentation",
        taskDescription: "Prepare documentation explaining how employees can use the application.",
        taskDate: "2026-09-28",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Test Server",
        taskDescription: "Deploy the latest version of the application to the test server.",
        taskDate: "2026-09-27",
        category: "Deployment"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard",
        taskDescription: "Add employee statistics and recent activity to the dashboard.",
        taskDate: "2026-10-05",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    username: "employee2",
    email: "employee2@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Registration Form",
        taskDescription: "Create a registration form with validation for new users.",
        taskDate: "2026-10-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect the frontend application with the employee API.",
        taskDate: "2026-10-04",
        category: "API"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Cleanup",
        taskDescription: "Remove duplicate records and clean unused employee data.",
        taskDate: "2026-09-29",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Authentication",
        taskDescription: "Test login and logout functionality for different users.",
        taskDate: "2026-09-30",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Error",
        taskDescription: "Investigate and fix the server error occurring during API requests.",
        taskDate: "2026-09-26",
        category: "Bug Fix"
      }
    ]
  },

  {
    id: 3,
    username: "employee3",
    email: "employee3@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Employee Profile",
        taskDescription: "Develop a profile page where employees can view their information.",
        taskDate: "2026-10-02",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Search Functionality",
        taskDescription: "Add a search feature to find employees by username or ID.",
        taskDate: "2026-10-03",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Update outdated project dependencies to their latest stable versions.",
        taskDate: "2026-09-25",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Write unit tests for the employee management components.",
        taskDate: "2026-09-29",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Database Queries",
        taskDescription: "Improve slow database queries used by the employee dashboard.",
        taskDate: "2026-09-28",
        category: "Database"
      }
    ]
  },

  {
    id: 4,
    username: "employee4",
    email: "employee4@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Reports Page",
        taskDescription: "Build a page that displays employee performance reports.",
        taskDate: "2026-10-02",
        category: "Frontend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Implement Filters",
        taskDescription: "Add filters for employee reports based on department and date.",
        taskDate: "2026-10-04",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Issues",
        taskDescription: "Fix alignment and responsive layout issues on the dashboard.",
        taskDate: "2026-09-30",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Review Code",
        taskDescription: "Review the latest frontend code and suggest improvements.",
        taskDate: "2026-09-28",
        category: "Code Review"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare a presentation explaining the new dashboard features.",
        taskDate: "2026-09-27",
        category: "Presentation"
      }
    ]
  },

  {
    id: 5,
    username: "employee5",
    email: "employee5@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Notifications",
        taskDescription: "Add notifications for new tasks assigned to employees.",
        taskDate: "2026-10-02",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Task Manager",
        taskDescription: "Build a task management interface for employees.",
        taskDate: "2026-10-05",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Project",
        taskDescription: "Set up the project structure and install required dependencies.",
        taskDate: "2026-09-25",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Login System",
        taskDescription: "Verify that employees can successfully log into the system.",
        taskDate: "2026-09-29",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Task Assignment",
        taskDescription: "Fix the issue preventing admins from assigning tasks.",
        taskDate: "2026-09-26",
        category: "Bug Fix"
      }
    ]
  }
];



const admin = [
  {
    id: 6,
    username: "admin",
    email: "admin@gmail.com",
    password: "123"
  }
];

export const SetLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const GetLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employee"));
  const admins = JSON.parse(localStorage.getItem("admin"));

  return { employees, admins };
};