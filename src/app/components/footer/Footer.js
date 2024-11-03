import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-12 bg-black text-white px-4">
      <nav>
        <ul className="list-none flex gap-5">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <div className="text-sm">
        &copy; {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
