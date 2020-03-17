import React from "react";

import { TextField } from "@rmwc/textfield";
import { Button } from "@rmwc/button";

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <div className="surface">
        <div>
          <TextField label="Username" />
        </div>
        <div>
          <TextField label="Password" />
        </div>
        <Button label="Submit" />
      </div>
    </div>
  );
}
