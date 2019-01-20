import { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

import "../styles/global.scss";
import hero from "../styles/main.scss";

const Paragraph = styled.p`
  text-align: justify;
`;

const HeadBreak = styled.hr`
  opacity: 0.2;
`;

const Title = styled.h1`
  font-size: 3em;
`;

const NavBar = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  color: #1d1d1d;
  z-index: 9999;
  list-style: none;
  width: 100%;
  display: flex;

  li {
    font-weight: bold;
    padding: 35px;

    a {
      color: inherit;
      text-decoration: none;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;

      * {
        margin: 0 10px;
      }

      img {
        width: 25px !important;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const AnchorLink = styled.a`
  color: #0080ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #0080ff;
  }
`;

const Index = styled.ul`
  list-style-type: none;
  padding: 0 10px;

  li {
    padding: 5px 0;
    text-align: left;

    a {
      transition: all 0.2s ease-in-out;
    }

    &::before {
      content: "-";
      margin-right: 10px;
    }
  }
`;

export default class extends Component {
  render() {
    return (
      <section style={{ padding: 100 }}>
        <NavBar>
          <li>
            <Link href="/">
              <a>
                <img src="/static/Logo/Dark.svg" alt="stockpapers" />
                StockPapers
              </a>
            </Link>
          </li>
        </NavBar>
        <h3> Index </h3>
        <Index>
          <li>
            <AnchorLink href="#information_collection_and_use">
              Information Collection and Use
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#log_data">Log Data</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#cookies">Cookies</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#service_providers">Service Providers</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#security">Security</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#links_to_other_sites">
              Links to Other Sites
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#children_privacy">Children’s Privacy</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#changes">
              Changes to This Privacy Policy
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact">Contact</AnchorLink>
          </li>
        </Index>
        <div>
          <Title>Privacy Policy</Title>
          <Paragraph>
            Federico Vitale built the StockPapers app as a freemium app. This
            SERVICE is provided by Federico at no cost and is intended for use
            as is.
          </Paragraph>
          <Paragraph>
            This page is used to inform website visitors regarding my policies
            with the collection, use, and disclosure of Personal Information if
            anyone decided to use my Service.
          </Paragraph>
          <Paragraph>
            If you choose to use my Service, then you agree to the collection
            and use of information in relation with this policy. The Personal
            Information that I collect are used for providing and improving the
            Service. I will not use or share your information with anyone except
            as described in this Privacy Policy.
          </Paragraph>
          <Paragraph>
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which is accessible at StockPapers, unless
            otherwise defined in this Privacy Policy.
          </Paragraph>
          <HeadBreak />
          <h4 id="information_collection_and_use">
            Information Collection and Use
          </h4>
          <Paragraph>
            For a better experience while using my Service, I may require you to
            provide certain personally identifiable information, including but
            not limited to your name, email, address or password. The
            information that I request is will be retained by me and used as
            described in this privacy policy.
          </Paragraph>
          <Paragraph>
            The app does use third party services that may collect information
            used to identify you.
          </Paragraph>
          <HeadBreak />
          <h4 id="log_data">Log Data</h4>
          <Paragraph>
            I want to inform you that whenever you use my Service, in case of an
            error in the app I collect data and information (tHeadBreakough
            third party products) on your phone called Log Data. This Log Data
            may include information such as your devices’s Internet Protocol
            (“IP”) address, device name, operating system version, configuration
            of the app when utilising my Service, the time and date of your use
            of the Service, and other statistics.
          </Paragraph>
          <HeadBreak />
          <h4 id="cookies">Cookies</h4>
          <Paragraph>
            Cookies are files with small amount of data that is commonly used an
            anonymous unique identifier. These are sent to your browser from the
            website that you visit and are stored on your devices’s internal
            memory.
          </Paragraph>
          <Paragraph>
            This Services does not uses these “cookies” explicitly. However, the
            app may use third party code and libraries that use “cookies” to
            collection information and to improve their services. You have the
            option to either accept or refuse these cookies, and know when a
            cookie is being sent to your device. If you choose to refuse our
            cookies, you may not be able to use some portions of this Service.
          </Paragraph>
          <HeadBreak />
          <h4 id="service_providers">Service Providers</h4>
          <Paragraph>
            I may employ third-party companies and individuals due to the
            following reasons:
          </Paragraph>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <Paragraph>
            I want to inform users of this Service that these third parties have
            access to your Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </Paragraph>
          <HeadBreak />
          <h4 id="security">Security</h4>
          <Paragraph>
            I value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and I
            cannot guarantee its absolute security.
          </Paragraph>
          <h4 id="links_to_other_sites">Links to Other Sites</h4>
          <Paragraph>
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by me. Therefore, I highly advise
            you to review the Privacy Policy of these websites. I have no
            control over, and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </Paragraph>
          <HeadBreak />
          <h4 id="children_privacy">Children’s Privacy</h4>
          <Paragraph>
            This Service does not address anyone under the age of 13. I do not
            knowingly collect personal identifiable information from children
            under 13. In the case I discover that a child under 13 has provided
            me with personal information, I immediately delete this from our
            servers. If you are a parent or guardian and you are aware that your
            child has provided us with personal information, please contact me
            so that I will be able to do necessary actions.
          </Paragraph>
          <HeadBreak />
          <h4 id="changes">Changes to This Privacy Policy</h4>
          <Paragraph>
            I may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. I will
            notify you of any changes by posting the new Privacy Policy on this
            page. These changes are effective immediately, after they are posted
            on this page.
          </Paragraph>
          <HeadBreak />
          <h4 id="contact">Contact Us</h4>
          <Paragraph>
            If you have any questions or suggestions about my Privacy Policy, do
            not hesitate to{" "}
            <AnchorLink href="mailto:support@stockpapers.app?subject=StockPapers%3A%20Privacy%20Policy">
              contact me
            </AnchorLink>
            .
          </Paragraph>
        </div>
      </section>
    );
  }
}
