import { Component, Fragment } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

type ContainerProps = {
  center?: boolean;
  background?: string;
};

type TitleProps = {
  white?: boolean;
};

type Props = {
  background?: string;
};

const GlobalStyles = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: sans-serif;
    font-size: 18px;

    margin: 0;
    padding: 0;

    overflow-x: hidden;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: bolder;

  margin: 14px 0 35px 0;

  ${(props: TitleProps) =>
    props.white &&
    css`
      color: white;
    `}
`;

const Description = styled.p`
  max-width: 500px;
  text-align: justify;
  margin:0;
`;

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

class Page extends Component<Props, {}> {
  static defaultProps: Props = {
    background:
      "https://images.unsplash.com/photo-1544548188-597e0d9e50bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
  };

  render() {
    return (
      <Fragment>
        <Container center={true} background={this.props.background}>
          <BlurLayer background={this.props.background} />
          <div>
            <small>The best wallpaper app</small>
            <Title>Make your phone looks stunning</Title>
            <Description>
              StockPapers is a simple, free app designed to bring hand-picked, high quality wallpapers in the palm of
              your hand.
            </Description>
          </div>
        </Container>
        <GlobalStyles />
      </Fragment>
    );
  }
}

export default Page;
