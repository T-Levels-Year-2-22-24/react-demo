import { useContext } from "react";
import { UserDataContext } from "./UserDataProvider";

function ClearStorageButton() {
  const userDataContext = useContext(UserDataContext);

  const handleClick = () => {
    userDataContext?.setUserData({});
  };

  return (
    <button type="button" onClick={handleClick}>
      Clear Local Storage
    </button>
  );
}

export default ClearStorageButton;
