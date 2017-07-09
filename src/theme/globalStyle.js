import { injectGlobal } from 'styled-components';
import { black } from '../theme/variables'

/* eslint-disable */
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Archivo+Black');

    h1{
        font-family:'Archivo Black', sans-serif;

    }

    body{
        font-family:'Helvetica Neue', Helvetica;
        font-size: 20px;
        color: ${ black };
    }
    h1,h2,h3{
        font-weight: normal;
    }
`