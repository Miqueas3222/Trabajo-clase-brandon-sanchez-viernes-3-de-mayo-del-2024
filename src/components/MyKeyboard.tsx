import * as React from 'react';
import Button from './Button';
import { View, Text } from 'react-native';
import { styles } from '../styles/GlobalStyle';
import { myColors } from '../styles/Colors';


export default function MyKeyboard() {
    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [operation, setOperation] = React.useState('');
    const [result, setResult] = React.useState<Number | null>(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttonValue)
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const getResult = () => {
        switch (operation) {

            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;

            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;

            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;

            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;

            default:
                clear();
                setResult(0)
                break;
        }

    };



    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={(result.valueOf() < 99999 ? [styles.screenFirstNumber, { color: myColors.result }] : [styles.screenFirstNumber, { fontSize: 50, color: myColors.result }])} > {result?.toString()} </Text>;
        }
        if (firstNumber && firstNumber.length < 6) {
            return <Text style={styles.screenFirstNumber}> {firstNumber} </Text>;
        }

        if (firstNumber === "") {

            return <Text style={styles.screenFirstNumber} > {"0"} </Text>;
        }

        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return (
                <Text style={[styles.screenFirstNumber, { fontSize: 70 }]}> {firstNumber}</Text>
            )
        }

        if (firstNumber.length > 7) {
            return (
                <Text style={[styles.screenFirstNumber, { fontSize: 50 }]}> {firstNumber}</Text>
            )
        }
    }



    return (
        <View style={styles.viewBottom} >

            <View

                style={{
                    height:120,
                    width: "90%",
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                }}>
 
 <Text style={styles.screenFirstNumber}>
    {secondNumber}
    <Text style={{ color: "purple", fontSize: 50, fontWeight: '500'}}>{operation}</Text>
 </Text>
 {firstNumberDisplay()}
                
            </View>

            <View style={styles.row}>
                <Button title="C" isGray onPress={clear} />
                <Button title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Button title="%" isGray onPress={() => handleOperationPress("%")} />
                <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />


            </View>

            <View style={styles.row}>

                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="x" isBlue onPress={() => handleOperationPress("*")} />

            </View>

            <View style={styles.row}>

                <Button title="4" onPress={() => handleNumberPress("4")} />
                <Button title="5" onPress={() => handleNumberPress("5")} />
                <Button title="6" onPress={() => handleNumberPress("6")} />
                <Button title="-" isBlue onPress={() => handleOperationPress("-")} />

            </View>

            <View style={styles.row}>

                <Button title="1" onPress={() => handleNumberPress("1")} />
                <Button title="2" onPress={() => handleNumberPress("2")} />
                <Button title="3" onPress={() => handleNumberPress("3")} />
                <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>

            <View style={styles.row}>

                <Button title="." onPress={() => handleNumberPress(".")} />
                <Button title="0" onPress={() => handleNumberPress("0")} />
                <Button title="⌫" onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Button title="=" isBlue onPress={() => getResult()} />


            </View>

        </View>

    )
}
