import productsTypes from "./products.types";

const INITIAL_STATE = {
  products: [],
  product: {},
  loading: false,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case productsTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    case productsTypes.IS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    /////////////////////////////////

    case productsTypes.SET_PRODUCT_RATING:
      let productsCopy = { ...state.products };

      let copyData = [...productsCopy.data];

      let productIndex = copyData.findIndex(
        (p) => p.documentID === action.payload.documentID
      );

      copyData[productIndex].rating = action.payload.rating;

      productsCopy = { ...state.products, data: copyData };

      console.log(productsCopy);

      return {
        ...state,
        products: productsCopy,
      };

    ///////////////////////////////

    case productsTypes.SET_SELECTED_PRODUCT_RATING:
      console.log(action.payload);
      return {
        ...state,
        product: { ...state.product, rating: action.payload.rating },
      };

    default:
      return state;
  }
};

export default productsReducer;
