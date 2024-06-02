import Link from "next/link";
import styles from "./button.module.css";

const Button = ({
  action,
  label,
  title,
  newTab = false,
}: {
  action: string;
  label: string;
  title: string;
  newTab?: boolean;
}) => {
  if (newTab) {
    return (
      <Link legacyBehavior href={action} passHref>
        <a className={styles.button} target="_blank" rel="noreferrer" title={title}>
          {label}
        </a>
      </Link>
    );
  } else {
    return (
      <Link legacyBehavior href={action} passHref replace>
        <a className={styles.button} title={title}>
          {label}
        </a>
      </Link>
    );
  }
};

export default Button;
