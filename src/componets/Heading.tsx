export default function Heading({
  children,
  type,
}: {
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) {
  switch (type) {
    case "h1": {
      return (
        <h1 className="mb-9 font-semibold text-4xl text-theme-black">
          {children}
        </h1>
      );
    }
    case "h2": {
      return (
        <h2 className="mb-9 font-semibold text-[32px] text-theme-black">
          {children}
        </h2>
      );
    }
    default: {
      return (
        <h1 className="mb-9 font-semibold text-2xl text-theme-black">
          {children}
        </h1>
      );
    }
  }
}
