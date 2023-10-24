import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { TableItemInfo } from "../../../type";
import TableItem from "./TableItem";

type TableProps = {
  tableData: TableItemInfo[];
  setInitialValues: (data: TableItemInfo) => void;
  setOpen: (value: boolean) => void;
};

const ApiTable: FC<TableProps> = ({ tableData, setInitialValues, setOpen }) => {
  return (
    <TableContainer component={Paper} sx={{height:'80vh'}} >
      <Table stickyHeader sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Birthday</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Adress</TableCell>
            <TableCell align="right">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.length ? (
            tableData.map((el, index) => (
              <TableItem
                key={index}
                {...el}
                setInitialValues={setInitialValues}
                setOpen={setOpen}
              />
            ))
          ) : (
            <p>Nothing is here</p>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ApiTable;
