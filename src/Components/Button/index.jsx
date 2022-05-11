import * as S from "./styles";

export const Button = ({
  align = null,
  padding = null,
  gap = null,
  background = null,
  fontSize = null,
  color = null,
  weigth = null,
  onClickFunction = null,
  children = null,
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
      <button onClick={onClickFunction}>{children}</button>
    </S.Container>
  );
};
