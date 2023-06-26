import { HeaderContainer } from "./stylesHeader";
import Logo from "../assets/Logo.svg"


export function Header(){
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />

      <span>Desenvolvimento de Software e Consultoria TI</span>
    </HeaderContainer>
  )
}