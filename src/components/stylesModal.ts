import styled from "styled-components";
import { Button, Modal } from 'antd';

// Estilizando o botão
export const StyledButton = styled(Button)`

  background-color: #3f51b1;
  color: white;
`;

// Estilizando o modal
export const StyledModal = styled(Modal)`
  .ant-modal-content {
    /* Estilos para o conteúdo do modal */
    background-color: #0d1117;
  }

  .ant-modal-title {
    background-color: #0d1117;
    /* Estilos para o título do modal */
    color: #3f51b1;
  }
`;

export const ContainerContent=styled.div`
  margin-top: 1rem;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 1.1rem;
      padding: 0.5rem;
      text-transform: uppercase;
      color: #C4c4c4;
   }

   span {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 1rem;
      color: #dfdfdf;
   }

`