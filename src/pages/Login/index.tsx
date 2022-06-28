import { Button, Container, ContainerInput, ContainerSwitch, Input, LabelSwitch, Link, Switch, Title, TitleBold } from "./styles"
import { DARKBACKGROUND, PRIMARY } from "../../styles/colors";
import color from "color";
import {FontAwesome5} from '@expo/vector-icons'
import { useState } from "react";

const PLACEHOLDER_COLOR = color(DARKBACKGROUND).lighten(0.5).hex();
const PLACEHOLDER_COLOR_DARKEN = color(DARKBACKGROUND).lighten(0.25).hex();
export const Login: React.FC = () =>{
    const [security, setSecurity] = useState<boolean>(true);
    const [saveLogin, setSaveLogin] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const changeSecurity =()=> setSecurity(currenty=>!currenty);
    const changeSaveLogin =()=> setSaveLogin(currenty=>!currenty);
    const sendForm = async () =>{
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoading(false);
    }
    return(
        <Container>
            <Title><TitleBold>My</TitleBold>Collection</Title>
            <ContainerInput>
                <Input keyboardType={'email-address'} placeholder={'E-mail'} placeholderTextColor={PLACEHOLDER_COLOR} />
            </ContainerInput>
            <ContainerInput>
                <Input keyboardType={'default'} placeholder={'Senha'} secureTextEntry={security} placeholderTextColor={PLACEHOLDER_COLOR} hasIconRight/>
                <FontAwesome5 name={`eye${security?'':'-slash'}`} size={26} color={PLACEHOLDER_COLOR} onPress={changeSecurity}/>
            </ContainerInput>
            <Button title={'Entrar'} loading={loading} onPress={sendForm}/>
            <ContainerSwitch>
                <Switch 
                    onChange={changeSaveLogin} 
                    value={saveLogin}
                    thumbColor={PLACEHOLDER_COLOR}
                    trackColor={{true: PRIMARY, false: PLACEHOLDER_COLOR_DARKEN}}
                    thumbTintColor={PRIMARY}
                />
                <LabelSwitch>PERMANECER LOGADO</LabelSwitch>
            </ContainerSwitch>
            <Link onPress={()=>{}}>cadastrar</Link>
        </Container>
    )
}