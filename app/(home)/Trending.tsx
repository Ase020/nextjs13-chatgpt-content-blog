import Link from "next/link";
import Image from "next/image";

import { Post } from "@prisma/client";

type TrendingCardProps = {
  className?: string;
  post: Post;
};

const TrendingCard = ({ className, post }: TrendingCardProps) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      // href="/"
      className={`${className} sm:mt-0 mt-7 block w-full sm:h-auto h-96 relative hover:opacity-70 cursor-pointer transition ease-in-out delay-150`}
    >
      <div className="relative w-full h-full z-0 ">
        <Image
          fill
          style={{ objectFit: "cover" }}
          alt="tech"
          placeholder="blur"
          sizes="(max-width: 480px) 100vw,
                 (max-width: 768px) 75vw,
                 (max-width: 1060px) 50vw,
                 33vw"
          src={post?.image}
        />
      </div>
      <div className="absolute bg-gradient-gradual top-0 left-0 z-1 w-full h-full" />
      <div className="absolute bottom-0 left-0 z-2 p-3">
        <h4 className="inline-block font-semibold px-5 py-1 bg-accent-orange text-wh-900">
          {post?.category}
        </h4>

        <p className="text-wh-100 mt-2">{post?.title}</p>
      </div>
    </Link>
  );
};

type Props = {
  trendingPosts: Array<Post>;
};

const Trending = ({ trendingPosts }: Props) => {
  return (
    <div className="pt-3 pb-10">
      <div className="flex gap-3 items-center">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 font-bold text-sm uppercase font-openSans">
          Trending
        </div>
        <p className="text-sm">
          Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </p>
      </div>

      {/* flex option */}
      {/* <div className="flex justify-between gap-3 my-3">
        <div className="basis-1/2 bg-wh-500 h-96"></div>
        <div className="flex flex-col basis-1/2 gap-3 h-96">
          <div className="basis-1/2 bg-wh-500"></div>
          <div className="flex basis-1/2 gap-3">
            <div className="basis-1/2 bg-wh-500"></div>
            <div className="basis-1/2 bg-wh-500"></div>
          </div>
        </div>
      </div> */}

      {/* grid option */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 my-3 sm:h-[600px]">
        <TrendingCard
          className="col-span-2 row-span-2 bg-wh-500"
          post={trendingPosts[0]}
        />

        <TrendingCard
          className="col-span-2 row-span-1 bg-wh-500"
          post={trendingPosts[1]}
        />

        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[2]}
        />

        <TrendingCard
          className="col-span-1 row-span-1 bg-wh-500"
          post={trendingPosts[3]}
        />
      </div>

      <p className="text-sm">
        {" "}
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
        <br />
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
        <br />
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>
    </div>
  );
};

export default Trending;
