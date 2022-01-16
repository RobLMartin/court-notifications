import styled from "styled-components";

export default styled.div`
  display: grid;
  grid-template-areas: "topbar" "canvas" "footer";
  grid-template-rows: 64px 1fr 55px;

  place-content: center;
  width: 100vw;
  height: 100vh;
`;
