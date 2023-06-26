import styled,  { css } from "styled-components";
import { SummaryCardProps } from "../@types/interfaces";





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
  }

`

export const TagOption = styled.li<SummaryCardProps>`
      text-transform: uppercase;
      border-bottom: 2px solid #fff;
      padding-bottom: 5px;
      text-decoration: none;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;

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

`