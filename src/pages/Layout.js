import ButtonLink from "@/components/buttonLink";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="flex flex-col items-center ">
          <h1>Workout Generator</h1>
          <div className="flex flex-row gap-5">
            <ButtonLink href="/" text="Home" />
            <ButtonLink href="/create" text="Create workout" />
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
