import styled, { css } from 'styled-components';

export const Image = styled.img`
	width: 100%;
`;

export const HeroImage = styled.div`
    height: 100vh;
    background-image: url('${require('../../assets/water-texture22.png')}');
    background-repeat: no-repeat;    
    background-position: center;
    background-size: cover;
    

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    text-align: center;
    color: white;

    font-size: 1em;

    h1{ 
      margin-bottom: 0;  
    }
`;

export const RevealP = styled.p`
    position: relative;
    padding-left: 70px;
    padding-right: 70px;
    
    &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black; 

        transform-origin: left;
        transform: rotateY(90deg);

        transition: transform 1s;
    }

    ${({ hide }) => hide && css`
        &:after {
            transform: rotateY(0deg);
        }
    `}
`;