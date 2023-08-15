import { SERVICES_LIST } from "../../../utils/constants";

const Services = () => {
  return (
    <>
      <article className="mb-6" id="services">
        <h3 className="italic border-b border-green-300 py-2 mb-2">Services</h3>
        <div className="grid gap-3 md:gap-6 grid-cols-1 md:grid-cols-3">
          {SERVICES_LIST.map((item) => (
            <section className="bg-green-50 shadow-sm hover:shadow-lg rounded-md p-4 flex md:flex-col gap-x-3">
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
                <h5 className="font-bold mb-1">{item.label}</h5>
                <p className="text-xs text-gray-500">{item.description}</p>
              </div>
            </section>
          ))}
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
