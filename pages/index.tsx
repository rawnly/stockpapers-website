import { Component, Fragment } from "react";
import Head from "next/head";

import Badge from "../components/Badge";
import classes from "../styles/global.scss";

type PageProps = {
  background?: string;
};

type PageState = {};

type DefaultPageProps = {
  background: string;
};

class Page extends Component<PageProps, PageState> {
  static defaultProps: DefaultPageProps = {
    background:
      "https://images.unsplash.com/photo-1544548188-597e0d9e50bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
  };

  render() {
    return (
      <Fragment>
        <Head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=0.8"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />

          <title> 🔥 StockPapers 🔥 </title>
        </Head>
        <ul className={classes.navbar}>
          <li> StockPapers </li>
        </ul>
        <section className={classes.header}>
          <div className={classes.blurLayerContainer}>
            <div className={classes.blurLayer} />
          </div>
          <div className={classes.content}>
            <div className={classes.top}>
              <img src="/static/Logo/White.svg" alt="stockpapers_logo" />
            </div>
            <div className={classes.bottom}>
              <p className={classes.small}>The best wallpaper app</p>
              <h1 className={classes.title}>Make your phone looks stunning</h1>
              <p className={classes.description}>
                StockPapers is a simple, free app designed to bring hand-picked,
                high quality wallpapers in the palm of your hand.
              </p>
              <div className={classes.appstore}>
                <a href="/download">
                  {/* <FloatingButton>download</FloatingButton> */}
                  <Badge background="#ffffff" foreground="#1d1d1d" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <ul className={classes.footer}>
          <li>Made with ❤ in Italy</li>
          <li className={classes.right}>
            <a href="#" className={classes.underline}>
              Privacy Policy
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}

export default Page;
