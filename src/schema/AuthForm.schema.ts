import * as Yup from "yup";

export const FormSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Phone must be 10 digits").required("Phone is required"),
    password: Yup.string().required("password is required").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must include uppercase, lowercase, number and special character"),
    confirmPassword: Yup.string().required("confim password is required").oneOf([Yup.ref("password")], "Passwords must match"),
})

