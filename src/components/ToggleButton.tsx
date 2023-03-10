import React from "react";
import styled from "styled-components";

type Props = {
    label?: string,
    theme: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
};

const ToggleButton = ({label, theme, onClick}: Props) => {
    
    return (
        <Container>
            {label}
            <ButtonOutline onClick={onClick}> 
                {theme === 'light' ?
                    <span 
                    
                        aria-label="Light mode" role="img">🌞</span> 
                    :
                    <span aria-label="Dark mode" role="img">🌜</span>
                }
            </ButtonOutline>
        </Container>
    );
};

const Container = styled.div`
  font-size: 0.9em;
`;

const ButtonOutline = styled.button`
  background: ${({ theme }) => theme.backgroundToggle};
  border-radius: 8px;
  width: 50px;
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  margin-left: 4px;
  padding: 4px;
`;

export default ToggleButton;