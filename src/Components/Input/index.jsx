import * as Styled from "./styles";

const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Styled.Container>
      <div>
        {label} {!!error && <span className="error">- {error}</span>}
      </div>
      <input {...register(name)} {...rest} />
    </Styled.Container>
  );
};

export default Input;