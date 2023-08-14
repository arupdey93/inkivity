const Services = () => {
  return (
    <>
      <article className="mb-6" id="services">
        <h3 className="italic border-b border-green-300 py-2 mb-2">Services</h3>
        <div className="flex gap-x-3 justify-center">
          <div className="h-8 w-8 bg-red-200"></div>
          <div className="h-8 w-8 bg-red-200"></div>
          <div className="h-8 w-8 bg-red-200"></div>
          <div className="h-8 w-8 bg-red-200"></div>
        </div>
      </article>
      <div className="flex justify-center">
        <div className="cursor-pointer bg-green-100 px-2 shadow-lg w-fit">
          <a
            className="text-green-900 text-xs md:text-sm font-semibold"
            href="#contact_us"
          >
            Contact us
          </a>
        </div>
      </div>
    </>
  );
};

export default Services;
