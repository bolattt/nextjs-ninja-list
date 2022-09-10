import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
        <Image src='/logo.png' width={128} height={77}></Image>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas">
        <a>All Ninjas</a>
      </Link>
    </nav>
  );
};

export default Navbar;
