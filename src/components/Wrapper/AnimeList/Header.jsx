import Link from "next/link";

const Header = ({ text, url }) => {
  return (
    <div className="flex items-center w-full justify-between">
      <h4 className="my-2 mb-3 font-medium text-xl capitalize text-white">
        {text}
      </h4>
      <Link
        href={url}
        className="m-link__underline p-0.5 pb-0"
      >
        More
      </Link>
    </div>
  );
};

export default Header;
