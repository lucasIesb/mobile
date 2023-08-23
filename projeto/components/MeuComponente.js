
import {  Text } from "react-native"

export default function MeuComponente(props) {
    const {min , max} = props;
        console.warn(props);

        return(
            <Text>{props.min}</Text>
        )

}

