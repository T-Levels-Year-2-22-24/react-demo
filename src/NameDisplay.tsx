import { useContext } from "react";
import { NameContext } from "./NameProvider";

function NameDisplay() {
  const nameContext = useContext(NameContext);

  return (
    <>
      <p>
        This paragraph is in a different component. No props are being passed,
        but the global name state can be accessed. The value of the global name
        is {nameContext?.name}.
      </p>
    </>
  );
}

export default NameDisplay;
