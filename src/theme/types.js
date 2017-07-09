import styled from 'styled-components';
import { cerulean, green }from '../theme/variables';

export const A = styled.a`
    color: ${green};
    text-decoration: none;
    position: relative;

    &:after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 10%;
        width: 100%;
        background-color: ${cerulean};
        z-index: -10;
        transition: height .1s, background-color .1s;

    }

    &:hover:after {
        height: 40%;
        background-color: ${cerulean};
    }
`;

