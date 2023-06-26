import { CardContainer, Image, Modal, Title, Description, Subtitle, ContentProfile, Close, ContentPrincipal, Location } from './stylesFooter';
import { BsArrowUpRightSquare, BsGlobe } from "react-icons/bs";
import { X } from 'phosphor-react';
import { ModalProps } from '../@types/interfaces';
import { getLinkedInUrl, getSubtitleVariant } from '../constants/Constants';


const ModalContent: React.FC<ModalProps> = ({ activePerson, closeModal }) => {

  return (
    <Modal>
      <Close onClick={closeModal}>
        <X size={24} />
      </Close>
      <div>
        <CardContainer>
          <ContentPrincipal>
            <Image src={activePerson?.image} alt={activePerson?.name} />
            <ContentProfile>
              <Title>{activePerson?.name}</Title>
              <Subtitle variant={getSubtitleVariant(activePerson?.name || '')}>
              {activePerson?.title}
              </Subtitle>
              <Location>
                <BsGlobe size={24} />
                <address>{activePerson?.location}</address>
              </Location>
              <a href={getLinkedInUrl(activePerson?.name || '')} target="_blank" rel="noopener noreferrer">
                <BsArrowUpRightSquare size={24} />
              </a>
            </ContentProfile>
          </ContentPrincipal>
        </CardContainer>
        <Description>
          <strong>Sobre</strong>
          <span>{activePerson?.about}</span>
        </Description>
      </div>
    </Modal>
  );
};

export default ModalContent