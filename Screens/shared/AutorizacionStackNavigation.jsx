import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeIndex from '../Home/Index';
import LoginScreen from '../Autorizacion/LoginScreen';
import ForgotScreen from '../Autorizacion/ForgotScreen';
import CompetenciasTiempoReal from '../Home/CompetenciasTiempoReal';
import ViewCompetenciaVelocidad from '../DetalleCompetencia/ViewCompetenciaVelocidad';
import ViewCompetenciaBloque from '../DetalleCompetencia/ViewCompetenciaBloque';
import ViewCompetenciaVias from '../DetalleCompetencia/ViewCompetenciaVias';
import ViewCompetenciaCombinada from '../DetalleCompetencia/ViewCompetenciaCombinada';
const Stack = createNativeStackNavigator();



const AutorizacionStackNavigation = () => {

    return (
        <Stack.Navigator initialRouteName='HomeIndex'>
          <Stack.Screen name="HomeIndex" component={HomeIndex} options={{ headerShown: false}} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true}} />
          <Stack.Screen name="CompetenciasScreen" component={CompetenciasTiempoReal} options={{ headerShown: true}} />
          <Stack.Screen name="ForgotScreen" component={ForgotScreen} options={{ headerShown: true}} />
          <Stack.Screen name="ViewCompetenciaVelocidad" component={ViewCompetenciaVelocidad} options={{ headerShown: false }} />
          <Stack.Screen name="ViewCompetenciaCombinada" component={ViewCompetenciaCombinada} options={{ headerShown: false }} />
          <Stack.Screen name="ViewCompetenciaBloque" component={ViewCompetenciaBloque} options={{ headerShown: false }} />
          <Stack.Screen name="ViewCompetenciaVias" component={ViewCompetenciaVias} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default AutorizacionStackNavigation;