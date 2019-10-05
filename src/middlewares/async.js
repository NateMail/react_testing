export default ({ dispatch }) => next => action => {
  // check to see if the action has a promise on its 'payload'
  // If it does, then wiat for it to resolve
  // If it doesn't, then send the action on to the next middleware

  if (!action.payload || !action.payload.then) {
    return next(action);
  }
};
