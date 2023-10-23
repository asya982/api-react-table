import { TableCell, TableRow } from "@mui/material";
import { FC } from "react";

type TableItemProps = {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
};

const TableItem: FC<TableItemProps> = ({
  id,
  name,
  email,
  birthday_date,
  phone_number,
  address,
}) => {
  return (
    <TableRow hover>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{birthday_date}</TableCell>
      <TableCell>{phone_number}</TableCell>
      <TableCell>{address}</TableCell>
    </TableRow>
  );
};

export default TableItem;
