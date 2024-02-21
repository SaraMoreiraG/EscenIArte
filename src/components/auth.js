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
