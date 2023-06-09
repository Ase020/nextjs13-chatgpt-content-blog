import { Post } from "@prisma/client";

import { Card } from "../(components)";

type Props = {
  techPosts: Array<Post>;
};

const Tech = ({ techPosts }: Props) => {
  return (
    <section>
      <hr className="border-1 mx-10" />

      <div className="flex my-8 gap-3 items-center">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold uppercase">
          hot
        </h4>

        <p className="text-2xl font-bold">Latest News in Technology</p>
      </div>

      {/* flex option */}
      {/* <div className="flex justify-between items-center gap-5">
        <div className="h-96 basis-1/2 bg-wh-500"></div>
        <div className="h-96 basis-1/2 flex flex-col gap-3">
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
          <div className="bg-wh-500 basis-1/3"></div>
        </div>
      </div> */}

      {/* grid option */}
      <div className="sm:grid grid-cols-2 grid-rows-3 gap-8 my-5">
        <Card
          className="col-span-1 row-span-3"
          imageHeight="h-96"
          isLongForm
          post={techPosts[0]}
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
          post={techPosts[1]}
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
          post={techPosts[2]}
        />
        <Card
          className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3"
          imageHeight="h-48"
          isSmallCard
          post={techPosts[3]}
        />
      </div>
    </section>
  );
};

export default Tech;
