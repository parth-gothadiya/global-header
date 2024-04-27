"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeBannerOnce = exports.getBannerOnce = exports.setBannerOnce = exports.removeUserAuth = exports.getUserAuth = exports.setUserAuth = void 0;

var setUserAuth = function setUserAuth(data) {
  sessionStorage.setItem("user", JSON.stringify(data));
};

exports.setUserAuth = setUserAuth;

var getUserAuth = function getUserAuth() {
  return JSON.parse(sessionStorage.getItem("user"));
};

exports.getUserAuth = getUserAuth;

var removeUserAuth = function removeUserAuth() {
  sessionStorage.removeItem("user");
};

exports.removeUserAuth = removeUserAuth;

var setBannerOnce = function setBannerOnce(data) {
  sessionStorage.setItem("banner", JSON.stringify(data));
};

exports.setBannerOnce = setBannerOnce;

var getBannerOnce = function getBannerOnce() {
  return JSON.parse(sessionStorage.getItem("banner"));
};

exports.getBannerOnce = getBannerOnce;

var removeBannerOnce = function removeBannerOnce() {
  sessionStorage.removeItem("banner");
};

exports.removeBannerOnce = removeBannerOnce;