import { IconButton, TableCell, TableRow } from "@mui/material";
import { FC } from "react";
import {  TableItemInfo } from "../../../type";
import EditNoteIcon from "@mui/icons-material/EditNote";

type HelperProps = {
  setInitialValues: (data: TableItemInfo) => void;
  setOpen: (value: boolean) => void;
};

const TableItem: FC<TableItemInfo & HelperProps> = ({
  id,
  name,
  email,
  birthday_date,
  phone_number,
  address,
  setInitialValues,
  setOpen,
}) => {
  const openModal = () => {
    setOpen(true);
    setInitialValues({ name, email, birthday_date, address, phone_number, id });
  };
  return (
    <TableRow hover>
      <TableCell>{name}</TableCell>
      <TableCell align="right">{email}</TableCell>
      <TableCell align="right">{birthday_date}</TableCell>
      <TableCell align="right">{phone_number}</TableCell>
      <TableCell align="right">{address}</TableCell>
      <TableCell align="right">
        <IconButton onClick={openModal}>
          <EditNoteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
