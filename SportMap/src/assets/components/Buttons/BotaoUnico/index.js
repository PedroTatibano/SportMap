import React from "react";
import style from "./style";
import { TouchableOpacity } from "react-native";

import BotaoRadio from "../BotaoRadio";
import Label from "../../Label";

export default function BotaoUnico({
    text,
    type,
    color
}) {
    return(
        <TouchableOpacity style={style.botao}>
            <BotaoRadio/>
            <Label text={text} type={type} color={color}/>
        </TouchableOpacity>
    )
};