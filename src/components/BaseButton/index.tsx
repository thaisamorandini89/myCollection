import React from "react";
import { TouchableOpacityProps } from "react-native";
import { DARKBACKGROUND } from "../../styles/colors";
import { Button, ButtonTitle, LoadingIndicator } from "./styles"

interface DefaultButton extends  TouchableOpacityProps{
    title: string;
    loading?:boolean;
}

export const DefaultButton: React.FC<DefaultButton> = ({
        title,
        loading = false,
        ...props
    }) =>{
    return(
        <Button {...props}>
            {loading&&(<LoadingIndicator color={DARKBACKGROUND} size={'small'}/>)} 
            <ButtonTitle>
                {title}
            </ButtonTitle>
        </Button>   
    )
}