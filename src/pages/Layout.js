import ButtonLink from "@/components/buttonLink";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="h-screen justify-center items-center">
      <header className="rounded-full bg-primary text-white p-4">
        <div className="flex flex-col items-center ">
          <h1>Workout Generator</h1>
          <div className="flex flex-row gap-5">
            <ButtonLink href="/" text="Home" />
            <ButtonLink href="/create" text="Create workout" />
          </div>
        </div>
      </header>
      <main className="m-4">{children}</main>
      <footer className="rounded-full">
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default Layout;
