import Input from "../../Components/Input";

import {
  FormContainer,
  Background,
  Container,
  Content,
  Arrow,
  Button,
} from "./styles";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

export const Login = () => {
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

  const history = useHistory();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Background>
        <Arrow>
          <FiArrowLeftCircle onClick={() => history.goBack()} />
        </Arrow>
      </Background>
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
              Não tem conta? <Link to="/signup">Clique aqui</Link>
            </p>
            <Button type="submit">
              Entrar
              <div>
                <FiArrowRightCircle />
              </div>
            </Button>
          </form>
        </FormContainer>
      </Content>
    </Container>
  );
};

