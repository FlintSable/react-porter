import styled from 'styled-components';
import {
    lightblue,
    purp,
    dblue
} from '../../theme/variables'

export const ImageButton = styled.div`

    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img {
    transition: transform .3s;    
    }

    &:hover {
        & > img{
            transform: scale(1.3);
        }
    }
`;

export const Index = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    font-size: 3em;
    font-size: 3em;
     h1 {
         font-weight: bold;
         margin: 0;
         opacity: 0.7;
         transform: translateY(10%);
         color: ${lightblue}         
         
     }


`;

export const ImageContainer = styled.div`
    width: 400px;
    margin-left: auto;
    margin-right: auto;
`

export const Title = styled.h1`
    color: ${dblue};
    font-weight: bold;
    margin-top: 0;
    `