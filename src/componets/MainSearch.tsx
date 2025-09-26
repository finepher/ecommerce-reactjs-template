import Button from "./ui/Button";

export default function MainSearch() {
  return (
    <div className="flex bg-[#F3F3F3] items-center text-xs">
      <div className="px-3">
        <span className="pe-3">
          <select className="">
            <option value="1">All Categories</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="3">3</option>
            <option value="3">3</option>
            <option value="3">3</option>
          </select>
        </span>
        <input
          type="text"
          placeholder="Search for items..."
          className="border-l border-solid border-theme-gray ps-2 w-[300px]"
        />
      </div>
      <Button variant="primary" className="px-4 py-2 rounded-s-none">
        <img src="search.svg" className="w-6" />
      </Button>
    </div>
  );
}
