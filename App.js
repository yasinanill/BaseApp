import { NavigationContainer,DefaultTheme  } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import AuthStack from './navigations/stackNavigator';
import store from './utils/redux/store';
import { Provider } from 'react-redux';


export default function App() {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fffff0',
      background:'#fdf5e6'
    },
  };
  const theme = useColorScheme();
 
  return (
    
    <Provider store={store}>
      <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
        <AuthStack />
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
