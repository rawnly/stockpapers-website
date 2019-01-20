import styled, { css } from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  font-weight: bolder;

  margin: 14px 0 35px 0;

  ${(props: any) =>
    props.white &&
    css`
      color: white;
    `}
`;

export default Title;
