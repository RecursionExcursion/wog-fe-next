import ButtonLink from "@/components/buttonLink";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="rounded-full bg-primary p-4">
        <div className="flex flex-col items-center ">
          <h1 className="text-4x1">Workout Generator</h1>
          <div className="flex flex-row gap-5">
            <ButtonLink href="/" text="Home" />
            <ButtonLink href="/create" text="Create workout" />
          </div>
        </div>
      </header>
      <main className="m-4 flex-1 h-[80%]">{children}</main>
      <footer className="rounded-full bg-primary p-3 text-center mt-5">
        <p>Footer</p>
      </footer>
    </>
  );
};

export default Layout;
