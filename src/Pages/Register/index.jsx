import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { RegisterSchemaCnpj, RegisterSchemaCpf } from "../../Validation";
import Input from "../../Components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Button } from "../../Components/Button";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useUser } from "../../Providers/User";
import { Redirect } from "react-router-dom";

export const Register = () => {
  const [type, setType] = useState("voluntary");
  const history = useHistory();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(
      type === "voluntary" ? RegisterSchemaCpf : RegisterSchemaCnpj
    ),
  });

  const { user } = useUser();
  if (user) {
    return <Redirect to="/" />;
  }

  const onSubmitFunction = (data) => {
    if (type === "organization") {
      const {
        name,
        email,
        password,
        cnpj,
        socialAssist,
        culture,
        health,
        environment,
        rightDefense,
        housing,
        education,
      } = data;

      const newData = {
        name,
        email,
        password,
        cnpj,
        type,
        events: [],
        goals: {
          socialAssist,
          culture,
          health,
          environment,
          rightDefense,
          housing,
          education,
        },
      };

      api
        .post("/register", newData)
        .then((res) => {
          toast.success("Cadastro realizado com sucesso!");
          setTimeout(() => {
            history.push("/login");
          }, 1500);
        })
        .catch((error) => toast.error("Ocorreu algum erro :C"));
    } else {
      const newData = {
        ...data,
        events: [],
      };

      api
        .post("/register", newData)
        .then((res) => {
          toast.success("Cadastro realizado com sucesso!");
          setTimeout(() => {
            history.push("/login");
          }, 1500);
        })
        .catch((error) => toast.error("Ocorreu algum erro :C"));
    }
  };

  return (
    <Styled.Container>
      <Styled.Background>
        <Link to="/">
          <BsArrowLeftCircle color="white" size="30px" />
        </Link>
      </Styled.Background>
      <Styled.Content>
        <Styled.FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
          <form>
            <h1>Cadastro</h1>

            <Styled.TypeContainer>
              <label>Eu sou</label>
              <div>
                <select onChange={(event) => setType(event.target.value)}>
                  <option value="voluntary">Voluntário</option>
                  <option value="organization">Organização</option>
                </select>
              </div>
            </Styled.TypeContainer>

            {type === "voluntary" ? (
              <Styled.VolundaryForm>
                <Input
                  label="Nome completo"
                  name="name"
                  register={register}
                  error={formState.errors.name?.message}
                />
                <Input
                  label="Email"
                  name="email"
                  register={register}
                  error={formState.errors.email?.message}
                />
                <Input
                  label="Senha"
                  type="password"
                  name="password"
                  register={register}
                  error={formState.errors.password?.message}
                />
                <Input
                  type="password"
                  label="Confirmar senha"
                  name="confirmPassword"
                  register={register}
                />
                <Input
                  label="CPF"
                  name="cpf"
                  register={register}
                  error={formState.errors.cpf?.message}
                />
              </Styled.VolundaryForm>
            ) : (
              <Styled.OrganizationForm>
                <Input
                  label="Nome da Organização"
                  name="name"
                  register={register}
                  error={formState.errors.name?.message}
                />
                <Input
                  label="Email"
                  name="email"
                  register={register}
                  error={formState.errors.email?.message}
                />
                <Input
                  label="Senha"
                  type="password"
                  name="password"
                  register={register}
                  error={formState.errors.password?.message}
                />
                <Input
                  label="Confirmar senha"
                  type="password"
                  name="confirmPassword"
                  register={register}
                />
                <Input
                  label="CNPJ"
                  name="cnpj"
                  register={register}
                  error={formState.errors.cnpj?.message}
                />
                <Styled.GoalsContainer>
                  <aside>
                    <div>
                      <input type="checkbox" {...register("socialAssist")} />
                      <label>Assistência Social</label>
                    </div>
                    <div>
                      <input type="checkbox" {...register("culture")} />
                      <label>Cultura</label>
                    </div>
                    <div>
                      <input type="checkbox" {...register("health")} />
                      <label>Saúde</label>
                    </div>
                    <div>
                      <input type="checkbox" {...register("environment")} />
                      <label>Meio Ambiente</label>
                    </div>
                  </aside>
                  <aside>
                    <div>
                      <input type="checkbox" {...register("rightDefense")} />
                      <label>Desenvolvimento e defesa de direitos</label>
                    </div>
                    <div>
                      <input type="checkbox" {...register("housing")} />
                      <label>Habitação</label>
                    </div>
                    <div>
                      <input type="checkbox" {...register("education")} />
                      <label>Educação e Pesquisa</label>
                    </div>
                  </aside>
                </Styled.GoalsContainer>
              </Styled.OrganizationForm>
            )}

            <Styled.TermsContainer>
              <input type="checkbox" {...register("policy")} />
              <label>Concordo com os termos de política e privacidade.</label>
            </Styled.TermsContainer>

            <div className="signupButton">
              <Button
                type="submit"
                padding="10px 40px"
                fontSize="16px"
                background="var(--primaryColor50)"
                color="white"
                gap="10px"
                weigth="800"
              >
                Criar conta{" "}
                <BsArrowRightCircle color="var(--color-highlight)" />
              </Button>
            </div>
            <p>
              Já tem uma conta?<Link to="/login"> Clique aqui!</Link>
            </p>
          </form>
        </Styled.FormContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
