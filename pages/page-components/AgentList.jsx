import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "../../data/data";
import styled from "styled-components";

const AgentList = () => {
  const setAddthisConfig = () => {
    // eslint-disable-next-line no-undef
    if (
      (typeof addthis_share != "undefined" && addthis_share != null) ||
      window.addthis_share
    ) {
      window.addthis?.update(
        "share",
        "media",
        "https://res.cloudinary.com/corcoran-dryrmqrbg/image/upload/q_auto,f_auto/v1567544323/static-images/default-building-image.jpg"
      );
    }
  };

  useEffect(() => {
    setAddthisConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AgentWrapper>
      <h1>Agents</h1>
      <List>
        {data.map((element) => (
          <AgentElement key={element.id}>
            <TextWrapper>
              <Link href={`/${element.id}`} passHref>
                <a> {element.pictureName} </a>
              </Link>
            </TextWrapper>
            <div>
              <ImageWrapper
                src={element.pictureUrl}
                alt={element.pictureName}
                layout="fixed"
                width={50}
                height={50}
              />
            </div>
          </AgentElement>
        ))}
      </List>
    </AgentWrapper>
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
