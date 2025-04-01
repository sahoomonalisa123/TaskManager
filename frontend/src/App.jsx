import React from 'react'
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";
import Dashboard from './pages/Admin/Dashboard';
import ManageTasks from './pages/Admin/ManageTasks';
import ManageUsers from './pages/Admin/ManageUsers';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import CreateTask from './pages/Admin/CreateTask';
import UserDashboard from './pages/User/UserDashboard';
import ViewTaskDetails from './pages/User/ViewTaskDetails';
import PrivateRoute from './routes/PrivateRoute';     
import MyTasks from './pages/User/MyTasks';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/*Admin Routes*/}
          <Route element={<PrivateRoute allowRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/tasks" element={<ManageTasks />} />
            <Route path="/admin/create-task" element={<CreateTask />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route>

          {/*User Routes */}
          <Route element={<PrivateRoute allowRoles={["admin"]} />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/task" element={<MyTasks />} />
            <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />


          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
