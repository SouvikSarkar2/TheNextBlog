import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image";

const Navbar = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image src="/logo2.png" height={350} width={300} alt="Logo" />
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
