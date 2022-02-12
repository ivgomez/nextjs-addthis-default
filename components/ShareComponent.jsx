import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoint } from "./theme";
import CopyLink from "../pages/images/CopyLink";
import WhatsappShareLink from "../pages/images/WhatsappShareLink";
import SkypeShareLink from "../pages/images/SkypeShareLink";
import FacebookShareLink from "../pages/images/FacebookShareLink";
import MessengerShareLink from "../pages/images/MessengerShareLink";
import TelegramShareLink from "../pages/images/TelegramShareLink";
import SMSShareLink from "../pages/images/SMSShareLink";

function ShareComponent() {
  const [open, setOpen] = useState(false);
  const [openA2A, setOpenA2A] = useState(false);
  const [openST, setOpenST] = useState(false);

  var a2a_config = a2a_config || {};
  a2a_config.templates = a2a_config.templates || {};

  const addthisViewEvent = () => {
    window.a2a.init_all();
    if (window?.addthis) {
      //console.log("addthis", window.addthis);
      window.addthis.toolbox(".addthis_sharing_toolbox");
    }
    if (window?.a2a) {
      //console.log("a2a", window.a2a);
      window.a2a.init_all();
    }
    if (window?.st) {
      console.log("st", window.st);
      window.st.initialize();
    }
  };

  useEffect(() => {
    addthisViewEvent();
    //console.log("object", window);
  }, [open, openA2A, openST]);

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1>SHARE BUTTONS LIBRARIES - EXAMPLES FOR REACT JS/NEXT.js</h1>

      <div style={{ display: "block" }}>
        <div style={{ display: "block" }}>
          <h2>AddThis Library - Buttons customized</h2>
          <button onClick={() => setOpen(!open)}>
            Simulating a modal open/close
          </button>
          {open ? (
            <div style={{ width: "60%", margin: "0 auto" }}>
              <p>
                <a
                  href="https://www.addthis.com/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#10a9d8",
                  }}
                >
                  AddThis
                </a>{" "}
                Library - Share buttons customized{" "}
              </p>
              <Modal>
                <div className="addthis_sharing_toolbox">
                  <div className="custom_images" style={{ display: "block" }}>
                    <ShareLinksWrapper>
                      <ShareLinksGroup>
                        <ShareLinks className="addthis_button_link">
                          <CopyLink alt="Copy Link" />
                          <ShareLinksText>COPY LINK</ShareLinksText>
                        </ShareLinks>
                        <ShareLinks className="addthis_button_whatsapp">
                          <WhatsappShareLink alt="Share to Whatsapp" />
                          <ShareLinksText>WHATSAPP</ShareLinksText>
                        </ShareLinks>
                        <ShareLinks className="addthis_button_skype">
                          <SkypeShareLink alt="Share to Skype" />
                          <ShareLinksText>SKYPE</ShareLinksText>
                        </ShareLinks>
                      </ShareLinksGroup>
                      <ShareLinksGroup>
                        <ShareLinks className="addthis_button_facebook">
                          <FacebookShareLink alt="Share to Facebook" />
                          <ShareLinksText>FACEBOOK</ShareLinksText>
                        </ShareLinks>
                        <ShareLinks
                          className="addthis_button_messenger"
                          addthis:url="http://example.com"
                          addthis:title="An excellent website"
                        >
                          <MessengerShareLink />
                          <ShareLinksText>MESSENGER</ShareLinksText>
                        </ShareLinks>
                        <ShareLinks className="addthis_button_telegram">
                          <TelegramShareLink alt="Share to Telegram" />
                          <ShareLinksText>TELEGRAM</ShareLinksText>
                        </ShareLinks>
                      </ShareLinksGroup>
                    </ShareLinksWrapper>
                  </div>
                </div>
              </Modal>
            </div>
          ) : null}
        </div>

        <div style={{ display: "block" }}>
          <h2>AddToAny Library</h2>
          <div style={{ padding: "1rem 0" }}>
            <button onClick={() => setOpenA2A(!openA2A)}>
              Simulating a modal open/close
            </button>

            {openA2A ? (
              <div style={{ width: "60%", margin: "0 auto" }}>
                <p>
                  <a
                    href="https://www.addtoany.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#10a9d8",
                    }}
                  >
                    AddToAny
                  </a>{" "}
                  Library - Share buttons customized{" "}
                </p>
                <Modal>
                  <div
                    className="a2a_kit a2a_kit_size_32 a2a_default_style"
                    data-a2a-url="http://www.example.com/page.html"
                    data-a2a-title="Corcoran"
                  >
                    <ShareLinksWrapper>
                      <ShareLinksGroup>
                        <ShareLinks className="a2a_button_copy_link">
                          <CopyLink alt="Copy Link" />
                          <ShareLinksText>COPY LINK</ShareLinksText>
                        </ShareLinks>
                        <ShareLinks className="a2a_button_whatsapp">
                          <WhatsappShareLink alt="Share to Whatsapp" />
                          <ShareLinksText>WHATSAPP</ShareLinksText>
                        </ShareLinks>
                        <ShareLinks className="a2a_button_skype">
                          <SkypeShareLink alt="Share to Skype" />
                          <ShareLinksText>SKYPE</ShareLinksText>
                        </ShareLinks>
                      </ShareLinksGroup>
                      <ShareLinksGroup>
                        <ShareLinks className="a2a_button_facebook">
                          <FacebookShareLink alt="Share to Facebook" />
                          <ShareLinksText>FACEBOOK</ShareLinksText>
                        </ShareLinks>
                        <ShareLinks className="a2a_button_facebook_messenger">
                          <MessengerShareLink />
                          <ShareLinksText>MESSENGER</ShareLinksText>
                        </ShareLinks>

                        <ShareLinks className="a2a_button_telegram">
                          <TelegramShareLink alt="Share to Telegram" />
                          <ShareLinksText>TELEGRAM</ShareLinksText>
                        </ShareLinks>
                      </ShareLinksGroup>
                    </ShareLinksWrapper>
                  </div>
                </Modal>
              </div>
            ) : null}
          </div>
        </div>

        <div style={{ display: "block" }}>
          <h2>ShareThis Library</h2>
          <div style={{ padding: "1rem 0" }}>
            <button onClick={() => setOpenST(!openST)}>
              Simulating a modal open/close
            </button>

            {openST ? (
              <div style={{ width: "60%", margin: "0 auto" }}>
                <p>
                  <a
                    href="https://sharethis.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: "#10a9d8",
                    }}
                  >
                    ShareThis
                  </a>{" "}
                  Library - Share buttons customized{" "}
                </p>
                <Modal>
                  <ShareLinksWrapper>
                    <ShareLinksGroup>
                      <ShareThisButton
                        className="st-custom-button"
                        data-network="copy"
                      >
                        <CopyLink alt="Copy Link" />
                        <ShareLinksText>COPY LINK</ShareLinksText>
                      </ShareThisButton>
                      <ShareThisButton
                        className="st-custom-button"
                        data-network="facebook"
                      >
                        <FacebookShareLink alt="Share to Facebook" />
                        <ShareLinksText>FACEBOOK</ShareLinksText>
                      </ShareThisButton>
                      <ShareThisButton
                        className="st-custom-button"
                        data-network="messenger"
                      >
                        <MessengerShareLink />
                        <ShareLinksText>MESSENGER</ShareLinksText>
                      </ShareThisButton>
                    </ShareLinksGroup>
                    <ShareLinksGroup>
                      <ShareThisButton
                        className="st-custom-button"
                        data-network="whatsapp"
                      >
                        <WhatsappShareLink alt="Share to Whatsapp" />
                        <ShareLinksText>WHATSAPP</ShareLinksText>
                      </ShareThisButton>
                      <ShareThisButton
                        className="st-custom-button"
                        data-network="telegram"
                      >
                        <TelegramShareLink alt="Share to Telegram" />
                        <ShareLinksText>TELEGRAM</ShareLinksText>
                      </ShareThisButton>
                      <ShareThisButton
                        className="st-custom-button"
                        data-network="sms"
                      >
                        <SMSShareLink alt="Share to SMS" />
                        <ShareLinksText>SMS</ShareLinksText>
                      </ShareThisButton>
                      {/* <TiktokShareButton
                        className="sharethis-inline-follow-buttons"
                        data-title="Tiktok"
                        data-url="@corcorangroup/video/7059864242601823535?is_from_webapp=1&sender_device=pc&web_id7041204526691960325"
                      /> */}
                    </ShareLinksGroup>
                  </ShareLinksWrapper>
                </Modal>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareComponent;

