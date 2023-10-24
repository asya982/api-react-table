import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .max(255, "Must be 255 characters or less"),
  email: Yup.string()
    .required("Email is required")
    .max(254, "Must be 254 characters or less"),
  birthday_date: Yup.string().required("Birthday date is required"),
  phone_number: Yup.string()
    .max(20, "Must be less than 21 character")
    .required("Number is required"),
  address: Yup.string().required("Adress is required"),
});
