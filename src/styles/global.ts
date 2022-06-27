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

  .MuiTreeItem-label{
    font-family: 'Roboto !important' ;
    font-style: normal  !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    line-height: 20px !important;
  }

  .css-1g86id8-MuiTreeItem-content .MuiTreeItem-iconContainer svg {
    font-size: 14px !important;
  }

  .css-1g86id8-MuiTreeItem-content.Mui-selected {
    /* width: 100% !important; */
    /* background-color: red !important; */
  }

  .ant-tree.ant-tree-block-node.ant-tree-directory {
    width: 100% !important
  }

  .ant-tree.ant-tree-directory .ant-tree-treenode-selected::before {
    background: #F6F0FF !important
  }

  .ant-tree-treenode .ant-tree-node-content-wrapper.ant-tree-node-selected{
    font-family: 'Roboto' !important;
    font-weight: 500 !important;
    color: #7346F8 !important
  }

  .ant-tree-treenode-selected .ant-tree-switcher {
    color: black !important
  }

  .ant.tree.title {
    font-size: 12px !important;
    font-weight: 500 !important;
    line-height: 20px !important;
    font-style: normal !important;
    color: rgba(0, 0, 0, 0.85) !important;
    font-family: 'Roboto' !important;
  }

}
`;

export default GlobalStyle;
