import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
   margin:0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    /* margin-top: 0; */
    margin-bottom: 0px !important;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
}

.ant-form-item-label > label {
  height: 0px !important
}

.ant-form-item-control-input {
  min-height: 0px !important
}

  body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration:none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .ant-form-vertical .ant-form-item-label, .ant-col-24.ant-form-item-label, .ant-col-xl-24.ant-form-item-label {
    padding: 0px
  }

  .ant-form-item {
    margin-bottom: 0px !important;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    padding: 0px
  }


  .ant-menu-sub.ant-menu-inline, .ant-menu-submenu-arrow, .ant-menu .ant-menu-item, .ant-menu{
    background: #000 !important;
    color: #fff !important;
  }
  
  .ant-modal .ant-modal-body{
    padding: 0px !important;
  }
  .ant-modal .ant-modal-footer{
    width: auto !important;
    margin-top: 0px !important;
  }
  .original .ant-modal-body{
    padding: 20px !important;
  }
  .original .ant-modal-footer{
  }
  iframe{
    display:none;
  }
.ant-tabs-nav{
  margin-bottom: 0px !important;
}
.ant-slide-up-appear, .ant-slide-up-enter, .ant-slide-up-leave {
    animation-duration: 0s !important;
}
.nonanimating-button{
  & [ant-click-animating-without-extra-node]:after {
    animation: 0s !important;
    // border-color: transparent !important;
  }
}
`;

export default GlobalStyle;
