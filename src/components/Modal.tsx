import React, {useEffect} from "react";
import styled from "styled-components";

type Props = {
    title?: string,
    isOpen: boolean,
    closeModal: () => void,
    children?: React.ReactNode,
}

const Modal = ({ title, closeModal, isOpen, children }: Props) => {

  const handleClose = () => {
    closeModal();
  }
  
  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
  }
  
  const changeBody = (isOpen: boolean)=> {
    isOpen ? 
    document.body.classList.add('modal-open')
    :
    document.body.classList.remove('modal-open')
  }

  useEffect(() => {
    changeBody(isOpen);
    return () => {
        changeBody(false);
    };
 }, [isOpen]);

  return (
    <>
        {isOpen && 
            <WrapperModal onClick={handleClose}>
                <Container onClick={handleClick}>
                    <ModalTitle>
                        <div>{title}</div>
                        <button onClick={handleClose}>&times;</button>
                    </ModalTitle>
                    <ModalBody>
                        {children}
                    </ModalBody>
                </Container>
            </WrapperModal>
        }
    </>
  );
};

const WrapperModal = styled.div`
    z-index: auto;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;
const Container = styled.div<{
    width?: number
    height?: number
  }>`
    position: relative;
    top: 50%;
    left: 50%;
    height: 80vh;
    width: 80vw;
    max-width: 1200px;
    background: ${({ theme }) => theme.body};
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 6px;
`;
const ModalTitle = styled.div`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;

    button{
        font-size: 1.2em;
    }
`;
const ModalBody = styled.div`
    overflow: auto;
    max-height: 90%;
    margin-top: 10px;
`;

export default Modal;