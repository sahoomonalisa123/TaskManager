export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        REGISTER : "/api/auth/register", // Register a new User (Admin and member)
        LOGIN: "/api/auth/login", //Authenticate user and return jwt token
        GET_PROFILE: "/api/auth/profile", //Get logged in user details
    },

    USERS: {
        GET_ALL_USERS: "/api/users", //Get all users admin only
        GET_USER_BY_ID: (userId) => `/api/users/${userId}`,//Get user by ID
        CREATE_USER: "/api/users", //Create a new user (Admin only)
        UPDATE_USER: (userId) => `/api/users/${userId}`,//update user details
        DELETE_USER:(userId)=> `/api/users/${userId}` //Delete a user
    },

    TASKS:{
        GET_DASHBOARD_DATA:"/api/tasks/dashboard-data", //Get Dashboard Data
        GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data",//Get user dashboard data
        GET_ALL_TASKS: "/api/tasks",// Get all tasks(Admin: all, User: only assigned)
        GET_TASK_BY_ID:(taskId) => `/api/tasks/${taskId}`,//Gets task bu ID
        CREATE_TASK: "/api/tasks",//Create a new Task (Admin only)
        UPDATE_TASK:(taskId) => `/api/tasks/${taskId}`,//Update tasks details
        DELETE_TASK:(taskId) =>`/api/tasks/${taskId}`,//Delete a task (Admin only)

        UPDATE_TASK_STATUS:(taskId)=> `/api/tasks/${taskId}/status`,//Update task status
        UPDATE_TODO_CHECKLIST:(taskId)=> `/api/tasks/${taskId}/todo`//update todo checklist
    },

    REPORTS:{
        EXPORTS_REPORTS: "/api/reports/exports/tasks", //Download all tasks as an Excel/PDF report
        EXPORTS_USERS:"/api/reports/exports/users"//Download user-task report
    },

    IMAGE: {
        UPLOAD_IMAGE: "api/auth/upload-image",
    }

}