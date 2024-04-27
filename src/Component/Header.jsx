import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../Asseat/logo.png";
import user1 from "../Asseat/user2.png";
import "./Css/header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "bootstrap";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// redux auth slice
import {
  loginStart,
  loginSuccess,
  loginError,
  logOut,
  loadingStart,
  loadingStop,
} from "../redux/slices/auth.slice";

// session storage
import {
  setUserAuth,
  getUserAuth,
  removeUserAuth,
} from "../utils/sessionStorage";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Category", href: "/Category", current: false },
  { name: "Feature", href: "/Feature", current: false },
  { name: "Contact ", href: "/Contact", current: false },
  { name: "About", href: "/About", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const location = useLocation()
  //auth0
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  //auth0

  //redux
  const { userData, token, Authenticated, loading, error } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  //redux

  const userLogin = (e) => {
    dispatch(loginStart());
    setTimeout(() => {
      loginWithRedirect();
      setTimeout(() => {
        if (isAuthenticated) {
          dispatch(loginSuccess(user));
        } else {
          dispatch(loginError());
        }
      }, 5000);
    }, 2000);
  };
  const userLogout = () => {
    removeUserAuth();
    dispatch(logOut());
    logout();
  };

  useEffect(() => {
    if (isAuthenticated) {
      setUserAuth(user);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    if (getUserAuth()) {
      dispatch(loginSuccess(getUserAuth()));
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && userData===undefined) {
      dispatch(loadingStart());
    } else if (getUserAuth() && userData===undefined) {
      dispatch(loadingStart());
    } else {
      dispatch(loadingStop());
    }
  });

  // const [userData, setUserData] = useState([]);

  // const nevigate = useNavigate();

  // const handleLogout = () => {
  //   if (window.confirm("Are you sure you want to log out!")) {
  //     logout({
  //       logoutParams: {
  //         returnTo: window.location.origin,
  //       },
  //     });
  //     sessionStorage.removeItem("user");
  //   }
  // };
  // useEffect(() => {
  //   if (!isAuthenticated && !userData) {
  //     nevigate("/");
  //   }
  // });
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     sessionStorage.setItem("user", JSON.stringify(user));
  //   }
  // }, [isAuthenticated, user]);

  // useEffect(() => {
  //   setUserData(JSON.parse(sessionStorage.getItem("user")));
  // }, [isAuthenticated, user]);

  return (
    <Disclosure as="nav" className="bg-gray-800 fixed w11 maar ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6  lg:px-6 m-0 ">
            <div className="relative flex h-16 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center  ms-0 mm11">
                  <img
                    className="h-8 w-auto items-center flex"
                    src={logo}
                    alt="Your Company"
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.href === location.pathname
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-dark-700 big1 hover:text-amber-500",
                          "rounded-md px-3 py-2 text-sm font-medium select-none"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}

                {!!getUserAuth() || isAuthenticated ? (
                  <>
                    <h1 className="text-white font-bold md:block hidden">
                      {userData?.name}
                    </h1>

                    <Menu as="div" className="relative ml-5">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={userData?.picture || user1}
                            alt="user"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/Proflie"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-dark hover:text-amber-500 hover:font-semibold"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-dark  hover:text-amber-500 hover:font-semibold"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                // onClick={handleLogout}
                                onClick={userLogout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-dark  hover:text-amber-500 hover:font-semibold"
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    <button
                      type="button"
                      className=" ms-3 relative rounded-full  bg-gray-800 p-1 text-white hover:text-amber-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="ms-0 relative rounded-full  bg-gray-800 p-1 text-white hover:text-amber-500 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <BellIcon
                              className="h-6 w-6 rounded-full"
                              aria-hidden="true"
                            />
                            {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Edit
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Duplicate
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Archive
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Move
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Share
                                  </Link>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Add to favorites
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link
                                    to="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    Delete
                                  </Link>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </button>
                  </>
                ) : (
                  <Link
                    // onClick={() => loginWithRedirect()}
                    onClick={userLogin}
                    className="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-black hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 button"
                  >
                    Login
                  </Link>
                )}

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.href === location.pathname
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
