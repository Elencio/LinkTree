import styled from "styled-components";

export const ContainerTag = styled.div`
  background-color: transparent;
  margin-top: 3rem;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 1rem;

    li {
      text-transform: uppercase;
      border-bottom: 2px solid #fff;
      padding-bottom: 5px;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      cursor: pointer;
    }
  }

`