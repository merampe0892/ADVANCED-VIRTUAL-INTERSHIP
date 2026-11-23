import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="max-w-267.5 mx-auto">
      <Navbar />
      <section>
        <div className="py-10 w-full">
          <div className="max-w-267.5 w-full my-0 mx-auto py-0 px-6">
            <div className="flex">
              <div className="w-full">
                <div className="text-[#032b41] text-4xl font-bold mb-6">
                  Gain more knowledge <br className="remove--tablet" />
                  in less time
                </div>
                <div className="text-[#394547] text-xl font-light mb-6">
                  Great summaries for busy people,
                  <br className="remove--tablet" />
                  individuals who barely have time to read,
                  <br className="remove--tablet" />
                  and even people who don’t like to read.
                </div>
                <button className="w-1">Login</button>
              </div>
              <figure className="w-full flex justify-end">
                <img src="../../landing.png" alt="landing" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
