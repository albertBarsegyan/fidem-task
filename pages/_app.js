import "../styles/globals.css";
import ModalProvider from "../src/context/modal.context";
import UsersProvider from "../src/context/users.context";
import SearchProvider from "../src/context/search.context";

function MyApp({ Component, pageProps }) {
  return (
    <UsersProvider>
      <SearchProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </SearchProvider>
    </UsersProvider>
  );
}

export default MyApp;
