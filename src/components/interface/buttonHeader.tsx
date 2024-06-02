import Link from "next/link";
import styles from "./buttonHeader.module.css";

const ButtonHeader = ({
  action,
  label,
  title,
  newTab = false,
}: {
  action: string;
  label: string;
  title: string;
  newTab?: boolean;
}): JSX.Element => {
  if (newTab) {
    return (
      <div className={styles.button_outline}>
        <div className={styles.button_area}>
          <Link legacyBehavior href={action} passHref>
            <a className={styles.button_label} target="_blank" rel="noreferrer" title={title}>
              {label}
            </a>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.button_outline}>
      <div className={styles.button_area}>
        <Link legacyBehavior href={action} passHref replace>
          <a className={styles.button_label} title={title}>
            {label}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ButtonHeader;
