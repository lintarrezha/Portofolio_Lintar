import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-2 px-4 text-center text-gray-500 dark:text-white">
      <small className="mb-2 block text-xs">
        &copy; {currentYear} All rights reserved | Made with ❤️ by Lintar Rezha.
      </small>
    </footer>
  );
}
