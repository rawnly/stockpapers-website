import { Component, Fragment } from "react";
import { Container, Description, Title, BlurLayer } from "../components/withStyled";

import '../styles/global.scss'

type PageProps = {
  background?: string;
};

type PageState = {}

type DefaultPageProps = {
  background:string
}

class Page extends Component<PageProps, PageState> {
  static defaultProps: DefaultPageProps = {
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
      </Fragment>
    );
  }
}

export default Page;
