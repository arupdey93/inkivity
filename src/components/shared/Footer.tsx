import logo from "../../assets/logo.png";
import { SOCIAL_MEDIA_LIST } from "../../utils/constants";

const Footer = () => {
  return (
    <footer
      className="bg-green-950 p-3 flex flex-col lg:flex-row lg:items-center justify-evenly gap-y-6 min-h-[120px]"
      id="contact_us"
    >
      <section className="flex items-center border-b border-green-300 md:border-none">
        <div className="h-[60px] w-[120px]">
          <img src={logo} className="h-full w-full object-contain" alt="logo" />
        </div>
        <h3 className="text-white font-greatVibes text-2xl">
          Let&apos;s ink your creativity
        </h3>
      </section>

      <section className="flex gap-x-3">
        <input
          placeholder="Subscribe to my newsletter"
          className="border border-gray-300 flex-1 rounded-sm px-2 md:flex-none lg:w-[220px] font-ebGarmond"
        />
        <button className="bg-green-800 text-white px-3 py-1 rounded-sm shadow-md font-ebGarmond">
          Subscribe
        </button>
      </section>

      <section>
        <h4 className="text-white mb-1 font-ebGarmond">Follow us:</h4>

        <div className="flex gap-x-2">
          {SOCIAL_MEDIA_LIST.map((item) => (
            <div className="h-8 w-8 cursor-pointer" title={item.label}>
              <img
                src={item.path}
                className="h-full w-full object-contain"
                alt="logo"
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <h4 className="text-white font-ebGarmond">Contact us:</h4>
        <p className="text-white italic font-ebGarmond">inkivity@gmail.com</p>
      </section>
    </footer>
  );
};

export default Footer;
