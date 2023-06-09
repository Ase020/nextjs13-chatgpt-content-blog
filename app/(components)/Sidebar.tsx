import Image from "next/image";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import { aboutProfile, ad2 } from "@/public/assets";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-sm text-center font-bold ">
        Subscribe & Follow
      </h4>

      <div className="m-5">
        <SocialLinks isDark />
      </div>

      <div className="block md:hidden">
        <Subscribe />
      </div>

      <div className="bg-wh-900 relative my-8">
        <Image
          // fill
          style={{ objectFit: "cover" }}
          className="hidden md:block my-8 w-full"
          width={500}
          height={1000}
          alt="ad"
          placeholder="blur"
          sizes="(max-width: 480px) 100vw,
                 (max-width: 768px) 75vw,
                 (max-width: 1060px) 50vw,
                 33vw"
          src={ad2}
        />
      </div>

      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-sm text-center font-bold ">
        About the Blog
      </h4>

      <div className="flex justify-center relative my-6">
        <Image
          style={{ objectFit: "cover", width: "500px", height: "250px" }}
          alt="profile"
          placeholder="blur"
          src={aboutProfile}
        />
      </div>

      <h4 className="py-3 px-5 text-wh-500 text-center font-bold ">
        Felix Nyalenda
      </h4>

      <p className="text-sm text-center text-wh-500 line-clamp-4">
        Things have been happening in my life since we last spoke. For instance,
        I just discovered that my plumber is not actually my plumber—the plumber
        I hired subcontracted another plumber. He is a broker. Do you know you
        can never be a millionaire by being a broker? No? The clue is in the
        name, ‘broke-r’.
      </p>
    </section>
  );
};

export default Sidebar;
