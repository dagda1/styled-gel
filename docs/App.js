import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "../src/components";
import { Bar } from "./Bar/Bar";
import XRay from "react-x-ray";
import { space } from "styled-system";
import demo from "./Demo";
import { LiveProvider, LivePreview, LiveError, LiveEditor } from "react-live";

const colors = {
  blue: "#3af",
  dark: "#001e33"
};

const Provider = styled(LiveProvider)`
  position: relative;
`;

const Preview = styled(LivePreview)`
   overflow: auto;
`;

const Editor = styled(LiveEditor)`
  ${space}
  height: 60vh;
  min-height: 256px;
  overflow: auto;
  outline: none;
  color: ${colors.blue};
  background-color: ${colors.dark};
`;

const Err = styled(LiveError)`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  font-family: 'SF Mono', Menlo, monospace;
  font-size: 13px;
  padding: 16px;
  color: #fff;
  background-color: #f00;
`;

const scope = {
  styled,
  Grid,
  Row,
  Col,
  Bar
};

const App = props =>
  <Provider scope={scope} code={demo} mountStylesheet={false}>
    <Err />
    <Preview />
    <Editor p={3} />
  </Provider>;

export default App;
