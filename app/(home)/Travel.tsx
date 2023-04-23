import { Card } from "../(components)";

type Props = {};

const Travel = (props: Props) => {
  return (
    <section className="mt-10">
      <hr className="border-1 mx-10" />

      <div className="flex my-8 gap-3 items-center">
        <h4 className="bg-accent-green py-2 px-5 text-wh-900 text-sm font-bold uppercase">
          travel
        </h4>

        <p className="text-2xl font-bold capitalize">new travel experiences</p>
      </div>

      <div className="sm:flex justify-between gap-8">
        <Card
          className="bg-wh-500 mt-5 sm:mt-0 basis-1/3"
          imageHeight="h-80"
          isSmallCard
        />
        <Card
          className="bg-wh-500 mt-5 sm:mt-0 basis-1/3"
          imageHeight="h-80"
          isSmallCard
        />
        <Card
          className="bg-wh-500 mt-5 sm:mt-0 basis-1/3"
          imageHeight="h-80"
          isSmallCard
        />
      </div>
      <Card
        className="bg-wh-500 sm:flex items-center justify-between gap-3 mb-5 mt-7"
        imageHeight="h-80"
      />
    </section>
  );
};

export default Travel;
