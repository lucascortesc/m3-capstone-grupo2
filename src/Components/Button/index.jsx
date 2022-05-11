import * as S from "./styles";

export const Button = ({
  align = null,
  padding = null,
  gap = null,
  background = null,
  fontSize = null,
  color = null,
  weigth = null,
  children = null,
  ...rest
}) => {
  return (
    <S.Container
      align={align}
      padding={padding}
      gap={gap}
      background={background}
      fontSize={fontSize}
      color={color}
      weigth={weigth}
    >
      <button {...rest}>{children}</button>
    </S.Container>
  );
};
