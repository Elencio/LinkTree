import { HeaderContainer } from "./stylesHeader";
import Logo from "../assets/Logo.svg"



export function Header(){
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />

      <span>Desenvolvimento Software e Consultoria TI</span>
    </HeaderContainer>
  )
}