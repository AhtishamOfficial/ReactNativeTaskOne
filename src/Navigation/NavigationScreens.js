import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from '../Screens/ScreenA/ScreenA';
import ScreenB from '../Screens/ScreenB/ScreenB';


const Stack = createStackNavigator();

const NavigationScreens = () => {
  return (
    <Stack.Navigator  initialRouteName={'ScreenOne'} screenOptions ={{headerShown:false}}>
      <Stack.Screen name="ScreenOne" component={ScreenA} />
      <Stack.Screen name="ScreenTwo" component={ScreenB} />

    </Stack.Navigator>
  )
}

export default NavigationScreens