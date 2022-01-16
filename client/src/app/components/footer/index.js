import styled from "styled-components";
import CodeForAshevilleLogo from "../code.for.asheville.logo";
export default function Footer() {
  return (
    <Container>
      <CodeForAshevilleLogo variant="full" />
    </Container>
  );
}

const Container = styled.footer`
  display: grid;
  grid-area: footer;
  justify-content: right;
  align-items: center;
  width: 100vw;
  padding: 0em 1em;
  bottom: 0;
  right: 0;
`;
