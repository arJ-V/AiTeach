// src/utils/validateInputs.js

/**
 * Validates the input data provided by the user.
 * @param {Object} inputData - User input data.
 * @param {string} inputData.notes - Class notes or study material.
 * @param {string} inputData.topics - Topics for the quiz.
 * @param {string} inputData.level - Education level of the student.
 * @returns {Object} - Validation result with isValid and error messages.
 */
export const validateInputs = (inputData) => {
    const errors = {};

    // Validate notes
    if (!inputData.notes || inputData.notes.trim() === '') {
        errors.notes = 'Notes cannot be empty.';
    }

    // Validate topics
    if (!inputData.topics || inputData.topics.trim() === '') {
        errors.topics = 'Topics cannot be empty.';
    }

    // Validate education level
    if (!inputData.level || inputData.level.trim() === '') {
        errors.level = 'Education level cannot be empty.';
    }

    // Determine if the input is valid
    const isValid = Object.keys(errors).length === 0;

    return { isValid, errors };
};
