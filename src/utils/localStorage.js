export const setProductData = (data) => {
  localStorage.setItem("products", JSON.stringify(data));
};

export const getProductData = () => {
  return JSON.parse(localStorage.getItem("products"));
};

export const removeProductData = () => {
  localStorage.removeItem("products");
};
