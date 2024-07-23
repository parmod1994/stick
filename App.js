import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Home from './Src/Screens/Home/Home';
import Profile from './Src/Screens/Profile/Profile';
import Routes from './Src/Navigation/Routes';
import { store } from './Src/Redux/Store'
import { Provider } from 'react-redux'



export default function App() {
  return (
    <Provider store={store}>
    <Routes />
    </Provider>
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
