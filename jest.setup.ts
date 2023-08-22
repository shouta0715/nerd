import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

// // https://github.com/scottrippey/next-router-mock/issues/58

global.React = React;
