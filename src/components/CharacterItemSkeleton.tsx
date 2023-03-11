import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

type Props = {
    amount: number
}

const CharacterItemSkeleton = ({ amount }: Props) => {
    const loadCards = Array(amount).fill(1);

    return (
        <>
        {
            loadCards.map((_, i) => (
                <Container key={i} data-testid={`container`}>
                    <ImgContainer>
                        <Skeleton height={150}/>
                    </ImgContainer>
                    <DescriptionWrapper>
                        <Skeleton width={250}/>
                        <Skeleton width={250}/>
                        <Skeleton width={250}/>
                        <Skeleton width={250}/>
                        <Skeleton width={250}/>
                        <Skeleton width={250}/>
                    </DescriptionWrapper>
                </Container>
            ))
        }
        </>
    );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 50%;
  margin: 10px;
  min-width: 320px;
  border-radius: 20px;
  overflow: hidden;
`;
const ImgContainer = styled.div`
    max-width: 200px;
    max-height: 200px;
    flex-grow: 1;

    @media (max-width: 767px) {
        max-width: 150px;
        max-height: 150px;
    }

`;
const DescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px;
  flex-grow: 2;
  align-items: start;
  width: 50%;
`;

export default CharacterItemSkeleton;
