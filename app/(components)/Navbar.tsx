import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import { ad1 } from "@/public/assets";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center bg-wh-900 w-full text-wh-10 py-4 px-10">
        <Link href={"/"} className="flex items-center gap-1">
          <Image
            alt="logo"
            src={"./logo.svg"}
            width={20}
            height={20}

            // style={{ objectFit: "cover" }}
          />
          <h1 className="hidden xs:block">aseBlog</h1>
        </Link>

        <div className="flex justify-between items-center gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Trending</Link>
          <Link href={"/"}>About</Link>
        </div>

        <div className="hidden sm:block">
          <SocialLinks />
        </div>
      </nav>

      <div className="flex gap-8 justify-between mt-5 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="text-3xl font-bold uppercase md:text-5xl">
            Blog of the future
          </h1>

          <p className="text-sm mt-3">
            Blog dedicated towards AI and generation and job automation.
          </p>
        </div>

        <div className="basis-full w-auto h-32 relative bg-wh-500">
          <Image
            fill
            alt="advert-1"
            placeholder="blur"
            src={ad1}
            sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
