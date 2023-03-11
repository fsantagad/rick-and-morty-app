import React from "react";
import styled from 'styled-components';
import { Character } from "../store";
import LocationDetail from "./LocationDetail";
import { getLastSegment } from "../utils";
import EpisodesList from "./EpisodesList";
import StatusCharacter from "./StatusCharacter";

type Props = {
    character: Character,
    setModalOpen: (x: Character) => void,
};

const CharacterItem = ({character, setModalOpen}: Props) => {
    
    const originLocationId = getLastSegment(character.origin.url);
    const locationLocationId = getLastSegment(character.location.url);

    const handleSeeMore = () => {
        setModalOpen(character);
    }

    return (
        <Container onClick={handleSeeMore} title={`Click to see more details on ${character.name}...`}>
            <Img src={character.image} alt={character.name} />
            <DescriptionWrapper>
                <Title>{character.name}</Title>    
                <StatusCharacter 
                    status={character.status}
                    species={character.species}
                />
                <LocationContainer>
                    <PlanetsH4>Planets</PlanetsH4>
                    <LocationDetail label="Origin" locationId={originLocationId} />
                    <LocationDetail label="Location" locationId={locationLocationId} />
                </LocationContainer>
                <EspisodesContainer>
                    <EpisodesList 
                        label="Appeared"
                        additionalKey={`${character.id}`}
                        listEpisodes={[character.episode[0]]}
                        onlyEpisode={true} 
                    />
                </EspisodesContainer>
            </DescriptionWrapper>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  width: 50%;
  background: ${({ theme }) => theme.backgroundSecondary};
  margin: 10px;
  min-width: 320px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled.img`
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

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;

const LocationContainer = styled.div`
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

const PlanetsH4 = styled.h4`
  margin: 0;
  text-align: start;
`;
const EspisodesContainer = styled.div`
  font-size: 0.8em;
  display: flex;
//   width: 100%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

export default CharacterItem;