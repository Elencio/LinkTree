import Modal from "./modal"
import { FooterContainer} from "./stylesFooter"

export function Footer(){
  return (
     <FooterContainer>
      <span>Coordenado por</span>
      <div>
        <ul>
          <li>Edilson Rogerio</li>
          <li>Elencio Calado</li>
          <li>Antonio Uamba</li>
          <li>Gervasio Dombo</li>
          <Modal />
        </ul>
      </div>
     </FooterContainer>  
  )
}