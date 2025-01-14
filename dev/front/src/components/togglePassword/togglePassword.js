import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import "./togglePassword.css"

function PasswordField({text="password" ,onChange}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <TextField
      id="password"
      className="PasswordComponentClass"
      label={
        <span>
          🔑 <span style={{ marginLeft: "8px" }}>{text}</span>
        </span>
      }
      onChange={onChange}
      type={showPassword ? "text" : "password"}
      variant="standard"
      margin="normal"
      required
      fullWidth
      InputProps={{
        style: {
          fontSize: "1.5rem",
          height: "3rem",
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleTogglePassword} edge="end">
              {showPassword ? <VisibilityOff className="visIcon" /> : <Visibility className="visIcon" />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      InputLabelProps={{
        style: {
          fontSize: "1.5rem",
          color: "#828282",
          textAlign: "left",
        },
      }}
    />
  );
}

export default PasswordField;
