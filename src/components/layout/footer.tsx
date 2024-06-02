// import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>{`Miguel Cardoso - ${year}`}</p>
      {/* <p>[</p>
      <Link legacyBehavior href="https://github.com/mncardoso" passHref>
        <a target="_blank" rel="noreferrer" title="Open my GitHub page in a new tab">
          GitHub
        </a>
      </Link>
      <p> / </p>
      <Link legacyBehavior href="../cv" passHref replace>
        <a title="Open my CV">CV</a>
      </Link>
      <p>]</p> */}
    </footer>
  );
};

export default Footer;