const TiktokShareButton = styled.a`
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem 10px 2rem;

  width: 121px;
  ${breakpoint.tablet` 
    padding: 0;
  `}

  span {
    visibility: hidden;
  }

  div:nth-child(1) {
    position: absolute;
  }
  div:nth-child(2) {
    display: flex !important;
    float: left !important;
    padding: 0 !important;
    height: 0 !important;
    :hover {
      top: 0 !important;
      opacity: 1 !important;
      text-decoration: underline !important;
      img {
        background-color: #030303;
      }
    }
  }

  div:nth-child(2):after {
    content: "TIKTOK";
    visibility: visible;
    font-weight: 800;
    font-size: 12px;
    padding: 0 1rem !important;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin-top: -10px !important;
    }
    }
  }

  img {
    background-color: #8c8c8c;
    top: 0 !important;
    right: 6px !important;
    height: 22px !important;
    width: 22px !important;
    border-radius: 50%;
    :hover {
      background-color: #030303;
    }
  }
`;

const ShareThisButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  ${breakpoint.tablet` 
    padding: 0;
  `}
`;

const TelegramButton = styled.a`
  display: block;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  border-radius: 8px;
  padding: 5px;
  background: #389ce9;
  text-decoration: none;
  color: #fff;
`;

const SVG = styled.svg`
  width: 30px;
  height: 20px;
  vertical-align: middle;
  margin: 0px 5px;
`;

const Modal = styled.div`
  border: 1px solid #ccc;
`;

const ShareLinksWrapper = styled.div`
  padding-top: 8px;
  padding: 0 1rem;
  padding-bottom: 17px;
  ${breakpoint.tablet` 
    padding-top: 35px;
    padding-bottom: 45px;
  `}
`;

ShareLinksWrapper.displayName = "ShareLinksWrapper";

const ShareLinksGroup = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  ${breakpoint.tablet` 
    padding: 12px 0;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const ShareLinks = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 0;
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
  ${breakpoint.tablet` 
    padding: 0;
  `}
`;

ShareLinks.displayName = "ShareLinks";

const ShareLinksText = styled.div`
  padding: 0 18px;
  width: 6.5rem;
  font-weight: 800;
  font-size: 12px;
  display: inline-block;
`;
