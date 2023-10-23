import { FC } from "react";
import { Field, useField } from "formik";
import { TextField, InputAdornment } from "@mui/material";

type InputProps = {
  name: any;
  type?: string;
  label: string;
  required?: boolean;
  icon?: any;
};

const CustomInput: FC<InputProps> = ({ type, label, required, name, icon }) => {
  const [field, meta] = useField(name);
  return (
    <Field
      {...field}
      type={type}
      label={label}
      required={required}
      as={TextField}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      fullWidth
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error}
    />
  );
};

export default CustomInput;
