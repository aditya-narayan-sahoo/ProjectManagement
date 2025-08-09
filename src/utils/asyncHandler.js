/**
 * A higher-order function that wraps an asynchronous request handler function
 * to catch and forward any errors to the next middleware in the Express.js stack.
 *
 * @param {Function} requestHandler - The asynchronous request handler function to be wrapped.
 * @returns {Function} - A new function that wraps the requestHandler and handles any errors.
 */
export const asyncHandler = (requestHandler) => {
  return async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
