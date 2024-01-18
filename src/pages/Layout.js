import ButtonLink from "@/components/buttonLink";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="rounded-full bg-primary p-4 border border-white">
        <div className="flex flex-row justify-center gap-10">
          <ButtonLink href="/" text="Home" />
          <h1 class="text-4xl font-bold text-white mb-4 relative">
            <span class="border-b border-white pb-1">W</span>
            <span>o</span>
            <span>r</span>
            <span>k</span>
            <span class="border-b border-white pb-1 ml-1">O</span>
            <span>u</span>
            <span>t</span>
            <span> </span>
            <span class="border-b border-white pb-1 ml-1">G</span>
            <span>e</span>
            <span>n</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>o</span>
            <span>r</span>
          </h1>
          <ButtonLink href="/create" text="Create workout" />
        </div>
      </header>
      <main className="m-4 flex-1 h-[83.5%]">{children}</main>
      <footer className="rounded-full bg-primary p-3 text-center mt-5  border border-white"></footer>
    </>
  );
};

export default Layout;
