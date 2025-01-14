// Internal Imports
import "./TasksManagement.css";
import Profile1Img from "../../assets/imgs/profile1.png";
import Profile2Img from "../../assets/imgs/profile.png";
import TaskCard from "../../components/taskCard/TaskCard";
import { useEffect, useState } from "react";

// External Imports
import { Button, Container, Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TaskForm from "./../../components/taskForm/TaskForm";
import { IsLoginLs, isAdmin } from "../../utils/LsUtils"; // Import isAdmin
import { useNavigate } from "react-router-dom";

export default function TasksManagement() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!IsLoginLs()) {
            navigate("/");
        }
    }, []);

    // State for tasks
    const [tasks, setTasks] = useState([
        {
            id: 1,
            checkInDate: "2023-10-15",
            checkoutDate: "2023-10-20",
            description: "Plan and organize team-building activities.",
            name: "Team Building Event",
            Member: {
                name: "Zineb",
                profileImg: Profile1Img,
            },
        },
        {
            id: 2,
            checkInDate: "2023-11-01",
            checkoutDate: "2023-11-05",
            description: "Prepare for the annual company conference.",
            name: "Annual Conference",
            Member: {
                name: "Amine",
                profileImg: Profile2Img,
            },
        },
    ]);

    // State for managing the form dialog
    const [openDialog, setOpenDialog] = useState(false);
    const [currentTask, setCurrentTask] = useState(null);

    // State for managing the delete confirmation dialog
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState(null);

    // Handle adding/editing a task
    const handleSaveTask = (task) => {
        if (task.id) {
            // Edit existing task
            setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
        } else {
            // Add new task
            const newTask = { ...task, id: Date.now() };
            setTasks([...tasks, newTask]);
        }
        setOpenDialog(false);
    };

    // Handle deleting a task
    const handleDeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
        setOpenDeleteDialog(false); // Close the confirmation dialog
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

    // Check if the user is an admin
    const userIsAdmin = isAdmin();

    return (
        <main className="PageComponentClass TasksManagementComponentClass">
            <Container maxWidth="xl" className="TasksManagementComponentClassContainer">
                {/* Show "Add Task" button only if the user is an admin */}
                {userIsAdmin && (
                    <div className="header">
                        <h1 className="pageTitle">Tasks Management</h1>
                        <Button variant="contained" startIcon={<AddIcon />} onClick={() => handleOpenDialog()}>
                            Add Task
                        </Button>
                    </div>
                )}

                <div className="tasksList">
                    {tasks.map((task) => (
                        <TaskCard
                            key={task.id}
                            task={task}
                            onEdit={userIsAdmin ? () => handleOpenDialog(task) : null} // Show edit button only if admin
                            onDelete={userIsAdmin ? () => handleOpenDeleteDialog(task.id) : null} // Show delete button only if admin
                        />
                    ))}
                </div>

                {/* Dialog for adding/editing a task */}
                {userIsAdmin && (
                    <Dialog open={openDialog} onClose={handleCloseDialog}>
                        <DialogTitle>{currentTask ? "Edit Task" : "Add Task"}</DialogTitle>
                        <DialogContent>
                            <TaskForm task={currentTask} onSave={handleSaveTask} onCancel={handleCloseDialog} />
                        </DialogContent>
                    </Dialog>
                )}

                {/* Delete confirmation dialog */}
                {userIsAdmin && (
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
                )}
            </Container>
        </main>
    );
}