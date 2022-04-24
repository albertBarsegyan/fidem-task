import { object, string } from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email("Invalid email").required(),
  phoneNumber: string().matches(phoneRegExp, "Phone number is not valid"),
  address: string().required(),
});
