//selectors
export const getAbout = ({ about }) => about

// actions
const createActionName = actionName => `app/apout/${actionName}`;

// action creators
const aboutReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default aboutReducer;