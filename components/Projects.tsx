import Link from "next/link";
import jsonFile from "../utils/projectFile.json";
import { url } from "inspector";

const Projects = () => {
  return (
    <div className="bg-[#cc2b5e] h-90 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center xl:grid-cols-4">
      {jsonFile.map((project) => (
        <div
          className="flex flex-col space-y-3 p-4 h-96 w-80 text-center justify-center gap-2 border-[#e65c00] border-2 m-4 text-white/80"
          key={project.title}
        >
          <h2 className="font-medium">{project.title}</h2>
          <h4>{project.description}</h4>
          <Link href={`${url}`}>{project.URL}</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
