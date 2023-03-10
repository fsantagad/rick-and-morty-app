import React, { useState } from "react";
import { useGetCharactersQuery, Character, setSelectedCharacter, resetSelectedCharacter } from "../store";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import CharacterItem from "./CharacterItem";
import Modal from "./Modal";
import CharacterDetails from "./CharacterDetails";
import CharacterItemSkeleton from "./CharacterItemSkeleton";

const CharactersList = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const {data, isLoading, isFetching, error} = useGetCharactersQuery('1');

    const dispatch = useDispatch();
    
    const handleModalOpen = (item: Character) => {
        dispatch(setSelectedCharacter(item));
        setModalOpen(true);
    }

    const handleModalClose = () => {
        dispatch(resetSelectedCharacter());
        setModalOpen(false);
    }

    let content;
    if (isLoading || isFetching) {
        
        content = <CharacterItemSkeleton amount={4} />;

    } else if (error) {
        content = <div>{JSON.stringify(error)}</div>;
    } else {
        content =  data?.map((item: Character) => {
            return <CharacterItem 
                        key={item.id} 
                        character={item} 
                        setModalOpen={handleModalOpen} 
                    /> 
        })
    }

    return (
        <>
            <WrapperList>{content}</WrapperList>
            {modalOpen && 
                <Modal 
                    isOpen={modalOpen} 
                    closeModal={handleModalClose} 
                >
                    <CharacterDetails />
                </Modal>
            }
        </>

    )
}

const WrapperList = styled.div`
  display: flex;
  flex-flow: wrap;
`;

export default CharactersList;