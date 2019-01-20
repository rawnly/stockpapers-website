import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100vw;
  min-height: 110vh;
  position: relative;
  padding: 35px;

  color: white;

  * {
    z-index: 1;
  }

  ${(props: ContainerProps) =>
    props.center &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}

  ${(props: ContainerProps) =>
    props.background &&
    css`
      background: url(${props.background}) center no-repeat;
      background-size: cover;
    `}
`;

export default Container;
