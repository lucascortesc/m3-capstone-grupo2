import * as Styled from "./styles";

import { Link } from "react-router-dom";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import RegisterSchemaCpf from "../../Validation";

import Input from "../../Components/Input";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchemaCpf),
  });

  return (
    <Styled.Container>
      <Styled.Background>
        <Link to="/">
          <BsArrowLeftCircle color="white" size="30px" />
        </Link>
      </Styled.Background>
      <Styled.Content>
        <Styled.FormContainer>
          <form>
            <h1>Cadastro</h1>
            <Input
              type="select"
              register={register}
              name="name"
              label="Eu sou"
              placeholder="Voluntário"
              
            />
            <Input
              register={register}
              name="name"
              label="Nome"
              error={errors.name?.message}
              
            />
            <Input
              register={register}
              name="email"
              label="Email"
              error={errors.email?.message}
             
            />
            <Input
              register={register}
              name="password"
              label="Senha"
              type="password"
              error={errors.password?.message}
              
            />
            <Input
              register={register}
              name="confirmPassword"
              label="Confirmação de senha"
              type="password"
              error={errors.passwordConfirm?.message}
              
            />
            <Input
              register={register}
              name="cpf"
              label="CPF"
              error={errors.cpf?.message}
              
            />
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
