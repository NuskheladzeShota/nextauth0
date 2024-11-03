"use client";
import Link from "next/link";
import LoggoutButton from "../logoutButton/LoggoutButton";
import Logo from "../../../../public/images/Header Logo.webp";
import DropDown from "../DropDown/DropDown";
import { cilSun, cilMoon, cilScreenDesktop, cilSync } from "@coreui/icons";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CSpinner } from "@coreui/react";
import AuthenticationButton from "../logoutButton/LoggoutButton";

const Header = () => {
  const { user, error, isLoading } = useUser();

  const [currentTheme, setCurrentTheme] = useState(cilSync);

  useEffect(() => {
    function checkTheme() {
      const systemSetting = localStorage.getItem("system");
      const theme = localStorage.getItem("theme");

      if (systemSetting === "true") {
        setCurrentTheme(cilScreenDesktop);
      } else if (systemSetting === "false") {
        setCurrentTheme(theme === "dark" ? cilMoon : cilSun);
      }
    }

    checkTheme();
  }, []);

  const themeOptions = [
    {
      label: "light",
      icon: cilSun,
      changeTheme: () => {
        localStorage.setItem("theme", "light");
        localStorage.setItem("system", false);
        setCurrentTheme(cilSun);
      },
    },
    {
      label: "dark",
      icon: cilMoon,
      changeTheme: () => {
        localStorage.setItem("theme", "dark");
        localStorage.setItem("system", false);

        setCurrentTheme(cilMoon);
      },
    },
    {
      label: "system",
      icon: cilScreenDesktop,
      changeTheme: () => {
        localStorage.setItem("system", true);
        localStorage.removeItem("theme");

        setCurrentTheme(cilScreenDesktop);
      },
    },
  ];
  const themeHandler = () => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  };
  useEffect(() => {
    if (currentTheme !== cilScreenDesktop) return;
    const themeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    themeQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      themeQuery.removeEventListener("change", handleSystemThemeChange);
  }, [currentTheme]);

  const listItemStyle =
    "text-black hover:bg-gray-400 dark:hover:bg-header-hover-dark font-serif font-normal dark:text-yellow-500 p-4 text-center transition-all cursor-pointer";

  return (
    <header className="flex justify-between items-center bg-neutral-300 dark:bg-dark-header w-full p-4">
      <div className="flex items-center gap-8">
        <Link
          href="/"
          className="w-14 h-14 bg-transparent hover:bg-gray-400 rounded-full dark:hover:bg-header-hover-dark flex items-center"
        >
          <img src={Logo.src} alt="logo"></img>
        </Link>
        <nav>
          <ul className="flex gap-5 list-none">
            <li className={listItemStyle}>Equipment</li>
            <li className={listItemStyle}>Trainers</li>
            <li className={listItemStyle}>Certificates</li>
            <li className={listItemStyle}>Schedules</li>
            <li className={listItemStyle}>Locations </li>
            <Link href="/profile">
              <li className={listItemStyle}>Profile</li>
            </Link>
            <Link href="/settings">
              <li className={listItemStyle}>Settings</li>
            </Link>
            <Link href="/cart">
              <li className={listItemStyle}>Cart</li>
            </Link>
            <Link href="/blog">
              <li className={listItemStyle}>Blog</li>
            </Link>
            <Link href="/products">
              <li className={listItemStyle}>Products</li>
            </Link>
            <Link href="/posts">
              <li className={listItemStyle}>Posts</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-6 pr-5">
        <DropDown
          content={themeOptions}
          buttonText={currentTheme}
          toggleHandler={themeHandler}
          type="Theme"
        ></DropDown>
        <div className="flex items-center">
          {isLoading ? (
            <CSpinner variant="grow" />
          ) : user ? (
            <AuthenticationButton
              href="/api/auth/logout"
              type="logout"
            ></AuthenticationButton>
          ) : (
            <AuthenticationButton
              href="/api/auth/login"
              type="login"
            ></AuthenticationButton>
          )}
          {/* <LoggoutButton /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
