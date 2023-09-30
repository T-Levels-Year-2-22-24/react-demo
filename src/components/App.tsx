import ClearStorageButton from "./ClearStorageButton";
import UserDataDisplay from "./UserDataDisplay";
import UserDataForm from "./UserDataForm";
import UserDataProvider from "./UserDataProvider";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <UserDataProvider>
        <div className="bordered">
          <UserDataForm />
        </div>
        <div className="bordered">
          <UserDataDisplay />
        </div>
        <div className="bordered">
          <ClearStorageButton />
        </div>
      </UserDataProvider>
    </>
  );
}

export default App;
