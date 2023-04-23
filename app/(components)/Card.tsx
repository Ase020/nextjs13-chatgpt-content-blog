import Link from "next/link";

type Props = {
  className?: string;
  imageHeight?: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
};

const Card = ({
  className,
  imageHeight,
  isLongForm = false,
  isSmallCard = false,
}: Props) => {
  return (
    <div className={className}>
      <Link
        href="/"
        className="basis-full hover:opacity-70 cursor-pointer transition ease-in-out delay-150"
      >
        <div className={`${imageHeight} w-auto mb-3 relative`}>img</div>
      </Link>

      <div className="basis-full ">
        <Link href="/">
          <h4
            className={`font-bold hover:text-accent-green
             ${isSmallCard ? "text-base line-clamp-2" : "text-lg"}
            `}
          >
            title
          </h4>
        </Link>

        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs">author</h5>
          <h6 className="text-wh-300 text-xs">date</h6>
        </div>

        <p
          className={`text-wh-500 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          Yeah, yes, it’s me again. EDDY ASHIOYA. Biko is away, in shags
          somewhere, fussing over his grass or pigeons. Old age, things. Anyway,
          I’m holding forte here. I haven’t forgotten the directions to this
          place, even if the rain suggests I should rather be in bed, preferably
          not alone—with some irredentist African author by my side. I see
          things haven’t changed much here. The TV’s remote power button remains
          jammed eh? The house feels the same. You still have the same hideous
          curtains and vyombo za wageni are rotting in the wall unit. Kwani you
          guys never have visitors?
        </p>
      </div>
    </div>
  );
};

export default Card;
