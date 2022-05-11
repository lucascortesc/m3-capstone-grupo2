import styled from "styled-components"

export const Container = styled.div`
display: inline-block;
background: ${props => props.background && props.background};
border-radius: 5px;

button {
    display: flex;
    gap: ${props => props.gap && props.gap};
    font-size: ${props => props.fontSize && props.fontSize};
    color: ${props => props.color && props.color};
    padding: ${props => props.padding && props.padding};
    font-weight: ${props => props.weigth && props.weigth};
    background: none;
    border: none;
    outline: none;
}
`