import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './pages/HomePage'
import SomarPage from './pages/SomarPage'
import DuplicarPage from './pages/DuplicarPage';
import CalculadoraPage from './pages/CalculadoraPage';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Somar" component={SomarPage} />
      <Drawer.Screen name="Calculadora" component={CalculadoraPage} />
      <Drawer.Screen name="Duplicar" component={DuplicarPage} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
