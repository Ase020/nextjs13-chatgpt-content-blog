import { Card } from "../(components)";

type Props = {};

const Other = (props: Props) => {
  return (
    <section className="mb-6 pt-4">
      <hr className="border-1 mx-10" />
      <p className="text-2xl font-bold capitalize my-8">other trending posts</p>

      <div className="sm:grid grid-cols-2 gap-16">
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
      </div>
      <hr className="border-1 mx-10 mt-10" />
    </section>
  );
};

export default Other;
