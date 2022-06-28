import React, { JSXElementConstructor, ReactElement } from "react";
import {BKG} from  "./styles";

interface Props {
    children: React.ReactNode;
}

export const BaseContainer: React.FC<Props> = ({ children }) => {
    return (
        <BKG>  
            {children}
        </BKG>
    )
}