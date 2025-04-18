export const BASE_URL = "http://localhost:8000";

//utils/apiPaths.js
export const API_PATHS = {
    AUTH: {
        REGISTER:"api/auth/register", //Register a new user (Admin or Member)
        LOGIN: "api/auth/login", //Authenticate user & return JWT token
        GET_PROFILE: "api/auth/profile", //Get logged-in user details
    },

    USER: {
        GET_ALL_USERS: "/api/users", //Get all users (Admin only)
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`, //Get user by Id
        CREATE_USER:"/api/users", //CReate a new user (Adnim only)
        UPDATE_USER: (userId) => `/api/users/${userId}`, // Update user details
        DELETE_USER: (userId) => `/api/users/${userId}`, // Update user user
    },

    TASKS: {
        GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get Dashboard Data
        GET_USER_DASHBOARD_DATA: "/api/tasks/dashboard-data", //Get user Dashboard Data
        GET_ALL_TASKS: "/api/tasks", //get all tasks (Admin: all, user: only assign)
        GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, //Get task by ID
        CREATE_TASK: "/api/tasks", //Create a new task (Admin only)
        UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, //Update task details
        DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, //Delete task details

        UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, //Update task sttaus
        UPDATE_TODO_STATUS: (taskId) => `/api/tasks/${taskId}/todo`, //Update todo sttaus
    },

    REPORTS: {
        EXPORT_TASKS: "/api/reports/export/tasks", //Download all tasks as an Excel
        EXPORT_USERS: "/api/reports/export/users", //Download user-task report
    },
    IMAGE: {
        UPLOAD_IMAGE: "api/auth/upload-image",
    },
};