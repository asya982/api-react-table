import { Button, Dialog, DialogTitle } from "@mui/material";
import { Form, Formik } from "formik";
import { FC } from "react";
import { Contact, TableItemInfo } from "../../type";
import { validationSchema } from "./validation";
import CustomInput from "../LoginPage/components/CustomInput";
import { initialFormValues } from "../MainPage/MainPage";
import styles from "./ModalForm.module.css";

type ModalFormProps = {
  open: boolean;
  title: string;
  setOpen: (value: boolean) => void;
  initialValues: Contact;
  submitForm: (...args: any[]) => Promise<any>;
  setInitialValues: (value: TableItemInfo) => void;
  errors: any;
  handleDelete?: () => Promise<void>;
};

const ModalForm: FC<ModalFormProps> = ({
  open,
  title,
  setOpen,
  initialValues,
  setInitialValues,
  submitForm,
  errors,
  handleDelete,
}) => {
  const closeModal = () => {
    setInitialValues(initialFormValues);
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={closeModal}>
      <DialogTitle>{title}</DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={validationSchema}
        validateOnMount
      >
        {({ isValid }) => (
          <Form className={styles.form}>
            {Object.keys(initialValues).map((key, index) => {
              if (key === "id") return null;
              return (
                <CustomInput
                  key={index}
                  label={key.split("_").join(" ").toUpperCase()}
                  name={key}
                  required={true}
                  error={errors[key] && errors[key][0]}
                />
              );
            })}
            <div className={styles.buttons}>
              <Button type="submit" variant="contained" disabled={!isValid}>
                {initialValues?.name ? "Save" : "Add"}
              </Button>
              {initialValues?.name && (
                <Button color="error" variant="outlined" onClick={handleDelete}>
                  Delete
                </Button>
              )}
              <Button variant="outlined" color="info" onClick={closeModal}>
                Cancel
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ModalForm;
