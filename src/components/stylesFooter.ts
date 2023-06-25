import styled from "styled-components";


export const FooterContainer = styled.footer`
   margin-top: 6rem;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 2rem;
   align-items: center;
   justify-content: center;


   ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    li{
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 1rem;
    }
   }

`