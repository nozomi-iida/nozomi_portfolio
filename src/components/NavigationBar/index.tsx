import Link from "next/link";

export const NavigationBar = () => {
  return (
    <div className="flex justify-between px-page bg-sky-500 absolute top-0 max-w-sceen w-full">
      <h1>Logo</h1>
      <div className="flex gap-4">
        <Link
          href={"#home"}
          className="leading-nav text-white box-xl hover:underline"
        >
          Home
        </Link>
        <Link
          href={"#about"}
          className="leading-nav text-white box-xl hover:underline"
        >
          About
        </Link>
        <Link
          href={"#skills"}
          className="leading-nav text-white box-xl hover:underline"
        >
          Skills
        </Link>
        <Link
          href={"#works"}
          className="leading-nav text-white hover:underline"
        >
          Works
        </Link>
        <Link
          href={"#contact"}
          className="leading-nav text-white hover:underline"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
