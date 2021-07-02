import { useState } from "react";
import Bullet from "../bullets/bullet";

export default function Bullets() {
  const [active, setActive] = useState(false);
  return (
    <div
      name="bullets "
      className="flex w-2/4 mx-auto mt-4 items-center justify-evenly"
    >
      <Bullet active={true} />
      <Bullet active={false} />
      <Bullet active={false}/>
    </div>
  );
}
