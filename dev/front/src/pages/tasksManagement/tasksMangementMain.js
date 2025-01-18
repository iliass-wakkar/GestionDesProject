// Internal Imports
import "./TasksManagement.css";
import TaskCard from "../../components/taskCard/TaskCard";
import { useEffect, useState } from "react";

// External Imports
import { Button, Container, Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskForm from "./../../components/taskForm/TaskForm";
import { IsLoginLs } from "../../utils/LsUtils";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../utils/config"; // Import the baseUrl

export default function TasksManagement() {
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!IsLoginLs()) {
      navigate("/");
    } else {
      fetchTasks(); // Fetch tasks when the component mounts
    }
  }, [navigate]);

  // State for tasks
  const [tasks, setTasks] = useState([]);

  // State for managing the form dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  // State for managing the delete confirmation dialog
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Fetch tasks from the API (only on component mount)
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${baseUrl}/tasks`);
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      alert("Failed to fetch tasks. Please try again.");
    }
  };

  // Handle adding/editing a task
  const handleSaveTask = async (task) => {
    try {
      if (task.id) {
        // Edit existing task
        await axios.patch(`${baseUrl}/tasks/${task.id}`, task);
        // Update the local state
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t.id === task.id ? task : t))
        );
      } else {
        // Add new task
        const response = await axios.post(`${baseUrl}/tasks`, task);
        // Update the local state
        setTasks((prevTasks) => [...prevTasks, response.data]);
      }
      setOpenDialog(false);
    } catch (error) {
      console.error("Error saving task:", error);
      alert("Failed to save task. Please try again.");
    }
  };

  // Handle deleting a task
  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${baseUrl}/tasks/${id}`);
      // Update the local state
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      setOpenDeleteDialog(false); // Close the confirmation dialog
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task. Please try again.");
    }
  };

  // Open dialog for adding/editing a task
  const handleOpenDialog = (task = null) => {
    setCurrentTask(task);
    setOpenDialog(true);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentTask(null);
  };

  // Open delete confirmation dialog
  const handleOpenDeleteDialog = (id) => {
    setTaskToDelete(id);
    setOpenDeleteDialog(true);
  };

  // Close delete confirmation dialog
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setTaskToDelete(null);
  };

  return (
    <main className="PageComponentClass TasksManagementComponentClass">
      <Container maxWidth="xl" className="TasksManagementComponentClassContainer">
        <div className="header">
          <h1 className="pageTitle">Tasks Management</h1>
          <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
            Add Task
          </Button>
        </div>

        <div className="tasksList">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={() => handleOpenDialog(task)}
              onDelete={() => handleOpenDeleteDialog(task.id)} // Open delete confirmation dialog
            />
          ))}
        </div>

        {/* Dialog for adding/editing a task */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>{currentTask ? "Edit Task" : "Add Task"}</DialogTitle>
          <DialogContent>
            <TaskForm task={currentTask} onSave={handleSaveTask} onCancel={handleCloseDialog} />
          </DialogContent>
        </Dialog>

        {/* Delete confirmation dialog */}
        <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <p>Are you sure you want to delete this task?</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDeleteDialog} color="primary">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleDeleteTask(taskToDelete); // Delete the task
              }}
              color="error"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </main>
  );
}