import * as Styled from "./styles";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Styled.Container>
      <div>
        <h5>Just Help</h5>
        <p className="footerInfo">Buscando formas de melhorar o mundo</p>
        <h5>Contato</h5>
        <p>+55 00 00000-0000</p>
        <p>contato@mail.com</p>
      </div>
      <div className="mediaDiv">
        <h5>Redes Sociais</h5>
        <div>
          <span className="icon">
            <BsFacebook />
          </span>
          <span className="mediaName">Facebook</span>
        </div>
        <div>
          <span className="icon">
            <BsLinkedin />
          </span>
          <span className="mediaName">Linkedin</span>
        </div>
        <div>
          <span className="icon">
            <BsInstagram />
          </span>
          <span className="mediaName">Instagram</span>
        </div>
      </div>
    </Styled.Container>
  );
};

export default Footer;
