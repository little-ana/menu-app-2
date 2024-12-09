import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Button, Image } from 'react-native';

export default function DuplicarPage() {
  const [contador, setContador] = useState(1);

  return (
    <SafeAreaView>
      <Button
        title="Duplicar"
        onPress={() => setContador(contador * 2)}
      />

      <View>
        {Array.from({ length: contador }).map((_, index) => (
          <Image
            key={index}
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
