import { ReactNode, useState } from "react";

const SHOW_DISPLAY_TEXT = "Click to show children.";
const HIDE_DISPLAY_TEXT = "Click to hide children.";

interface ConditionalDisplayProps {
  children: ReactNode;
}

function ConditionalDisplay({ children }: ConditionalDisplayProps) {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <button type="button" onClick={() => setDisplay(!display)}>
        {display ? HIDE_DISPLAY_TEXT : SHOW_DISPLAY_TEXT}
      </button>
      {display && children}
    </>
  );
}

export default ConditionalDisplay;
