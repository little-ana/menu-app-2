import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function HomePage() {
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 20, margin: 10 }}>Soma de valores!</Text>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Valor 1'
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Valor 2'
                />
            </View>
            <View style={styles.button}>
                <Button 
                title='Somar'
                />
            </View>
            <Text style={{ fontSize: 16, margin: 10 }}>Resultado:</Text>
            <Text style={{ fontSize: 16, margin: 10 }}>Resultado:</Text>
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

