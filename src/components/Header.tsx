import { HeaderContainer } from "./stylesHeader";
import Logo from "../assets/Logo.svg"



export function Header(){
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />

      <span>Desenvolvimento Software and Consultoria</span>
    </HeaderContainer>
  )
}