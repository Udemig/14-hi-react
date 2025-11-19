import baloon from "./assets/baloon.jpg";
import FunctionComponent from "./diffrence/function-comp";
import ClassComponent from "./diffrence/class-comp";
import UserList from "./components/user-list";
import RecipePicker from "./components/recipe-picker";
import Button from "./components/button";
import Countdown from "./components/countdown";

import { useState } from "react";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Gizle/Göster</button>

      {show && <Countdown />}

      <Button text="Bana Tıkla" />
      <Button text="Uyarı" />
      <Button text="Deneme" />
    </div>
  );
};

export default App;
