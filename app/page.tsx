import { Other, Sidebar, Subscribe } from "./(components)";
import { Tech, Travel, Trending } from "./(home)";

export default function Home() {
  return (
    <main className="leading-7 px-10">
      <Trending />

      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />

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
