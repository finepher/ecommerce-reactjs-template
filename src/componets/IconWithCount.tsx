export default function IconWithCount({
  count,
  icon,
}: {
  count: number;
  icon: string;
}) {
  return (
    <div className="relative w-6 h-6">
      <img src={icon} className="w-full" />
      <span className="absolute -top-[6px] -right-[2px] text-[11px] bg-primary  border-2 border-solid border-white text-white flex items-center justify-center w-[15px] h-[15px] rounded-full  ">
        {count}
      </span>
    </div>
  );
}
