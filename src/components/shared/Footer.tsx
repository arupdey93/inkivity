import logo from "../../assets/logo.png";

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
        <h3 className="text-white font-greatVibes">
          Let&apos;s ink your creativity
        </h3>
      </section>

      <section className="flex gap-x-3">
        <input
          placeholder="Subscribe to my newsletter"
          className="border border-gray-300 flex-1 rounded-sm px-2"
        />
        <button className="bg-green-800 text-white px-3 py-1 rounded-sm shadow-md">
          Subscribe
        </button>
      </section>

      <section>
        <h4 className="text-white mb-1">Follow us:</h4>

        <div className="flex gap-x-3">
          <div className="h-8 w-8 bg-red-200"></div>
          <div className="h-8 w-8 bg-red-200"></div>
          <div className="h-8 w-8 bg-red-200"></div>
          <div className="h-8 w-8 bg-red-200"></div>
        </div>
      </section>

      <section>
        <h4 className="text-white">Contact us:</h4>
        <p className="text-white italic">inkivity@gmail.com</p>
      </section>
    </footer>
  );
};

export default Footer;
