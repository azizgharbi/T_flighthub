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
    font-weight:bold;
  }

  .title{
    color: #3bcccc;
    font-weight:bold;
  }

  .user-message{
    display: block;
    margin-top: 25px;
    color: #ff28bb;
    font-weight:400;
  }

  .list {
    font-weight:bold;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #5076e3;
  }
`;

export const ElementStyle = styled.div`
  margin-bottom: 5px;

  .tooltip {
    cursor: pointer;
    position: relative;
    display: inline-block;
    border-bottom: 3px solid #c894d1;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 250px;
    background-color: #fff;
    color: #c894d1;
    font-weight:bold;
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
  padding: 5px;
  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    font-size:20px;
    outline-color:#3bcccc;
    color: #c894d1;
    border:none;
    font-weight:bold;
    box-sizing: border-box;
}
`;
