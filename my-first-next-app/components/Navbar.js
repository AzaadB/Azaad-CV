import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {
    return (
      <nav>
        <div className="profile">
          <Image src="/profile.jpg" alt="profile" width={170} height={170} />
        </div>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
        <Link href="/projects"><a>Projects</a></Link>
      </nav>
    );
  }
  export default Navbar;