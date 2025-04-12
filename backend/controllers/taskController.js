const Task = require("../models/Task");

// @desc Get all tasks (Admin: all, User: only assigned tasks )
// @route GET /api/tasks/
// @access Private
const getTasks = async (req, res) => {
    try {
        const { status } = req.query;
        let filter = {};

        if (status) {
            filter.status = status;
        }

        let tasks;

        if (req.user.role === "admin") {
            tasks = await Task.find(filter).populate(
                "assignedTo",
                "name email profileImageUrl"
            );
        } else{
            tasks = await Task.find({...filter, assignedTo: req.user._id }).populate(
                "assignedTo",
                "name email profileImageUrl"
            );

            // Add completed todochecklist count to each task
            tasks = await Promise.all(
                tasks.map(async (task) => {
                    const completedCount = task.todoChecklist.filter(
                        (item) => item.completed
                    ).length;
                    return { ...task._doc, completedCount: completedCount };
                })
            );

            // Status summary counts
            const allTasks = await Task.countDocuments(
                req.user.role === "admin" ? {}: { assignedTo: req.user._id }
            );

            const pendingTasks = await Task.countDocuments({
                ...filter,
                status: "pending",
                ...(req.user.role !== "admin" && { assignedTo: req.user._id }),
            });
            const inProgressTasks = await Task.countDocuments({
                ...filter,
                status: "In Progress",
                ...(req.user.role !== "admin" && { assignedTo: req.user._id }),
            }); 
            const completedTasks = await Task.countDocuments({
                ...filter,
                status: "Completed",
                ...(req.user.role !== "admin" && { assignedTo: req.user._id }),
            });

            res.json({
                tasks,
                statusSummary: {
                    all: allTasks,
                    pendingTasks,
                    inProgressTasks,
                    completedTasks,
                },
            });
        }

    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

// @desc Get task by ID
// @route GET /api/tasks/:id
// @access Private
const getTaskById = async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

// @desc Create a new task {Admin only}
// @route GET /api/task/:id
// @access Private
const createTask = async (req, res) => {
    try {
        const {
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,
        } = req.body;
        if (!Array.isArray(assignedTo)) {
            return res
             .status(400)
             .json({ message: "assignedTo must be an array of user IDs"});
        }
       
        const task = await Task.create({
            title,
            description,
            priority,
            dueDate,
            assignedTo,
            attachments,
            todoChecklist,

        });

        res.status(201).json({ message: "Task created successfully", task});
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

// @desc Update task details
// @route PUT /api/tasks/:id
// @access  Private 
const updateTask = async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

// @desc Delete a task (Admin only)
// @route DELETE /api/tasks/:id
// @access  Private (Admin)
const deleteTask = async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};


// @desc Update task status
// @route PUT /api/tasks/:id/status
// @access Private
const updateTaskStatus = async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};


// @desc Update task checklist
// @route PUT /api/tasks/:id/todo
// @access Private
const updateTaskChecklist = async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};


// @desc Dashboard Data (Admin only)
// @route GET /api/tasks/tasks/dashboard-data
// @access  Private 
const getDashboardData = async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

// @desc Dashboard Data (User-specific)
// @route GET /api/tasks/tasks/dashboard-data
// @access  Private 
const getUserDashboardData = async (req, res) => {
    try {
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error: error.message});
    }
};

module.exports = {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    updateTaskChecklist,
    getDashboardData,
    getUserDashboardData,

};