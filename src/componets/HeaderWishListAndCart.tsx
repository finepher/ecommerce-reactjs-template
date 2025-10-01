import IconWithCount from "./IconWithCount";

export default function HeaderWishListAndCart() {
  return (
    <div className="flex gap-2 justify-between text-xs ">
      <div className="flex gap-[5px]  items-center ">
        <IconWithCount icon="/icons/heart.svg" count={4} />
        <span className="text-xs hidden xs:block">Wishlist</span>
      </div>
      <div className="flex gap-[5px]  items-center">
        <IconWithCount icon="/icons/shopping-cart.svg" count={9} />
        <div className="hidden xs:block">
          <div>Cart</div>
          <div className="text-primary">$21</div>
        </div>
        <img src="/icons/chevron-down.svg" />
      </div>
    </div>
  );
}
