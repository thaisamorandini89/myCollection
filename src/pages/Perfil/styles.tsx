import styled from "styled-components/native";
import color from "color";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import {css} from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px;
`
interface InputProps {
    hasIconRight?: boolean;
}

export const Input = styled.TextInput<InputProps>`
    align-self: stretch;
    flex:1;
    background-color: ${props=>color(props.theme.colors.background).darken(0.25).hex()};
    color: ${props=>props.theme.colors.secondary};
    ${props=>props.hasIconRight&& css`
        margin-right: 20px;
    `}
`

export const ContainerInput = styled.View`
    align-self: stretch;
    background-color: ${props=>color(props.theme.colors.background).darken(0.3).hex()};
    padding: 10px 20px;
    margin: 5px 0;
    border-radius: ${props=>props.theme.measures.radius}px;
    flex-direction: row;
`

export const Button = styled.TouchableOpacity`
    color: ${props=>props.theme.colors.secondary};
    background-color: ${props=>props.theme.colors.primary};
    padding: 10px 20px;
    border-radius: ${props=>props.theme.measures.radius}px;
    margin: 5px 0;
    margin-top: 25px;
    align-items: center;
    justify-content: center;
    align-self: stretch;
`

export const ButtonTitle = styled.Text`
    color: ${props=>props.theme.colors.background};
    font-weight: bold;
`

export const Link = styled.Text`
    color: ${props=>props.theme.colors.primary};
    align-self: flex-end;
    margin-top: 20px;
`