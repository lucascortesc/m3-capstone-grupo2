import * as Styled from "./styles"
import { Button } from "../Button"

export const CancelEvent = () => {
    return (
        <Styled.Container>
            <p>Tem certeza que deseja cancelar o evento?</p>
            <Button>Não</Button>
            <Button>Sim</Button>
        </Styled.Container>
    )
}