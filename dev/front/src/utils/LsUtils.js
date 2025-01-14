// local storage handler : -----

export function getTokenLs() {
	return localStorage.getItem("token");
}
export function setTokenLs(token) {
	return localStorage.setItem("token", token);
}
export function getUserProfileImgLs() {
	return localStorage.getItem("profileImg");
}
export function setUserLs(token, profileImg) {
	localStorage.setItem("token", token);
	localStorage.setItem("profileImg", profileImg);
}

export function getUserLs() {
	return {
		token: getTokenLs(),
		profileImg: getUserProfileImgLs(),
	};
}
export function dropUserLs() {
	localStorage.removeItem("token");
	localStorage.removeItem("profileImg");
}

export function IsLoginLs() {
	return Boolean(localStorage.getItem("token"));
}
