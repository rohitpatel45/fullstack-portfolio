import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex flex-col my-10 lg:my-16">
      <div className="space-y-7 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center">
          Share via writing and podcast hope you enjoy!
        </h1>
        <h3 className="font-medium text-center">
          Increse your knowledge by reading new things and i will share whatever
          i know for you as long as i enjoy it
        </h3>
      </div>
      <div className="flex flex-col items-center gap-6 text-center text-white font-bold mt-14 lg:flex-row lg:justify-center">
        <Link href="" className="py-6 bg-blue-500/80 w-80">
          Read More
        </Link>
        <Link href="" className="py-6 bg-blue-500/80 w-80">
          Listen to Podcast
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
