import { useContext } from "react";
import { UserDataContext } from "./UserDataProvider";

function UserDataDisplay() {
  const nameContext = useContext(UserDataContext);

  return (
    <>
      <ul>
        <li>User's name is {nameContext?.userData?.name}.</li>
        <li>User's age is {nameContext?.userData?.age}.</li>
        <li>User's address is {nameContext?.userData?.address}.</li>
      </ul>
    </>
  );
}

export default UserDataDisplay;
