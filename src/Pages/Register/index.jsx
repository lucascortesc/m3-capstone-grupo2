import * as Styled from "./styles";

import { Button } from "../../Components/Button";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <Styled.Container>
      <Styled.Background />
      <Styled.Content>
        <Styled.FormContainer>
          <form>
            <h1>Cadastro</h1>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <input></input>
            <div>
              <input type="checkbox" id="terms" name="terms"></input>
              <label>
                Concordo com os termos de política e privacidade.{" "}
              </label>
            </div>
          </form>
          <Button>Criar conta</Button>
          <p>
            Já tem uma conta?<Link to="/login">Clique aqui!</Link>
          </p>
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
