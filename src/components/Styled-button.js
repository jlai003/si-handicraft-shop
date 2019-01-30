import styled from 'styled-components';


export const ContainerButton = styled.button`
    text-transform: capitalize;
    font-size: 1.4rem;
    border-radius: 0.5rem;
    background: transparent;
    color: var(--lightBlue);
    cursor: pointer;
    margin: 0.2rem 0.5rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        background:var(--lightBlue);
        color: var(--mainBlue);
    }
`;
