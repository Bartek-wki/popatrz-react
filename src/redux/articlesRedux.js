//selectors
export const getAllArticles = ({ articles }) => articles
export const getArticleById =({articles}, articleId) => articles.find(article => article.articleId === articleId)

// actions
const createActionName = actionName => `app/articles/${actionName}`;

// action creators
const articlesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default articlesReducer;