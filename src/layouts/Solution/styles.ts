import styled from 'styled-components';

export const Solution = styled.div`
  flex-direction: row;
  display: flex;
  min-height: 100vh;
  height: 100%;
  background-color: #fcfbff;
  width: 100%;
`;

export const Body = styled.div`
  flex-direction: column;
  display: flex;
  flex: 1;
  /* height: 100vh; */
  /* width: 100vw; */
`;

export const Header = styled.div``;

export const Content = styled.div`
  /* height: 100%; */
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const BackgroundLayout = styled.div`
  height: 142px;
  width: 100%;
  z-index: -1 !important;
  background-color: white;
  top: 49px;
  position: absolute;
  border-bottom: 1px solid #f0f0f0;
`;
