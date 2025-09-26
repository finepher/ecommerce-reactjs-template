import MainSearch from "./MainSearch";

export default function PageHeader() {
  return (
    <header>
      {/* Container */}
      <div className="container mx-auto flex items-center py-4">
        <div className="flex">
          <div className="logo-wrapper flex gap-2">
            <img src="logo.svg" alt="logo" />
            <div className="flex flex-col">
              <span className="text-primary font-bold text-[21px] leading-[1]">
                OxDu Grosy
              </span>
              <span className="text-sm text-theme-gray">GROCERY</span>
            </div>
          </div>
          <div className="search-wrapper">
            <MainSearch />
          </div>
        </div>
        <div>
          {/* cart */}
          {/* user */}
        </div>
      </div>
    </header>
  );
}
