import { MessengerLogo, TwitterLogo } from "phosphor-react";
import { Link, LinkTreeContainer } from "./styles"
import { BsGithub, BsLinkedin} from "react-icons/bs"

const LinkTree = () => {
  return (
    <>
      <LinkTreeContainer>
        <Link href="https://www.arcdevs.com" target="_blank">
          <span>Github</span>
          <BsGithub size={24} />
        </Link>
        <Link href="mailto:arcdevstartup@gmail.com">
          <span>Email</span>
          <MessengerLogo size={24} />

        </Link>
        <Link href="https://twitter.com/arcdevs" target="_blank">

          <span>Twitter</span>
          <TwitterLogo size={24} />
        </Link>
        <Link href="https://www.linkedin.com/company/arc-devs/" target="_blank">

          <span>LinkedIn</span>
          <BsLinkedin size={24}/>

        </Link>
      </LinkTreeContainer>
    </>

  );
};

export default LinkTree;
