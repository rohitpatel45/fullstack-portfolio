import Image from "next/image";
import technologies from "../utils/technologies.json";

const Technology = () => {
  console.log(technologies);
  return (
    <div>
      <h1 className="text-center py-4">
        Our Technology Which We use to build our best Project
      </h1>

      <div className="bg-[#ff6e7f] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center py-10">
        {technologies.map((technologyy) => (
          <div
            className="flex flex-col space-y-3 p-4 h-96 w-80 text-center justify-center gap-2 border-[#e65c00] border-2 m-4 text-white/80 items-center"
            key={technologyy.title}
          >
            <Image src={technologyy.image} alt="" width={200} height={200} />
            <h1>{technologyy.title}</h1>
            <h3>{technologyy.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
