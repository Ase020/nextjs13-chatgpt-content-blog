import { prisma } from "app/api/client";
import { Post } from "@prisma/client";
import { Sidebar, Subscribe } from "./(components)";
import { Tech, Travel, Other, Trending } from "./(home)";

export const revalidate = 60;

const getPosts = async () => {
  const posts = await prisma.post.findMany();

  const formattedPosts = await Promise.all(
    posts.map(async (post: Post) => {
      const imageModule = require(`../public${post.image}`);
      return {
        ...post,
        image: imageModule.default,
      };
    })
  );

  return formattedPosts;
};

export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Array<Post> = [];
    const techPosts: Array<Post> = [];
    const travelPosts: Array<Post> = [];
    const otherPosts: Array<Post> = [];

    posts.forEach((post: Post, i: number) => {
      if (i < 4) {
        trendingPosts.push(post);
      }

      if (post?.category === "Tech") {
        techPosts.push(post);
      } else if (post?.category === "Travel") {
        travelPosts.push(post);
      } else if (post?.category === "Interior Design") {
        otherPosts.push(post);
      }
    });

    return [travelPosts, techPosts, trendingPosts, otherPosts];
  };

  const [travelPosts, techPosts, trendingPosts, otherPosts] = formatPosts();

  return (
    <main className="leading-7 px-10">
      <Trending trendingPosts={trendingPosts} />

      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech techPosts={techPosts} />
          <Travel travelPosts={travelPosts} />
          <Other otherPosts={otherPosts} />

          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>

        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
