import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [animateHeader, setAnimateHeader] = useState(false);
  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  const menuItems = [
    { title: "Home", url: "/#" },
    { title: "About Us", url: "/aboutus" },
    { title: "Contact Us", url: "contactus" }
  ];
  return (
    <header
      className={`w-full backdrop-filter backdrop-blur-xl bg-white/50 fixed z-10 trasition ease-in-out duration-500 ${
        animateHeader && "shadow-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto ">
        <div
          className={`flex max-w-screen-xl py-10 ${
            animateHeader && "py-5"
          } mx-auto items-center justify-between px-8 trasition ease-in-out duration-500`}
        >
          <img className="-ml-16 max-w-[250px] pr-8" src="/src/logo.png">
          </img>
          <nav>
            <ul className="flex items-center justify-start">
              {menuItems?.map((item) => (
                <li key={item?.title}>
                  <Link href={item?.url}>
                    <a className="px-2 lg:px-6 py-6 text-md border-b-2 border-transparent hover:border-yellow-400 leading-[22px] md:px-3 text-gray-400 hover:text-yellow-500">
                      {item?.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
