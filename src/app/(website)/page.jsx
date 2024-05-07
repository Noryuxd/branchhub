import HeroForm from "@/components/forms/HeroForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <section className="pt-32 mb-64">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold text-violet-800">
            Your one link <br /> for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profiles, contact info and more on one page
          </h2>
        </div>
        <HeroForm user={session?.user} />
      </section>
      <div className="absolute top-10 right-10 z-10">
        <div className="">
          <img
            src="https://i.ibb.co/c8wRCLF/Portfolio-rafiki.png"
            alt="Portfolio"
            className="2xl:w-[800px] lg:w-[650px] w-0"
          />
        </div>
      </div>
      <section className="mb-20">
        <h2 className="text-5xl font-bold text-violet-800 text-center mb-16">
          Our Services
        </h2>
        <div className="flex justify-between gap-10 mx-[-80px] ">
          <div className="flex items-center max-w-md">
            <div className="w-full">
              <img
                src="https://i.ibb.co/K53yGCk/Social-tree-amico.png"
                alt="Service 1"
                className="w-full"
              />
            </div>
            <div className="w-1/2 pl-8">
              <p className="font-bold text-2xl text-violet-800">
                Social Media Management
              </p>
            </div>
          </div>

          <div className="flex items-center max-w-md">
            <div className="w-1/2 pr-8">
              <p className="font-bold text-end text-2xl text-violet-800">
                Personal Branding Consultation
              </p>
            </div>
            <div className="w-full">
              <img
                src="https://i.ibb.co/GsBpdVT/Social-Dashboard-cuate.png"
                alt="Service 2"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-10 mx-[-80px] ">
          <div className="flex items-center max-w-md">
            <div className="w-full">
              <img
                src="https://i.ibb.co/Y2PC6JG/Conversion-rate-optimization-amico.png"
                alt="Service 3"
                className="w-full"
              />
            </div>
            <div className="w-1/2 pl-8">
              <p className="font-bold text-2xl  text-violet-800">
                Digital Marketing Campaigns
              </p>
            </div>
          </div>

          <div className="flex items-center max-w-md">
            <div className="w-1/2 pr-8">
              <p className="font-bold text-end text-2xl text-violet-800">
                Website Design & Development
              </p>
            </div>
            <div className="w-full">
              <img
                src="https://i.ibb.co/fvMM87g/Social-media-amico.png"
                alt="Service 4"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
