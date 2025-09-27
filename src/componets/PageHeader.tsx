import HeaderUser from "./HeaderUser";
import HeaderWishListAndCart from "./HeaderWishListAndCart";
import MainSearch from "./MainSearch";

export default function PageHeader() {
  return (
    <header>
      {/* Container */}
      <div className="container px-2 mx-auto flex flex-wrap items-center py-4 gap-2 md:gap-0 ">
        {/* group 1 */}
        <div className="flex w-full md:w-[60%]">
          <div className="logo-wrapper flex gap-2 w-[180px]">
            <img src="logo.svg" alt="logo" />
            <div className="flex flex-col">
              <span className="text-primary font-bold text-[21px] leading-[1]">
                OxDu Grosy
              </span>
              <span className="text-sm text-theme-gray">GROCERY</span>
            </div>
          </div>
          <div className="search-wrapper w-[calc(100%-180px)]">
            <MainSearch />
          </div>
        </div>

        {/* group 2 */}
        <div className="flex justify-between w-full md:w-[40%] md:px-2 lg:px-10">
          <HeaderWishListAndCart />
          <HeaderUser />
        </div>
      </div>
    </header>
  );
}
