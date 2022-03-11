//selectors
export const getAllHowWeLook = ({ howWeLook }) => howWeLook;
export const getHowWeLookById = ({howWeLook}, id) => howWeLook.find(article => article.howWeLook === id)

// actions
const createActionName = actionName => `app/howWeLook/${actionName}`;

// action creators
const howWeLookReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default howWeLookReducer;