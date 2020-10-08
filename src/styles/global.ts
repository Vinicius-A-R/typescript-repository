import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-bg.svg';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body{
  background-color: #F0F0F5;
  /* background-size: cover; */
  background-position: center top;
  background-repeat: no-repeat;
  background-image: url(${githubBackground});
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
}

#root{
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 16px;
}

button{
  cursor: pointer;
}
`;
