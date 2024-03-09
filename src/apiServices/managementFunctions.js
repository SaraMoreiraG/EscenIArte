/**
 * Handles input changes for a given field and updates the corresponding state.
 * @param {string} field - The name of the field to update (e.g., 'name', 'description').
 * @param {Function} setEditingObject - The state setter function from useState hook
 *                                      that updates the object holding the editable fields.
 */
export const handleInputChange = (field, setEditingObject) => (e) => {
	console.log(e.target.value);
	const value = e.target.value;
	setEditingObject((prev) => ({ ...prev, [field]: value }));
};

export const findItemById = (items) => (id) => items.find(item => item.id === id);

export const updateEditingState = (setEditingState) => (newState) => {
  setEditingState(currentState => ({
    ...currentState,
    ...newState,
  }));
};

export const startEditingGeneric = (findFunction, setEditingState, adaptState) => (id) => {
  const item = findFunction(id);
  if (item) {
    const newState = adaptState(item);
    updateEditingState(setEditingState)(newState);
  }
};


