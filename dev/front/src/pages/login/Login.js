import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, TextField } from "@mui/material";
import loginImage from "../../assets/imgs/loginBack.png";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import PasswordField from "../../components/togglePassword/togglePassword";
import ThemeToggle from "../../components/themeToggle/ToggleTheme";
import { baseUrl } from "../../utils/config";

import axios from "axios";
import { IsLoginLs, setUserLs } from "../../utils/LsUtils";

export default function Login() {
	const navigate = useNavigate();
	useEffect(() => {
		if (IsLoginLs()) {
			navigate("/tasksManagement");
		}
	}, []);

	// State for form inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// State for loading and error handling
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior

		// Validate inputs
		if (!email || !password) {
			setError("Please fill in all fields.");
			return;
		}

		setIsLoading(true); // Start loading
		setError(""); // Clear previous errors

		try {
			// Send a POST request to the login endpoint using axios
			const response = await axios.post(`${baseUrl}/login`, {
				email: email,
				password: password,
			});

			// Check if the request was successful
			if (response.status === 200) {
				const data = response.data;
				console.log("Login successful:", data);

				setUserLs(data);


				// Navigate to the tasksManagement page
				navigate("/tasksManagement");
			} else {
				// Handle login failure
				console.error("Login failed:", response.data);
				setError(response.data.message || "Login failed. Please check your credentials and try again.");
			}
		} catch (error) {
			//   console.error("Error during login:", error);

			// Handle axios errors
			if (error.response) {
				console.log(error.response);
				setError(error.response.data.message || "Invalid email or password format");
			} else if (error.request) {
				setError("No response from the server. Please try again later.");
			} else {
				setError("An error occurred during login. Please try again.");
			}
		} finally {
			setIsLoading(false); // Stop loading
		}
	};

	return (
		<div id="login-page">
			<ThemeToggle customClass="themeToggleLoginPage" />
			<div className="left-login-page">
				<img src={loginImage} alt="Login" loading="lazy" />
			</div>
			<div className="right-login-page">
				<Link to="/" className="logo">
					<img src={logo} alt="" width="140px" />
				</Link>

				<form onSubmit={handleLogin}>
					<h1>Login</h1>

					{/* Email Input */}
					<TextField
						id="email"
						label={
							<span>
								🙎‍♂️ <span style={{ marginLeft: "8px" }}>Email</span>
							</span>
						}
						variant="standard"
						margin="normal"
						required
						fullWidth
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						InputProps={{
							style: {
								fontSize: "1.5rem",
								height: "3rem",
							},
						}}
						InputLabelProps={{
							style: {
								fontSize: "1.5rem",
								color: "#828282",
								textAlign: "left",
							},
						}}
					/>

					{/* Password Input */}
					<PasswordField value={password} onChange={(e) => setPassword(e.target.value)} />

					{/* Error Message */}
					{error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

					{/* Links for Forgot Password */}
					<div style={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "1rem" }}>
						<Link
							to="/forgotPassword"
							style={{
								fontSize: "1rem",
								textDecoration: "none",
							}}
						>
							Mot de passe oublié ?
						</Link>
					</div>

					{/* Submit Button */}
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className="submit-login-button"
						sx={{ mt: 3, mb: 2, borderRadius: "50px" }}
						disabled={isLoading} // Disable the button while loading
					>
						{isLoading ? "Loading..." : "Se connecter"}
					</Button>
				</form>
			</div>
		</div>
	);
}
