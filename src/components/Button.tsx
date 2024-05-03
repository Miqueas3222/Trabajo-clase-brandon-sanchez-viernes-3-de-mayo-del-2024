import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { styles } from "../styles/GlobalStyle";


interface ButtonProps {

    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isBlue, isGray }: ButtonProps) {

    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={
                isBlue
                    ? styles.btnBlue
                    : isGray
                        ? styles.btnGray
                        : theme === 'light'
                            ? styles.btnLight
                            : styles.btnDark
            }

            onPress={onPress}>
            <Text
                style={
                    isBlue || isGray
                        ? styles.smallTextLight
                        : theme === "dark"
                            ? styles.smallTextLight
                            : styles.smallTextDark
                }
            >
                {title}
            </Text>

        </TouchableOpacity>
    )
}