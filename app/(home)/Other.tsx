import { Card } from "../(components)";
import { Post } from "@prisma/client";

type Props = {
  otherPosts: Array<Post>;
};

const Other = ({ otherPosts }: Props) => {
  return (
    <section className="mb-6 pt-4">
      <hr className="border-1 mx-10" />
      <p className="text-2xl font-bold capitalize my-8">other trending posts</p>

      <div className="sm:grid grid-cols-2 gap-16">
        <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[0]}
        />
        <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[1]}
        />
        <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[2]}
        />
        <Card
          className="mt-5 sm:mt-0"
          imageHeight="h-80"
          post={otherPosts[3]}
        />
      </div>
      <hr className="border-1 mx-10 mt-10" />
    </section>
  );
};

export default Other;
