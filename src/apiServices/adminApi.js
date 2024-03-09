const BASE_URL = 'https://qp4emxqbf5.execute-api.us-east-1.amazonaws.com/prod';

// Function to get the auth token
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

/**
 * Function to add or update a module or class.
 * @param {'module' | 'class'} type - The type of resource to update/add.
 * @param {Object} body - The request payload.
 */
export const updateOrAddResource = async (type, body) => {
	console.log(body)
  const endpoint = type === 'module' ? '/modules' : '/clases';
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, getFetchOptions('PATCH', body));
    if (!response.ok) throw new Error(`Error updating/adding ${type}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error(`updateOrAddResource error:`, error);
    throw error;
  }
};

/**
 * Function to delete a module or class.
 * @param {'module' | 'class'} type - The type of resource to delete.
 * @param {Object} body - The request payload containing courseId and moduleId/classId.
 */
export const deleteResource = async (type, body) => {
  const endpoint = type === 'module' ? '/modules' : '/clases';
  console.log(body)
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, getFetchOptions('DELETE', body));
    if (!response.ok) throw new Error(`Error deleting ${type}: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error(`deleteResource error:`, error);
    throw error;
  }
};
