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

      <div className="md:max-w-3xl md:mx-auto px-3">
        <article className="text-sm border-b border-green-300 py-2 font-ebGarmond mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet
          odio quis odio convallis laoreet. Pellentesque tristique urna
          bibendum, malesuada purus convallis, efficitur nisi. Ut sodales purus
          purus, in facilisis nulla aliquam ac. Nunc pellentesque, quam id
          sollicitudin ornare, ex purus ullamcorper mauris, a tempor felis justo
          in nibh. Nam facilisis tincidunt lorem non aliquet. Donec in hendrerit
          libero. Morbi egestas elementum bibendum. Nulla ornare turpis non erat
          imperdiet, non fermentum sem dapibus. Vivamus tortor diam, efficitur
          et feugiat eget, bibendum hendrerit ligula. Proin iaculis id enim
          sagittis lobortis. Suspendisse nec ex a elit tincidunt blandit vitae
          et orci. Sed eget sapien velit. Maecenas mattis pellentesque nibh in
          dignissim. Nullam finibus nulla et hendrerit gravida. Donec quis arcu
          dignissim, cursus elit vel, hendrerit magna. Aliquam erat volutpat.
        </article>

        <Services />

        <article className="md:mb-6" id="blogs">
          <h3 className="italic border-b border-green-300 py-2">Blogs</h3>
        </article>

        <article className="md:mb-6" id="about">
          <h3 className="italic border-b border-green-300 py-2 mb-2">About</h3>
          <section className="md:flex md:justify-between gap-x-6">
            <p className="text-sm md:max-w-[500px] font-ebGarmond">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              aliquet odio quis odio convallis laoreet. Pellentesque tristique
              urna bibendum, malesuada purus convallis, efficitur nisi. Ut
              sodales purus purus, in facilisis nulla aliquam ac. Nunc
              pellentesque, quam id sollicitudin ornare, ex purus ullamcorper
              mauris, a tempor felis justo in nibh. Nam facilisis tincidunt
              lorem non aliquet. Donec in hendrerit libero. Morbi egestas
              elementum bibendum. Nulla ornare turpis non erat imperdiet, non
              fermentum sem dapibus. Vivamus tortor diam, efficitur et feugiat
              eget, bibendum hendrerit ligula. Proin iaculis id enim sagittis
              lobortis. Suspendisse nec ex a elit tincidunt blandit vitae et
              orci. Sed eget sapien velit. Maecenas mattis pellentesque nibh in
              dignissim. Nullam finibus nulla et hendrerit gravida. Donec quis
              arcu dignissim, cursus elit vel, hendrerit magna. Aliquam erat
              volutpat.
            </p>
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
