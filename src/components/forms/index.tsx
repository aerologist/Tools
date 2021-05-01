import {
  ArchedShape,
  RectangularShape,
  TrapezoidalShape,
  RoundShape,
} from "../shape";
import { Forms } from "./styled";

function FormsComponent() {
  return (
    <Forms>
      <ArchedShape />
      <RectangularShape />
      <TrapezoidalShape />
      <RoundShape />
    </Forms>
  );
}

export default FormsComponent;
