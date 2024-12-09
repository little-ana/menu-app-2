import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomePage() {
    const [value1, setValue1] = useState();
    const [value2, setValue2] = useState();
    const [result, setResult] = useState();
    
    const somar = () => {
      setResult(parseFloat(value1) + parseFloat(value2));
    }

    return (
        <SafeAreaView>
            <Text style={{ fontSize: 20, margin: 10 }}>Soma de valores!</Text>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Valor 1'
                    value={value1}
                    onChangeText={(value) => setValue1(value)}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Valor 2'
                    value={value2}
                    onChangeText={(value) => setValue2(value)}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Somar'
                    onPress={() => somar()}
                />
            </View>
            <Text style={{ fontSize: 16, margin: 10 }}>Resultado:</Text>
            <Text style={{ fontSize: 16, margin: 10 }}>{result}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: 'lightgrey',
        borderBlockColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
        padding: 5,
    },
    button: {
        margin: 10,
    },
});

