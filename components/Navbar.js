import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Pricing", href: "/pricing" },
];
export const Navbar = () => {
  return (
    <nav className={styles["home-container"]}>
      {/* Primer forma de hacerlo, la normal */}
      {menuItems.map((item) => (
        <ActiveLink key={item.href} href={item.href} text={item.text} />
      ))}

      {/* Segunda forma de hacerlo, retornando de inmediato
      {menuItems.map(item => (
        <ActiveLink href={item.href} text={item.text} />
      ))}
      */}

      {/* Tercer forma de hacerlo, desestructurando
      {menuItems.map(({text, href}) => (
        <ActiveLink href={href} text={text} />
      ))}
      */}

      {/* <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="/about" />
      <ActiveLink text="Contact" href="/contact" /> */}
    </nav>
  );
};
