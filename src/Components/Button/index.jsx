import {Container} from "./styles";

export const Button = ({
  align = null,
  padding = null,
  gap = null,
  backgroundColor = null,
  fontSize = null,
  color = null,
  weigth = null,
  children = null,
  ...rest
}) => {
  return (
    <Container
      align={align}
      padding={padding}
      gap={gap}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      color={color}
      weigth={weigth}
      {...rest}
    >
      {children}
    </Container>
  );
};
