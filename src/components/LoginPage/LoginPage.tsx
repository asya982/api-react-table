import { Form, Formik } from "formik";
import { FC, useState } from "react";
import CustomInput from "./components/CustomInput";
import { Button, CircularProgress, Typography } from "@mui/material";
import styles from "./LoginPage.module.css";
import { loginAPI } from "../../API/loginAPI";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/loginReducer";
import { LoginForm } from "../../type";
import { AutoAwesome } from "@mui/icons-material";

const LoginPage: FC = () => {
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: LoginForm = {
    username: "testuser",
    password: "testpassword123",
  };

  const submitForm = async (formData: LoginForm) => {
    setIsLoading(true);
    try {
      await loginAPI.login(formData);
      dispatch(login(formData.username));
      navigate("/main");
    } catch (err: any) {
      setErrors(err.error);
    }
    setIsLoading(false);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={submitForm}>
      {({ isValid }) => (
        <Form className={styles.form}>
          <Typography align="center" alignContent="center" variant="h5">
            Welcome back! <AutoAwesome color="warning" />
          </Typography>
          <CustomInput label="Username" name="username" required={true} />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            required={true}
          />
          <Button
            type="submit"
            variant="contained"
            disabled={!isValid || isLoading}
            className={styles.logInButton}
          >
            LOG IN {isLoading && <CircularProgress color="inherit" size={20} />}
          </Button>
          {errors && (
            <div className={styles.error}>
              <p>{errors}</p>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
