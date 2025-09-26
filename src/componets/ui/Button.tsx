const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  }
> = ({ children, className, variant, startIcon, endIcon, ...rest }) => {
  const baseClass = "rounded-xs p-4 font-bold font-semibold";

  const variantClass = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-black",
  };

  return (
    <button
      {...rest}
      className={`${baseClass} ${
        variantClass[variant || "primary"]
      } ${className} `}
    >
      <span className="flex items-center gap-2">
        {startIcon}
        {children}
        {endIcon}
      </span>
    </button>
  );
};

export default Button;
