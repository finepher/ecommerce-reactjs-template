export default function HeaderUser() {
  return (
    <>
      <div className="flex gap-2 items-center">
        <img
          src="/images/user-placeholder.png"
          className="w-10 h-10 rounded-full"
          alt="user"
        />
        <span>Habil M</span>
        <img src="/icons/chevron-down.svg" />
      </div>
    </>
  );
}
