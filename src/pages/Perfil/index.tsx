import { Button, ButtonTitle, Container, ContainerInput, Input } from "./styles"
import { DARKBACKGROUND } from "../../styles/colors";
import color from "color";
import {FontAwesome5} from '@expo/vector-icons'
import { useState } from "react";
import { Header } from "../../components/Header";
import { DefaultButton } from "../../components/BaseButton";

const PLACEHOLDER_COLOR = color(DARKBACKGROUND).lighten(0.5).hex();
const PLACEHOLDER_COLOR_DARKEN = color(DARKBACKGROUND).lighten(0.25).hex();
export const Perfil: React.FC = () =>{
    const [security, setSecurity] = useState<boolean>(true);
    const [securityConfirm, setSecurityConfirm] = useState<boolean>(true);
    const [currentSecurity, setCurrentSecurity] = useState<boolean>(true)
    const [loading, setLoading] = useState<boolean>(false);
    const changeSecurity =()=> setSecurity(currenty=>!currenty);
    const changeSecurityConfirm =()=> setSecurityConfirm(currenty=>!currenty);
    const changeCurrentSecurity =()=> setCurrentSecurity(currenty=>!currenty);
    const sendForm = async () =>{
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoading(false);
    }
    return(
        <>
            <Header title={'Perfil'}/>
            <Container>
                <ContainerInput>
                    <Input keyboardType={'email-address'} placeholder={'E-mail'} placeholderTextColor={PLACEHOLDER_COLOR} />
                </ContainerInput>
                <ContainerInput>
                    <Input keyboardType={'default'} placeholder={'Senha Atual'} secureTextEntry={currentSecurity} placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                    <FontAwesome5 name={`eye${currentSecurity?'':'-slash'}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeCurrentSecurity}/>
                </ContainerInput>
                <ContainerInput>
                    <Input keyboardType={'default'} placeholder={'Senha'} secureTextEntry={security} placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                    <FontAwesome5 name={`eye${security?'':'-slash'}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecurity}/>
                </ContainerInput>
                <ContainerInput>
                    <Input keyboardType={'default'} placeholder={'Confirme a Senha'} secureTextEntry={securityConfirm} placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                    <FontAwesome5 name={`eye${securityConfirm?'':'-slash'}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecurityConfirm}/>
                </ContainerInput>
                <Button title={'Editar'} loading={loading} onPress={sendForm}/>
            </Container>
        </>
    )
}