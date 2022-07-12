import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

const idx = 0;
const testCard = TEST_IMAGES[idx];

it("renders without crashing", function () {
    render(
    <Card
      caption={testCard.caption}
      src={testCard.src}
      currNum={idx + 1}
      totalNum={TEST_IMAGES.length}
    />)
});

it("matches snapshot", function () {
  const { container } = render(
    <Card
      caption={testCard.caption}
      src={testCard.src}
      currNum={idx + 1}
      totalNum={TEST_IMAGES.length}
  />);
  expect(container).toMatchSnapshot();
});
