import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoint } from "./theme";
import CopyLink from "../pages/images/CopyLink";
import WhatsappShareLink from "../pages/images/WhatsappShareLink";
import SkypeShareLink from "../pages/images/SkypeShareLink";
import FacebookShareLink from "../pages/images/FacebookShareLink";
import MessengerShareLink from "../pages/images/MessengerShareLink";
import TelegramShareLink from "../pages/images/TelegramShareLink";

function ShareComponent() {
  const [open, setOpen] = useState(false);
  const [openA2A, setOpenA2A] = useState(false);

  var a2a_config = a2a_config || {};
  a2a_config.templates = a2a_config.templates || {};

  const addthisViewEvent = () => {
    window.a2a.init_all();
    if (window?.addthis) {
      window.addthis.toolbox(".addthis_sharing_toolbox");
    }
    // if (window.a2a) {
    //   console.log("object", window);
    //   window.a2a.init_all();
    // }
  };

  useEffect(() => {
    addthisViewEvent();
    console.log("object", window);
  }, [open, openA2A]);

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <h1>SHARE BUTTONS LIBRARIES - EXAMPLES FOR REACT JS/NEXT.js</h1>
      {/* <div style={{ padding: "2rem 0" }}>
        <p>SHARETHIS BUTTON</p>
        <div className="sharethis-inline-share-buttons"></div>
      </div> */}
      <div style={{ display: "block" }}>
        <h2>AddThis Library - Buttons customized</h2>
        <button onClick={() => setOpen(!open)}>Simulate modal</button>
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
                <div className="custom_images">
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

              <div style={{ padding: "0 1rem" }}>
                <h3>ShareThis Library - Tik Tok</h3>
                <div
                  className="sharethis-inline-follow-buttons"
                  data-url="https://www.tiktok.com/@corcorangroup/video/7060539578247302447?is_from_webapp=1&sender_device=pc&web_id7041204526691960325"
                  style={{ padding: "1rem 0" }}
                ></div>
              </div>
            </Modal>
          </div>
        ) : null}
        <div style={{ display: "none" }}>
          <h2>AddToAny Library</h2>
          <div style={{ padding: "1rem 0" }}>
            <button onClick={() => setOpenA2A(!openA2A)}>
              Open AddToAny Links
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
      </div>
      <div style={{ padding: "1rem 0" }}>
        {/* <h2>Default Buttons</h2> */}
        <div style={{ display: "none" }}>
          <h3>Addthis Library - Default buttons</h3>
          <div className="addthis_inline_share_toolbox"></div>
        </div>
        <div style={{ padding: "2rem 0", display: "none" }}>
          <h3>AddToAny Library - Default buttons</h3>
          <div className="a2a_kit a2a_kit_size_32 a2a_default_style">
            <a className="a2a_button_sms"></a>
            <a className="a2a_button_email"></a>
          </div>
        </div>
        <div style={{ padding: "2rem 1rem" }}>
          <h3>ShareThis Library - Tik Tok</h3>
          {/* <div className="sharethis-inline-share-buttons"></div> */}
          <div
            className="sharethis-inline-follow-buttons"
            style={{ padding: "1rem 0" }}
          ></div>
        </div>
      </div>

      {/* <div style={{ padding: "1rem 0" }}>
        <button onClick={() => setOpenA2A(!openA2A)}>
          Add To Anny Library
        </button>
        <div>
          {openA2A ? (
            <Modal>
              <p>ADDTOANY share links</p>
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

                    <ShareLinks
                      className="a2a_button_telegram"
                      href="https://www.corcoran.com/homes-for-sale/474-middle-line-highway-bridgehampton-ny-11932/6418974/regionId=3?WebID=885241"
                    >
                      <TelegramShareLink alt="Share to Telegram" />
                      <ShareLinksText>TELEGRAM</ShareLinksText>
                    </ShareLinks>
                  </ShareLinksGroup>
                </ShareLinksWrapper>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
      <hr />
      <p>API BUTTON 1</p>
      <div style={{ width: "15rem" }}>
        <TelegramButton
          href="https://xn--r1a.link/share/url?url=https%3A%2F%2Fnextjs-addthis-k70scbjjn-ivgomez.vercel.app%2F&text=Link%20to%20share"
          target="_blank"
        >
          <SVG viewBox="0 0 21 18">
            <g fill="none">
              <path
                fill="#d3dae0"
                d="M0.554,7.092 L19.117,0.078 C19.737,-0.156 20.429,0.156 20.663,0.776 C20.745,0.994 20.763,1.23 20.713,1.457 L17.513,16.059 C17.351,16.799 16.62,17.268 15.88,17.105 C15.696,17.065 15.523,16.987 15.37,16.877 L8.997,12.271 C8.614,11.994 8.527,11.458 8.805,11.074 C8.835,11.033 8.869,10.994 8.905,10.958 L15.458,4.661 C15.594,4.53 15.598,4.313 15.467,4.176 C15.354,4.059 15.174,4.037 15.036,4.125 L6.104,9.795 C5.575,10.131 4.922,10.207 4.329,10.002 L0.577,8.704 C0.13,8.55 -0.107,8.061 0.047,7.614 C0.131,7.374 0.316,7.182 0.554,7.092 Z"
              ></path>
            </g>
          </SVG>
          TELEGRAM
        </TelegramButton>
      </div>

      <p>API BUTTON 2</p>
      <div style={{ border: "1px solid black", width: 150, cursor: "pointer" }}>
        <a
          href="https://xn--r1a.link/share/url?url=https%3A%2F%2Fnextjs-addthis-k70scbjjn-ivgomez.vercel.app%2F&text=Link%20to%20share"
          target="_blank"
          rel="noopener noreferrer"
        >
          TELEGRAM
        </a>
      </div>
      <p>API BUTTON 3</p>
      <div>
        <a
          style={{
            border: "1px solid black",
            width: 150,
            cursor: "pointer",
            display: "block",
          }}
          href={`https://t.me/share/url?url=${urlLink}&text=some`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Share
        </a>
      </div> */}

      {/* <div
        className="a2a_kit a2a_kit_size_32 a2a_default_style"
        data-a2a-url="https://www.corcoran.com/homes-for-sale/474-middle-line-highway-bridgehampton-ny-11932/6418974/regionId=3?WebID=885241"
        data-a2a-title="Corcoran"
      >
        <a className="a2a_button_copy_link" />
        <a className="a2a_button_whatsapp" />
        <a className="a2a_button_skype" />
        <a className="a2a_button_facebook" />
        <a className="a2a_button_facebook_messenger" />
        <a className="a2a_button_telegram" />
      </div> */}
    </div>
  );
}

export default ShareComponent;

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
