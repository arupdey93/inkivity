import logo from "../../assets/logo.png";
import { NAV_LIST } from "../../utils/constants";

const Header = () => {
  return (
    <header className="px-3 md:flex md:items-center md:justify-between top-0 sticky bg-white shadow-md">
      <div className="flex items-center border-b border-green-300 md:border-none">
        <div className="h-[60px] w-[120px]">
          <img src={logo} className="h-full w-full object-contain" alt="logo" />
        </div>
        <h3 className="font-greatVibes text-2xl">
          Let&apos;s ink your creativity
        </h3>
      </div>

      <nav className="py-3">
        <ul className="flex gap-x-3 items-center">
          {NAV_LIST.map((item) => (
            <li
              key={item.link}
              className="cursor-pointer bg-green-100 px-2 shadow-lg"
            >
              <a
                className="text-green-900 text-xs md:text-base font-semibold font-ebGarmond"
                href={`#${item.link}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
