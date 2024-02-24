import Image from "next/image";

const About = () => {
  return (
    <div className="bg-pink-200 py-10  items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center lg:flex-row max-w-7xl mx-auto">
        <div className="flex-1">
          <Image
            src="/profile.jpeg"
            width={300}
            height={300}
            alt=""
            className="rounded-md shadow-lg "
          />
        </div>
        <div className="flex-1 my-6">
          <div>
            <h1 className="text-3xl  font-bold ">Rohit Patel</h1>
            <p className="text-gray-600">FullStack Devoloper</p>
          </div>

          <div className="pt-6">
            <p className="text-lg text-gray-700 mb-6">
              Hi, I am Rohit, a passionate developer based in Your Location. I
              specialize in building modern web applications with cutting-edge
              technologies.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether its crafting elegant front-end interfaces with React.js
              and Next.js, designing robust backend systems with Node.js and
              Express, or optimizing performance with the latest techniques, I
              am always eager to tackle new challenges and push the boundaries
              of whats possible.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              If you are interested in collaborating on a project, discussing
              potential opportunities, or simply want to say hello, feel free to
              get in touch. I love to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
