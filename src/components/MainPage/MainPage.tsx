import { FC, useState } from "react";
import styles from "./MainPage.module.css";
import { useSelector } from "react-redux";
import { getAuthInfo } from "../../redux/loginReducer";
import Header from "./components/Header";
import ApiTable from "./components/Table";
import { tableAPI } from "../../API/tableAPI";
import { useLoaderData } from "react-router-dom";
import { APIResponse, Contact, TableItemInfo } from "../../type";
import { Pagination } from "@mui/material";
import ModalForm from "../ModalForm/ModalForm";
import Footer from "./components/Footer";

export const getTableData = async () => {
  const { data } = await tableAPI.getTableList();
  return { ...data };
};

export const initialFormValues: TableItemInfo = {
  id: 0,
  name: "",
  email: "",
  birthday_date: "",
  phone_number: "",
  address: "",
};

const MainPage: FC = () => {
  const user = useSelector(getAuthInfo);
  const { results, count } = useLoaderData() as APIResponse;
  const [tableData, setTableData] = useState(results);
  const [open, setOpen] = useState(false);
  const [initialValues, setInitialValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  const handlePageChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    const { data } = await tableAPI.getTableList((value - 1) * 10);
    setTableData(data?.results);
  };

  const submitForm = async (formData: Contact) => {
    try {
      if (!initialValues.name) {
        const { data } = await tableAPI.createContact(formData);
        setTableData([data, ...tableData]);
      } else {
        const { data } = await tableAPI.updateContact(
          formData,
          initialValues.id
        );
        setTableData(
          tableData.map((el) => {
            if (el.id === data.id) {
              return data;
            }
            return el;
          })
        );
      }
      setOpen(false);
      setInitialValues(initialFormValues);
    } catch (err: any) {
      setErrors(err);
    }
  };

  const handleDelete = async () => {
    try {
      await tableAPI.deleteContact(initialValues.id);
      setTableData(tableData.filter((el) => el.id === initialValues.id));
      setOpen(false);
      setInitialValues(initialFormValues);
    } catch (err: any) {
      setErrors(err);
    }
  };

  return (
    <div className={styles.mainPage}>
      <Header name={user.username} setOpen={setOpen} />
      <ApiTable {...{ tableData, setInitialValues, setOpen }} />
      <Pagination
        count={Math.ceil(count / 10)}
        color="primary"
        onChange={handlePageChange}
        sx={{ alignSelf: "flex-end" }}
      />
      <ModalForm
        {...{
          open,
          setOpen,
          title: `${initialValues.name ? "Change" : "Add new"} contact`,
          initialValues,
          submitForm,
          setInitialValues,
          errors,
          handleDelete,
        }}
      />
      <Footer />
    </div>
  );
};

export default MainPage;
