import React from "react";
import { storiesOf } from "@storybook/react";
import PlayerLifePoints from ".";

storiesOf("PlayerLifePoints", module)
  .add("with Player One", () => (
    <PlayerLifePoints name="Player One" />
  ))
  .add("with Player Two", () => (
    <PlayerLifePoints name="Player Two" />
  ));
