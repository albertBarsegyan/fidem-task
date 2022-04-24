import { useFormik } from "formik";
import { userSchema } from "../../schema/addUserSchema";
import ErrorMessageContainer from "../containers/errorMessageContainer";
import RegularInput from "../inputs/regularInput";
import FormFieldLayout from "../layout/formFieldLayout";
import RegularButton from "../button/regular.button";
import { useModal } from "../../context/modal.context";

export function UserModal({ handleSubmit, provideInit }) {
  const { toggleVisible } = useModal();

  const formik = useFormik({
    initialValues: provideInit,
    validationSchema: userSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleClose = () => {
    toggleVisible();
  };

  return (
    <div className="user-add-modal-wrapper">
      <div className="fixed top-20 right-20">
        <button onClick={handleClose} className="close-button">
          X
        </button>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <FormFieldLayout>
            <label className="text-white" htmlFor="firstName">
              First Name
            </label>

            <RegularInput
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <ErrorMessageContainer
              fieldName="firstName"
              errors={formik.errors}
              touched={formik.touched}
            />
          </FormFieldLayout>
          <FormFieldLayout>
            <label className="text-white" htmlFor="lastName">
              Last Name
            </label>

            <RegularInput
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />

            <ErrorMessageContainer
              fieldName="lastName"
              errors={formik.errors}
              touched={formik.touched}
            />
          </FormFieldLayout>

          <FormFieldLayout>
            <label className="text-white" htmlFor="email">
              Email Address
            </label>

            <RegularInput
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <ErrorMessageContainer
              fieldName="email"
              errors={formik.errors}
              touched={formik.touched}
            />
          </FormFieldLayout>

          <FormFieldLayout>
            <label className="text-white" htmlFor="phoneNumber">
              Phone Number
            </label>

            <RegularInput
              name="phoneNumber"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />

            <ErrorMessageContainer
              fieldName="phoneNumber"
              errors={formik.errors}
              touched={formik.touched}
            />
          </FormFieldLayout>

          <FormFieldLayout>
            <label className="text-white" htmlFor="address">
              Address
            </label>

            <RegularInput
              name="address"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.address}
            />

            <ErrorMessageContainer
              fieldName="address"
              errors={formik.errors}
              touched={formik.touched}
            />
          </FormFieldLayout>
          <div className="flex justify-center items-center mt-4">
            <button
              type="submit"
              className="border border-white px-4 py-2 text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
