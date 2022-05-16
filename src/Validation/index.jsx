import * as yup from "yup";

export const RegisterSchemaCnpj = yup.object().shape({
  name: yup
    .string()
    .required("Nome da organização obrigatório")
    .matches(/^(?!.*\d).{0,}$/, "Nome da organização não deve conter números")
    .matches(/\w/, "Nome da organização não deve conter símbolos"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email inválido, tente novamente"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve conter ao menos 8 dígitos")
    .matches(/[a-z]/, "A senha deve conter ao menos uma letra")
    .matches(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter ao menos um número")
    .matches(/\W/, "A senha deve conter ao menos um símbolo")
    .matches(/^(?!.*\s).{0,}$/, "Senha não deve conter espaços"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  cnpj: yup
    .string()
    .required("O CNPJ é obrigatório")
    .min(14, "CNPJ Inválido")
    .matches(
      /^[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2}$/g,
      "CNPJ inválido, tente novamente"
    ),
  socialAssist: yup.boolean(),
  culture: yup.boolean(),
  health: yup.boolean(),
  environment: yup.boolean(),
  rightDefense: yup.boolean(),
  housing: yup.boolean(),
  education: yup.boolean(),
  policy: yup
    .boolean()
    .oneOf([true], "Termos de politica e privacidade obrigatórios"),
  type: yup.string(),
});

export const RegisterSchemaCpf = yup.object().shape({
  name: yup
    .string()
    .required("Nome completo obrigatório")
    .matches(/^(?!.*\d).{0,}$/, "Nome não deve conter números")
    .matches(/\w/, "Nome não deve conter símbolos"),
  email: yup
    .string()
    .required("Email é obrigatório")
    .email("Email inválido, tente novamente"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve conter ao menos 8 dígitos")
    .matches(/[a-z]/, "A senha deve conter ao menos uma letra")
    .matches(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter ao menos um número")
    .matches(/\W/, "A senha deve conter ao menos um símbolo")
    .matches(/^(?!.*\s).{0,}$/, "Senha não deve conter espaços"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  cpf: yup
    .string()
    .required("O CPF é obrigatório")
    .matches(
      /^([0-9]{3})\.?([0-9]{3})\.?([0-9]{3})\-?([0-9]{2})$/gm,
      "CPF inválido"
    ),
  policy: yup.boolean().oneOf([true], "Termos obrigatórios"),
  type: yup.string(),
});

export const CreateEventSchema = yup.object().shape({
  name: yup.string().required("O nome do evento é obrigatório"),
  description: yup.string().required("A descrição do evento é obrigatória"),
  maxVoluntarys: yup
    .string()
    .required("A quantidade de voluntários necessária é obrigatória"),
  date: yup.string().required("A data é obrigatória"),
  location: yup.string().required("Localização do evento obrigatória"),
  img: yup.string().required("A url da imagem é obrigatória"),
  category: yup.string().required("A categoria do evento é obrigatória"),
  contact: yup
    .string()
    .required("O contato é obrigatório")
    .matches(
      /^(\+55)?[\s]?\(?(\d{2})?\)?[\s-]?(9?\d{4}[\s-]?\d{4})$/gm,
      "Telefone inválido, deve ser 00-00000-0000"
    ),
});

export const UpdateUserSchema = yup.object().shape({
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(8, "A senha deve conter ao menos 8 dígitos")
    .matches(/[a-z]/, "A senha deve conter ao menos uma letra")
    .matches(/[A-Z]/, "A senha deve conter ao menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter ao menos um número")
    .matches(/\W/, "A senha deve conter ao menos um símbolo")
    .matches(/^(?!.*\s).{0,}$/, "Senha não deve conter espaços"),
  confirmPassword: yup
    .string()
    .required("A confirmação de senha é obrigatória")
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
});
