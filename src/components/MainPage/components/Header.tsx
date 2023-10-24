import { FC } from "react";
import styles from "../MainPage.module.css";
import { IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Header: FC<{ name: string; setOpen: (open: boolean) => void }> = ({
  name,
  setOpen,
}) => {
  return (
    <header>
      <div className={styles.userInfo}>Hello, {name}</div>
      <Tooltip title="Add new note" arrow>
        <IconButton onClick={() => setOpen(true)} color="primary">
          <AddIcon />
        </IconButton>
      </Tooltip>
    </header>
  );
};

export default Header;
