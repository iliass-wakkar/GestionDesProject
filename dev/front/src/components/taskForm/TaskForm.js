import { Button, DialogActions, TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { useState } from "react";
import ProfileImg from "../../assets/imgs/profile.png";
import Profile1Img from "../../assets/imgs/profile1.png";
import Profile2Img from "../../assets/imgs/profile.png";



// TaskForm Component
export default function TaskForm({ task, onSave, onCancel }) {
  const [formData, setFormData] = useState(
    task || {
      checkInDate: "",
      checkoutDate: "",
      description: "",
      name: "",
      Member: {
        name: "",
        profileImg: ProfileImg,
      },
    }
  );

  // List of members for the dropdown
  const members = [
    { name: "Zineb", profileImg: Profile1Img },
   
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("Member.")) {
      const memberField = name.split(".")[1];
      setFormData({
        ...formData,
        Member: {
          ...formData.Member,
          [memberField]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleMemberChange = (e) => {
    const selectedMember = members.find((member) => member.name === e.target.value);
    setFormData({
      ...formData,
      Member: {
        name: selectedMember.name,
        profileImg: selectedMember.profileImg,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        fullWidth
        label="Task Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        margin="normal"
        required
      />
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        margin="normal"
        multiline
        rows={4}
        required
      />
      <TextField
        fullWidth
        label="Check-In Date"
        name="checkInDate"
        type="date"
        value={formData.checkInDate}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        fullWidth
        label="Check-Out Date"
        name="checkoutDate"
        type="date"
        value={formData.checkoutDate}
        onChange={handleChange}
        margin="normal"
        InputLabelProps={{ shrink: true }}
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="member-select-label">Member</InputLabel>
        <Select
          labelId="member-select-label"
          id="member-select"
          value={formData.Member.name}
          onChange={handleMemberChange}
          label="Member"
        >
          {members.map((member) => (
            <MenuItem key={member.name} value={member.name}>
              {member.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type="submit" variant="contained">
          Save
        </Button>
      </DialogActions>
    </form>
  );
}