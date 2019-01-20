import styled, { css } from "styled-components";

const BlurLayer = styled.div`
  position: fixed;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;

  filter: blur(5px);

  z-index: 0 !important;

  ${(props: ContainerProps) =>
    props.background &&
    css`
      background: url(${props.background}) center no-repeat;
      background-size: cover;
    `}
`;

export default BlurLayer;
