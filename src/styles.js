import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Notable');
  body {
    background-color:#c894d1;
    font-family: 'Notable', sans-serif;
  }
`;

const spinner = keyframes`
 to {transform: rotate(360deg);}
`;

export const Loader = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  border: 5px dotted #ff28bb;
  animation: ${spinner} 1s infinite;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const PeopleContainer = styled.div`
  flex: 30%;
  height: auto;
  padding: 20px;
  margin: 5px;
  background-color: #f5cd89;
  .name {
    font-size: 24px;
    color: #3bcccc;
  }
  .list {
    margin-top: 10px;
    color: #5076e3;
  }
`;

export const ElementStyle = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
  .tooltip {
    position: relative;
    display: inline-block;
    border-bottom: 1px solid black;
  }
  .tooltip .tooltiptext {
    visibility: hidden;
    width: 250px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
  }
  .tooltip:hover .tooltiptext {
    visibility: visible;
  }
`;

export const SearchBoxContainer = styled.div`
  input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
`;
