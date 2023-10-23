import { Form, Formik } from "formik";
import { FC, useState } from "react";
import CustomInput from "./components/CustomInput";
import { Button, Typography } from "@mui/material";
import styles from "./LoginPage.module.css";
import { loginAPI } from "../../API/loginAPI";

export type LoginForm = {
  username: string;
  password: string;
};

const LoginPage: FC = () => {
  const [errors, setErrors] = useState("");
  const initialValues: LoginForm = {
    username: "testuser",
    password: "testpassword123",
  };

  const submitForm = async (formData: LoginForm) => {
    console.log(formData)
    const { data, status } = await loginAPI.login(formData);
    if (status !== 200) {
      setErrors(data.error);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      {({ isValid }) => (
        <Form className={styles.form}>
          <Typography align="center">Welcome back!</Typography>
          <CustomInput label="Username" name="username" required={true} />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            required={true}
          />
          <div>
            <p>{errors}</p>
          </div>
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid}
            className={styles.logInButton}
          >
            LOG IN
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
