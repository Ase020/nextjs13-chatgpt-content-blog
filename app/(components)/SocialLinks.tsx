import Image from "next/image";
import React from "react";

import {
  twitter,
  facebook,
  instagram,
  google,
  discord,
  pinterest,
} from "public/assets";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a href="https://twitter.com/" rel="noreferrer" target="_blank">
        <Image
          className={`${isDark ? "brightness-0" : ""}hover:opacity-50`}
          src={twitter}
          alt="twitter"
          width={20}
          height={20}
        />
      </a>

      <a href="https://facebook.com/" rel="noreferrer" target="_blank">
        <Image
          className={`${isDark ? "brightness-0" : ""}hover:opacity-50`}
          src={facebook}
          alt="facebook"
          width={20}
          height={20}
        />
      </a>

      <a href="https://instagram.com/" rel="noreferrer" target="_blank">
        <Image
          className={`${isDark ? "brightness-0" : ""}hover:opacity-50`}
          src={instagram}
          alt="instagram"
          width={20}
          height={20}
        />
      </a>

      <a href="https://google.com/" rel="noreferrer" target="_blank">
        <Image
          className={`${isDark ? "brightness-0" : ""}hover:opacity-50`}
          src={google}
          alt="google"
          width={20}
          height={20}
        />
      </a>

      <a href="https://discord.com/" rel="noreferrer" target="_blank">
        <Image
          className={`${isDark ? "brightness-0" : ""}hover:opacity-50`}
          src={discord}
          alt="discord"
          width={20}
          height={20}
        />
      </a>

      <a href="https://pinterest.com/" rel="noreferrer" target="_blank">
        <Image
          className={`${isDark ? "brightness-0" : ""}hover:opacity-50`}
          src={pinterest}
          alt="pinterest"
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
