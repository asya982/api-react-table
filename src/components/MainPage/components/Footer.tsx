import { FC } from "react";
import styles from "../MainPage.module.css";
import meme from "../../../assets/workVibes.jpg";
import { Typography } from "@mui/material";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <img src={meme} alt="meme" />
      <Typography sx={{maxWidth: '200px'}}>
        Empowered by{" "}
        <a href="https://github.com/asya982" target="_blank" rel="noreferrer">
          @asya982
        </a>
        . Young and passion Frontend developer, with a good taste in TV-Shows
      </Typography>
    </footer>
  );
};

export default Footer;
