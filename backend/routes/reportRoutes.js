const express = require('express');
const { protect, adminOnly } = require('../middlewares/authMiddleware');
const { exportTasksReport, exportUsersReport } = require('../controllers/reportController');

const router = express.Router();

router.get("/exports/tasks",protect,adminOnly,exportTasksReport)//Export all tasks as Excel/PDF
router.get("/exports/users",protect,adminOnly,exportUsersReport)//Export all user-task reports

module.exports = router;