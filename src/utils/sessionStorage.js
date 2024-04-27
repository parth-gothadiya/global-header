export const setUserAuth = (data) => {
  sessionStorage.setItem("user", JSON.stringify(data));
};

export const getUserAuth = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

export const removeUserAuth = () => {
  sessionStorage.removeItem("user");
};

export const setBannerOnce = (data) => {
  sessionStorage.setItem("banner", JSON.stringify(data));
};

export const getBannerOnce = () => {
  return JSON.parse(sessionStorage.getItem("banner"));
};

export const removeBannerOnce = () => {
  sessionStorage.removeItem("banner");
};
