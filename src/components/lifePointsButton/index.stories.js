import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LifePointsButton from ".";

storiesOf("LifePointsButton", module)
  .add("with minus 1000", () => (
    <LifePointsButton
      onClick={action('clicked')}
      value="1000"
      type="minus"
    />
  ))
  .add("with 1000", () => (
    <LifePointsButton
      onClick={action('clicked')}
      value="1000"
      type="plus"
    />
  ));
