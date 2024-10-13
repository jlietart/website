import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full p-4 flex justify-end items-center">
      <Link
        href="https://github.com/jlietart"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4"
      >
        <i className="devicon-github-original text-2xl"></i>
      </Link>
      <Link
        href="https://www.linkedin.com/in/julien-lietart-480ab134"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="devicon-linkedin-plain text-2xl"></i>
      </Link>
    </header>
  );
};

export default Header;
