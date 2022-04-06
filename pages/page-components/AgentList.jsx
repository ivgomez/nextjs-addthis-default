import React, { useState, useEffect } from "react";
//import Link from "next/link";
import Image from "next/image";
//import data from "../../data/data";
import ShareComponent from "../../components/ShareComponent";
import styled from "styled-components";

const AgentList = () => {
  const [customAddThisUrl, setCustomAddThisUrl] = useState("");
  const [customA2A, setCustomA2A] = useState("");
  const [open, setOpen] = useState(true);
  const [openA2A, setOpenA2A] = useState(false);
  const [openST, setOpenST] = useState(false);

  const handleOpenAddthis = () => {
    setOpen(true);
    //addthis.update("share", "url", "http://www.example.com");
    // addthis.update(
    //   "share",
    //   "media",
    //   "https://mediarouting.vestahub.com/Media/93962490/box/500x500"
    // );
  };

  const handleCloseAddthis = () => {
    setCustomAddThisUrl("");
    setOpen(false);
  };

  const handleOpenA2A = () => {
    setCustomA2A("new A2A URL");
  };

  const handleCloseA2A = () => {
    setCustomA2A("");
    setOpenA2A(false);
  };

  return (
    <div>
      <ShareComponent
        customAddThisUrl={customAddThisUrl}
        customA2A={customA2A}
        open={open}
        openA2A={openA2A}
        setOpenA2A={setOpenA2A}
        openST={openST}
        setOpenST={setOpenST}
        handleCloseAddthis={handleCloseAddthis}
        handleOpenAddthis={handleOpenAddthis}
        handleOpenA2A={handleOpenA2A}
        handleCloseA2A={handleCloseA2A}
        //id={id}
      />
      <div>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
          facilisis luctus, metus
        </p>
        <dl>
          <dt>Definition list</dt>
          <dd>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </dd>
          <dt>Lorem ipsum dolor sit amet</dt>
          <dd>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </dd>
        </dl>
        <p>
          <strong>Pellentesque habitant morbi tristique</strong> senectus et
          netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
          sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em>{" "}
          Mauris placerat eleifend leo. Quisque sit amet est et sapien
          ullamcorper pharetra. Vestibulum erat wisi, condimentum sed,{" "}
          <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
          elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis
          tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis
          pulvinar facilisis. Ut felis.
        </p>

        <h2>Header Level 2</h2>

        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
            molestie gravida. Curabitur massa. Donec eleifend, libero at
            sagittis mollis, tellus est malesuada tellus, at luctus turpis elit
            sit amet quam. Vivamus pretium ornare est.
          </p>
        </blockquote>

        <h3>Header Level 3</h3>

        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
      </div>
    </div>
    // <AgentWrapper>
    //   <h1>Agents</h1>
    //   <List>
    //     {data.map((element) => (
    //       <AgentElement key={element.id}>
    //         <TextWrapper>
    //           <Link href={`/${element.id}`} passHref>
    //             <a> {element.pictureName} </a>
    //           </Link>
    //         </TextWrapper>
    //         <div>
    //           <ImageWrapper
    //             src={element.pictureUrl}
    //             alt={element.pictureName}
    //             layout="fixed"
    //             width={50}
    //             height={50}
    //           />
    //         </div>
    //       </AgentElement>
    //     ))}
    //   </List>
    // </AgentWrapper>
  );
};

export default AgentList;

const AgentWrapper = styled.div`
  margin: 0 auto;
  padding: 0 2rem;
`;

const List = styled.ul``;

const AgentElement = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageWrapper = styled(Image)`
  border-radius: 50%;
`;

const TextWrapper = styled.div`
  padding: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;
