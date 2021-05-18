import React from "react";
import { Button, Menu } from "./styles";
import DehazeIcon from "@material-ui/icons/Dehaze";

function Gamburger() {
  const [fond, setFond] = React.useState(false);

  return (
    <Button
      style={
        fond
          ? { background: "rgba(0, 163, 197, 0.12)" }
          : { background: "none" }
      }
    >
      <Menu onClick={() => setFond(!fond)}>
        <DehazeIcon
          style={
            window.innerWidth >= 767
              ? { margin: "-5px 0 0 -3px" }
              : { margin: "-5px 0 0 -3px", color: "white" }
          }
        />
      </Menu>
    </Button>
  );
}

export default Gamburger;
