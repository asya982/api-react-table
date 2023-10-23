import { FC } from "react";
import styles from "../MainPage.module.css";

const Header: FC<{ name: string }> = ({ name }) => {
  return (
    <header>
      <div className={styles.userInfo}>Hello, {name}</div>
    </header>
  );
};

export default Header;
