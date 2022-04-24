import { createContext, useContext, useState } from "react";
import { UserModal } from "../components/modal/userModal";
import { useUser } from "./users.context";

const ModalContext = createContext(null);

const init = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
};

const useProvideModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [values, setValues] = useState({});
  const [initialValues, setInitialValues] = useState(init);

  const toggleVisible = () => {
    setIsVisible((prev) => !prev);
  };

  const setModalValues = (values) => {
    setIsVisible(false);
    setValues(values);
  };

  const provideInitialValues = (values) => {
    setInitialValues(values);
    setIsVisible(true);
  };

  return {
    isVisible,
    values,
    initialValues,
    provideInitialValues,
    toggleVisible,
    setModalValues,
  };
};

export default function ModalProvider({ children }) {
  const modalData = useProvideModal();
  const { addUser, editUser, users } = useUser();

  const handleAddOrEditUser = (values) => {
    const existUserWithId = users.find((user) => user.id === values.id);

    modalData.toggleVisible();

    if (existUserWithId) {
      editUser(values);
      return;
    }
    addUser(values);
  };

  return (
    <ModalContext.Provider value={modalData}>
      {children}
      {modalData?.isVisible ? (
        <UserModal
          provideInit={modalData.initialValues}
          handleSubmit={handleAddOrEditUser}
        />
      ) : null}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
