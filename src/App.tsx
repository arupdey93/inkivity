import banner from "./assets/banner.jpg";
import author from "./assets/author.jpg";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Services from "./components/modules/home/Services";

const App = () => {
  return (
    <main className="bg-slate-100">
      <Header />
      <summary className="h-[180px] md:h-[240px]" id="home">
        <img
          src={banner}
          className="h-full w-full object-cover object-bottom"
        />
      </summary>

      <div className="md:max-w-3xl md:mx-auto px-3 pt-3">
        <h4 className="font-greatVibes text-2xl text-center">
          "The future belongs to those who believe in the beauty of their
          dreams." <br /> - Eleanor Roosevelt.
        </h4>
        <article className="text-base border-b border-green-300 py-2 font-ebGarmond mb-6">
          In today's world, Social Media platforms are busier than the Shibuya
          Scramble Crossing. Hence, social media platforms have become the
          game-changer for successful brand campaigning. They can increase your
          brand awareness among your audience- just a few blocks away or
          thousands of kilometres (or miles) away from you. A strategic and
          effective digital campaign on several social media accounts can
          positively influence your sales rate. At Inkinvity, we aim to help
          others achieve their dreams. We offer digital marketing services to
          businesses to assist them in increasing their brand awareness and
          connecting with people around the globe. We deliver a strategic and
          data-driven approach to establishing and maintaining a happy
          community. Our objective is to increase your brand's social media
          presence.
        </article>

        <Services />

        <article className="md:mb-6" id="blogs">
          <h3 className="border-b border-green-300 py-2 text-lg font-ebGarmond font-bold">
            Blogs
          </h3>
        </article>

        <article className="md:mb-6" id="about">
          <h3 className="border-b border-green-300 py-2 mb-2 text-lg font-ebGarmond font-bold">
            About
          </h3>
          <section className="md:flex md:justify-between gap-x-6">
            <div className="md:max-w-[500px]">
              <h4 className="font-greatVibes mb-2 text-2xl">
                "Ἓν οἶδα ὅτι οὐδὲν οἶδα." <br />- Socrates
              </h4>
              <h4 className="font-greatVibes text-right text-2xl mb-2 ">
                ‘I know that I am intelligent because I know that I know
                nothing.’{" "}
                <span className="font-ebGarmond text-lg">
                  (translated to English)
                </span>
              </h4>
              <p className="text-base font-ebGarmond">
                Hello, I am Soma and I am an experienced Social Media Manager. I
                graduated with a Master&apos;s Degree in English from Calcutta
                University. My hobby is to write. It can be writing my daily
                journal, creating new stories or recording new knowledge or
                concept I learnt. Discover and learn something new while working
                makes my profession as a social media manager intriguing and
                enjoyable for me. It is similar to an RPG game where I level up
                with each article I write. This part of content creation is what
                excites and inspires me the most. Knowledge stretches beyond the
                horizon, and as a content creator, I am always learning about
                new subjects every day, which is a true treasure for me. It
                teaches me to stay humble and keep my perspective flexible to
                learn new concepts. I get to unveil a fresh aspect of this world
                every day!
              </p>
            </div>
            <div className="h-40 md:w-40 my-2">
              <img
                src={author}
                className="h-full w-full object-contain md:object-fill"
              />
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
};

export default App;
