import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logolink}>
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={340}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
