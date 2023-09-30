import { Link } from "react-router-dom";
import { PRIVATE_PATH, PUBLIC_PATH } from "../constants/paths";

function HomePage() {
  return (
    <>
      <h1>Welcome to the Home Page.</h1>
      <p>
        Follow this link to access the{" "}
        <Link to={PUBLIC_PATH}>Public Page.</Link>
      </p>
      <p>
        Follow this link to access the{" "}
        <Link to={PRIVATE_PATH}>Private Page.</Link>
      </p>
    </>
  );
}

export default HomePage;
