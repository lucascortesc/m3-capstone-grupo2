import * as Styled from "./styles";

import { Link } from "react-router-dom";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

export const Register = () => {
  return (
    <Styled.Container>
      <Styled.Background>
        <Link to="/">
          <BsArrowLeftCircle color="white" size="30px"/>
        </Link>
      </Styled.Background>
      <Styled.Content>
        <Styled.FormContainer>
          <form>
            <h1>Cadastro</h1>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <div>
              <input type="checkbox" id="terms" name="terms"></input>
              <label>Concordo com os termos de política e privacidade. </label>
            </div>
            <button className="loginButton">
              Criar conta <BsArrowRightCircle color="var(--color-highlight)" />
            </button>
            <p>
              Já tem uma conta?<Link to="/login">Clique aqui!</Link>
            </p>
          </form>
        </Styled.FormContainer>
      </Styled.Content>
    </Styled.Container>
  );
};

/* use input example:

 <Input
label={"Nome"}
register={register}
name="name"
error={errors.name?.message}
/> 
*/
