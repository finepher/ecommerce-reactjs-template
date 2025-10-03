import HeaderUser from "./HeaderUser";
import HeaderWishListAndCart from "./HeaderWishListAndCart";
import { FireIcon, HomeIcon, PercentageIcon, PromoIcon } from "./icons";
import PhoneIcon from "./icons/PhoneIcon";

import MainSearch from "./MainSearch";
import Button from "./ui/Button";

export default function PageHeader() {
  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      title: "Promo",
      icon: <PromoIcon />,
    },
    {
      title: "Fire",
      icon: <FireIcon />,
    },
    {
      title: "Percentage",
      icon: <PercentageIcon />,
    },
  ];

  return (
    <header>
      {/* Container */}
      <div className="container px-2 mx-auto flex flex-wrap items-center py-4 gap-2 md:gap-0 ">
        {/* group 1 */}
        <div className="flex w-full md:w-[60%] justify-between">
          <div className="logo-wrapper flex gap-2 w-[180px] ">
            <img src="logo.svg" alt="logo" />
            <div className="flex flex-col">
              <span className="text-primary font-bold text-[21px] leading-[1]">
                OxDu Grosy
              </span>
              <span className="text-sm text-theme-gray">GROCERY</span>
            </div>
          </div>
          <div className="search-wrapper w-[calc(100%-180px)] hidden md:block">
            <MainSearch />
          </div>
          <div className="md:hidden flex">
            <HeaderWishListAndCart />
            <HeaderUser />
          </div>
        </div>

        {/* group 2 */}
        <div className="hidden md:flex justify-between w-full md:w-[40%] md:px-2 lg:px-10">
          <HeaderWishListAndCart />
          <HeaderUser />
        </div>
        <div className="md:hidden w-full">
          <MainSearch />
        </div>
      </div>
      <hr className="border-t border-solid border-[#ADADAD2B]" />
      <div className="header-row-2 py-[10px] relative">
        <div className="container mx-auto flex items-center">
          {/* Button */}
          <div className="md:w-1/4">
            <Button
              className="mega-menu-trigger"
              variant="primary"
              startIcon={<img src="/icons/layout-grid.svg" />}
            >
              Browser All Categories
            </Button>
            <div className="hidden absolute top-[100%] bg-amber-100 left-0 mega-menu w-full min-h-[200px]">
              <div className="container mx-auto">
                <h1 className="text-3xl"> Categories</h1>
                <div className="grid grid-cols-3 gap-4">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                </div>
              </div>
            </div>
          </div>
          {/** Menu */}
          <div className="md:w-2/4">
            <ul className="flex justify-center ">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-primary p-[10px] flex gap-[5px]"
                  >
                    {item.icon} {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/** Phone number */}
          <div className="md:w-1/4">
            <a
              href="tel:+1233-7777"
              className="flex flex-col xl:flex-row gap-[5px] items-center"
            >
              <span className="text-primary flex gap-[6px] items-center">
                <PhoneIcon /> 1233-7777
              </span>
              <span>24/7 support center</span>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-t border-solid border-[#ADADAD2B]" />
    </header>
  );
}
