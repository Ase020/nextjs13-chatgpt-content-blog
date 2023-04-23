import Link from "next/link";
import { Post } from "@prisma/client";

type Props = {
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  post: Post;
};

const Card = ({
  className,
  imageHeight,
  isLongForm = false,
  isSmallCard = false,
  post,
}: Props) => {
  const { id, author, title, snippet, createdAt, image } = post || {};
  const date = new Date(createdAt);
  const options = { year: "numeric", month: "long", day: "numeric" } as any;
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className={className}>
      <Link
        href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
        className="basis-full hover:opacity-70 cursor-pointer transition ease-in-out delay-150"
      >
        <div className={`${imageHeight} w-auto mb-3 relative`}>img</div>
      </Link>

      <div className="basis-full ">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          <h4
            className={`font-bold hover:text-accent-green
             ${isSmallCard ? "text-base line-clamp-2" : "text-lg"}
            `}
          >
            {title}
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">{post?.author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>

        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {post?.snippet}
        </p>
      </div>
    </div>
  );
};

export default Card;
