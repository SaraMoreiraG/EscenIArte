import jwt_decode from "jwt-decode";

export const isAuthenticated = () => {
  const token = localStorage.getItem("authToken");
  return !!token;
};

export const setToken = (token) => {
  localStorage.setItem("authToken", token);
};

export const removeToken = () => {
  localStorage.removeItem("authToken");
};

export const isAdmin = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const decodedToken = jwt_decode(token);
    return !!decodedToken.admin;
  } catch (error) {
    console.error("Error decoding token: ", error);
    return false;
  }
};
