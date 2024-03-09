// Base URL for the API
const BASE_URL = 'https://9yn7cg2ewd.execute-api.us-east-1.amazonaws.com/prod';

// Function to get the auth token; ensures token is fresh when called
const getAuthToken = () => localStorage.getItem('authToken');

// Function to generate common fetch options
const getFetchOptions = (method, body = null) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAuthToken()}`,
  },
  mode: 'cors',
  ...(body && { body: JSON.stringify(body) }),
});

// API call to fetch course by ID
export const fetchCourseById = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/get-course-by-id`,
      getFetchOptions("POST", { id })
    );

    if (!response.ok) {
      throw new Error("Error fetching course info: " + response.statusText);
    }

    return await response.json();
  } catch (err) {
    console.error(err);
    throw new Error("Failed to load course information.");
  }
};
