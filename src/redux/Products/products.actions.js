import productsTypes from "./products.types";

export const addProductStart = (productData) => ({
  type: productsTypes.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = (filters = {}) => ({
  type: productsTypes.FETCH_PRODUCTS_START,
  payload: filters,
});

export const setProducts = (products) => ({
  type: productsTypes.SET_PRODUCTS,
  payload: products,
});
export const deleteProductStart = (productID) => ({
  type: productsTypes.DELETE_PRODUCT_START,
  payload: productID,
});

/////////////

export const fetchProductStart = (productID) => ({
  type: productsTypes.FETCH_PRODUCT_START,
  payload: productID,
});

export const setProduct = (product) => ({
  type: productsTypes.SET_PRODUCT,
  payload: product,
});

export const setIsLoading = (payload) => ({
  type: productsTypes.IS_LOADING,
  payload: payload,
});

/////////////////

export const getProductRatingStart = (payload) => ({
  type: productsTypes.GET_PRODUCT_RATING_START,
  payload: payload,
});

export const setProductRating = (payload) => ({
  type: productsTypes.SET_PRODUCT_RATING,
  payload: payload,
});

export const setSelectedProductRating = (payload) => ({
  type: productsTypes.SET_SELECTED_PRODUCT_RATING,
  payload: payload,
});

///////////////

export const handleRateStart = (payload) => ({
  type: productsTypes.HANDLE_RATE_START,
  payload: payload,
});

export const handleSelectedProductRateStart = (payload) => ({
  type: productsTypes.HANDLE_SELECTED_PRODUCT_RATE_START,
  payload: payload,
});
