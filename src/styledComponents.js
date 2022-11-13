import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 60px;

  article {
    background: white;
    padding: 20px;
    border-radius: 5px;
    border: 1px solid #999;
    display: flex;
    flex-direction: column;
  }

  img {
    max-width: 100%;
  }

`

export const Button = styled.button`
  background: ${props => props.primary ? "white" : "palevioletred"};
  color: ${props => props.primary ? "palevioletred" : "white"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
  }
`