import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  outline:0;
}

@font-face {
  font-family: 'avenir' ;
  src: url('../fonts/avenir.ttc');
}

@font-face {
  font-family: 'din condensed' ;
  src: url('../fonts/din-condensed-bold.ttf');
}

body {
  background: ${colors.grayLigth};
  -webkit-font-smoothing: antialiased;
}

button {
  cursor: pointer;
}

/* button:hover {
  opacity: 0.5;
} */
`;
