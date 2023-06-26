import styled, { css } from "styled-components";
import { SummaryCardProps } from "../@types/interfaces";


export const FooterContainer = styled.footer`
   margin-top: 6rem;
   margin-bottom: 1rem;
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

export const Modal = styled.div`
  min-width: 28rem;
  height: 30rem;
  border: 0;
  position: fixed;
  background: #010409;
  box-shadow: 0 0 1px 0.5px #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); //centrar coisas na Tela
  overflow: auto;
`;


export const CardContainer = styled.div`
 display: flex;
 flex-direction: row;
 gap: 10rem;
 margin-top: 2rem;
 align-items: flex-start;
 padding-right: 1rem;
 box-shadow: 0 0.3px 0 0px #fff;
 svg {
   margin-top: 1rem;
 }
`;

export const Image = styled.img`
  max-width: 200px;
  width: 100%;
  object-fit: cover;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 120%;
  color: #c4c4c4;
`;

export const Subtitle = styled.span<SummaryCardProps>`
  font-size: 1rem;
  color: #e74c3c;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 120%;



  ${props => props.variant === 'green' && css`
         color: #3498db;
   `}

   ${props => props.variant === 'yellow' && css`
         color: #e67e22;
   `}

   ${props => props.variant === 'blue' && css`
         color: #9b59b6;
   `}

   ${props => props.variant === 'red' && css`
         color: #e74c3c;
   `}
`;

export const Description = styled.div`
margin-top: 2rem;
display: flex;
flex-direction: column;
gap: 0.5rem;
padding: 1rem;

  font-size: 14px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  line-height: 120%;

  strong {
     text-decoration: underline;
     font-size: 1.1rem;
     text-transform: uppercase;
     font-family: 'Roboto', sans-serif;
     font-weight: 500;
     line-height: 120%;
  }
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 145%;
    letter-spacing:initial ;
    text-align: justify;
  }
`;

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;

  svg {
    cursor: pointer;
    color: #fff;
  }
`
export const ContentPrincipal = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

`
export const Location =styled.div`
   display: flex;
   flex-direction: row;
   gap: 0.5rem;
   align-items: center;
   justify-content: center;

   svg {
    margin-top: -1px;
   }
`

export const Close = styled.div`
 display: flex;
 flex-direction: row-reverse;
 padding: 0.5rem;
 background-color: #8e04ad;
 position: fixed;
 width: 100%;
  
 svg {
  color: #fff;
  cursor: pointer;
 }
`