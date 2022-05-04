import React from "react";
import Link from "next/link";

type Props = {};

const ROUTES = [
  { title: "Home", href: "/" },
  { title: "New", href: "/new" },
  { title: "Top", href: "/top" },
  { title: "Sign In", href: "/signin" },
];

const Nav = () => {
  return (
    <nav className="container mx-auto">
      <ul className="flex space-x-4">
        {ROUTES.map((route) => (
          <li>
            <Link href={route.href}>
              <a className="p-2">{route.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
