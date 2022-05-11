import * as Styled from "./styles";
import Input from "../../Components/Input"

export const Register = () => {
  return (
    <Styled.Container>
      <img src="register" alt="Imagem" />
      <aside>
        <Styled.StyledForm>
          <h1>Cadastro</h1>
          <input name="name" placeholder="Nome Completo" label="Nome" />
          <input
            name="email"
            placeholder="Digite aqui seu email"
            label="Email"
          />
          <input
            name="password"
            placeholder="Digite aqui sua senha"
            label="Password"
            type="password"
          />
          <input
            name="confirm_password"
            placeholder="Confirme sua senha"
            label="Confirmação de senha"
            type="password"
          />
          <input name="cpf" placeholder="Digite aqui seu cpf" label="Nome" />
          <button type="submit">Criar Conta</button>
        </Styled.StyledForm>
      </aside>
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
