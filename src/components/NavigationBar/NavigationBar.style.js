import styled from 'styled-components';
import { Flex, Div } from '../../theme/grid'
import { cyan,
         cerulean, 
         dblue } from '../../theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
    position: fixed;
    right: 0;
    right: 2em;
    top: 1.8em;
    padding-left: 8px;
    

    background-color: white;
    
`;

export const NavItem = styled(Link)`
    margin-right: 38px;
    margin-top: 4px;
    font-size: 1.5em;
    font-weight: bolder;
    cursor: pointer;
    color:  ${cyan};
    position: relative; 
    text-decoration: none;


    &:hover {
        color: ${cerulean};
        &:after {
            content: ' ';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: ${dblue};
            z-index: -1;
            transform: scale(1.3, 1.1);
            
        }
    }


    
`;