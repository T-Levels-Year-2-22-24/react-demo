import { useState } from "react";
import UserData from "../interfaces/UserData";

function useUserData() {
  const userDataString = localStorage.getItem("userData");
  const userDataObject = userDataString
    ? JSON.parse(userDataString)
    : { name: "", age: 0, address: "" };
  const [userData, setUserData] = useState(userDataObject);

  const saveUserData = (userData: UserData | {}) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    setUserData(userData);
  };

  return {
    userData,
    setUserData: saveUserData,
  };
}

export default useUserData;
