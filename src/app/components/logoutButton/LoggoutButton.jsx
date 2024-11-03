import "./logout.css";
import React from "react";

export default function AuthenticationButton({ href, type }) {
  return (
    <a href={href}>
      <button className="h-10 w-20 items-center mt-2 text-black dark:text-white bg-gray-400 hover:bg-gray-500 dark:bg-header-hover-dark rounded-md cursor-pointer ">
        {type === "logout" ? "Log Out" : "Log In"}
      </button>
    </a>
  );
}
