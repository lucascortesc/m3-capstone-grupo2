import Input from "../../Components/Input";
import { useUser } from "../../Providers/User";
import toast from "react-hot-toast";

import {
  FormContainer,
  Background,
  Container,
  Content,
  Arrow,
  Button,
 
} from "./styles";

import { Link, useHistory, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

export const Login = () => {
  const history = useHistory();

  const { loginUser, user } = useUser();

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (user) {
    return <Redirect to="/" />;
  }

  const onSubmit = async (data) => {
    const status = await loginUser(data);

    if (status === "OK") {
      toast.success("Login realizado com sucesso!");
      setTimeout(() => {
        history.goBack();
      }, 1500);
    } else {
      toast.error("Email ou senha incorretos!");
    }
  };

  return (
    <Container>
      <Background>
        <Arrow>
          <BsArrowLeftCircle onClick={() => history.push("./")} />
        </Arrow>
      </Background>
        <span className="span" >
          <BsArrowLeftCircle onClick={() => history.push("./")} />
        </span>
      <Content>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <Input
              label="Email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Senha"
              register={register}
              name="password"
              error={errors.password?.message}
              type="password"
            />
            <p>
              Não tem conta? <Link to="/register">Clique aqui</Link>
            </p>
            <Button type="submit">
              Entrar
              <div>
                <BsArrowRightCircle />
              </div>
            </Button>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
};
