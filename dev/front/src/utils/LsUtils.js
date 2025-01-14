export function getTokenLs() {
	return localStorage.getItem("token");
}

export function setTokenLs(token) {
	localStorage.setItem("token", token);
}

export function getUserLs() {
	try {
		const userJson = localStorage.getItem("user");
		return userJson ? JSON.parse(userJson) : null;
	} catch (e) {
		dropUserLs();

		return {};
	}
}

export function setUserLs(data) {
	localStorage.setItem("user", JSON.stringify(data.user));

	localStorage.setItem("token", data.token);
}

export function getUserProfileImgLs() {
	const user = getUserLs();
	return user ? user.Profile : null;
}

export function dropUserLs() {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
}

export function IsLoginLs() {
	return Boolean(getTokenLs() && getUserLs());
}
export function isAdmin() {
	const user = getUserLs();
	console.log(user?.Type === "Admin");
	return user && user.Type === "Admin";
}

isAdmin();
