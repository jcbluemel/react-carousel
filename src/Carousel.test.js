import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";
const RIGHT_ARROW = '.bi-arrow-right-circle'
const LEFT_ARROW = '.bi-arrow-left-circle'

it("renders without crashing", function () {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title={"pleasework"}
    />
  );
});

it("matches snapshot", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title={"pleasework"}
    />
  );
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(RIGHT_ARROW);
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  const rightArrow = container.querySelector(RIGHT_ARROW);
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const leftArrow = container.querySelector(LEFT_ARROW);
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});

it("hides left arrow when showing first image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

  // expect left arrow to be hidden
  expect(
    container.querySelector(LEFT_ARROW)
  ).not.toBeInTheDocument();
});

it("hides right arrow when showing first image", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />);

  const rightArrow = container.querySelector(RIGHT_ARROW);
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect right arrow to be hidden
  //TODO: make global constants
  expect(
    container.querySelector(RIGHT_ARROW)
  ).not.toBeInTheDocument();
});
