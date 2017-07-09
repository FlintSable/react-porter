import styled from 'styled-components';
import { cerulean, green } from '../../theme/variables';

export const Background = styled.div`
    position: fixed;
    left: 10vw;
    width: 80vw;
    top: 10vh; 
    height: 80vh;
    background-image: url(${require('../../assets/water-texture22_thumb.png')});
    background-color: ${green};
    opacity: 0.2;
    background-size: 120%;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -99;
`;