import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "./data";
import styled from "styled-components";

const AgentList = () => {
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
