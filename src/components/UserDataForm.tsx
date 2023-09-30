import { FormEvent, useContext, useState } from "react";
import { UserDataContext } from "./UserDataProvider";

function UserDataForm() {
  const userDataContext = useContext(UserDataContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    userDataContext?.setUserData({
      name,
      age,
      address,
    });
    setName("");
    setAge("");
    setAddress("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
          required
        />
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          rows={4}
          cols={50}
          autoComplete="off"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          required
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UserDataForm;
