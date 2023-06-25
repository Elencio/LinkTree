import React, { useState } from 'react';
import {StyledButton, StyledModal, ContainerContent} from "./stylesModal"



const ModalApp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledButton type="primary" onClick={showModal}>
        Arc-devs
      </StyledButton>
      <StyledModal title="INFO" visible={isModalOpen} onOk={handleOk}>
        <ContainerContent>
        <strong>Missão</strong>
         <span>
          
          A Startup tem como missão fornecer soluções escaláveis e inovadoras de desenvolvimento de sistemas para empresas, visando melhorar a eficiência operacional e experiência do usuário final.

         </span>
        </ContainerContent>

        <ContainerContent>
        <strong>Visão</strong>
         <span>
          
         A visão da empresa é se tornar líder no mercado global de desenvolvimento de sistemas e ser a escolha preferida de organizações que buscam soluções eficientes e personalizadas

         </span>
        </ContainerContent>
       
      </StyledModal>
    </>
  );
};

export default ModalApp;
