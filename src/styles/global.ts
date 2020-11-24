import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: #F1F3F4;
  color: #5F8EA0;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}

button{
  cursor: pointer;
}

.scroll-lock {
     overflow:hidden;
}
`;
