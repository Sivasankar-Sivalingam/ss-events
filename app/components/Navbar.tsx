import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="logo">
            <Image
              src="/icons/logo.svg"
              alt="Event Management"
              width={24}
              height={24}
            />
            SS Events
          </Link>
        </div>
        <ul className="flex space-x-4">
          <Link href="#" className="hover:text-gray-400">
            Events
          </Link>
          <Link href="#" className="hover:text-gray-400">
            Create Event
          </Link>
          <Link href="#" className="hover:text-gray-400">
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
