import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { DARKBACKGROUND } from "../../styles/colors";
import { Button, ButtonTitle } from "./styles"

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
            <ActivityIndicator color={DARKBACKGROUND} size={'small'}/>
            <ButtonTitle>
                {title}
            </ButtonTitle>
        </Button>   
    )
}