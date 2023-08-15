import { SERVICES_LIST } from "../../../utils/constants";

const Services = () => {
  return (
    <>
      <article className="mb-6" id="services">
        <h3 className="border-b border-green-300 py-2 mb-2 text-lg font-ebGarmond font-bold">
          Services
        </h3>
        <div className="grid gap-3 md:gap-6 grid-cols-1 md:grid-cols-3">
          {SERVICES_LIST.map((item) => (
            <section className="bg-green-50 shadow-sm hover:shadow-lg rounded-md p-4 flex md:flex-col md:items-center gap-x-3">
              <div
                className="h-10 w-10 cursor-pointer md:mb-2"
                title={item.label}
              >
                <img
                  src={item.path}
                  className="h-full w-full object-contain"
                  alt="logo"
                />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold mb-1 md:text-center text-base font-ebGarmond">
                  {item.label}
                </h5>
                <p className="text-sm text-gray-500 font-ebGarmond">
                  {item.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </article>
      <div className="flex justify-center">
        <div className="cursor-pointer bg-green-100 px-2 shadow-lg w-fit">
          <a
            className="text-green-900 text-xs md:text-base font-semibold font-ebGarmond"
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
