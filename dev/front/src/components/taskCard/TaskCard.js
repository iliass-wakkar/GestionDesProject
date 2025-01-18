import React from "react";
import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./TaskCard.css";

export default function TaskCard({ task, onEdit, onDelete }) {
	return (
		<div className="taskCard">
			<div className="taskInfo">
				<h3>{task.name}</h3>
				<p>{task.description}</p>
				<p>
					<strong>Check-In:</strong> {task.checkInDate}
				</p>
				<p>
					<strong>Check-Out:</strong> {task.checkoutDate}
				</p>
				<div className="memberInfo">
					<img src={task.Member.profileImg} alt={task.Member.name} />
					<span>{task.Member.name}</span>
				</div>
			</div>
			<div className="taskActions">
				{onEdit && <Button onClick={onEdit}>Edit</Button>}
				{onDelete && (
					<Button onClick={onDelete} color="error">
						Delete
					</Button>
				)}
			</div>
		</div>
	);
}
