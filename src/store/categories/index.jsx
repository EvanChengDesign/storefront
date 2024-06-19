const electronics = {
  title: "ELECTRONICS",
  description: 'Product Listing'
};

const food = {
  title: "FOOD",
  description: 'Product Listing'
};

const clothing = {
  title: "CLOTHING",
  description: 'Product Listing'
};

const categories = { electronics, food, clothing };

let initialState = {
  categories,
  currentCategory: electronics
};

const categoriesReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      return { ...state, currentCategory: state.categories[payload] };
    default:
      return state;
  }
};

export default categoriesReducer;

export function changeCategory(category) {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category
  };
}
