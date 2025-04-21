import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import DetalleCompetenciaIndex from '../DetalleCompetencia/Index';
import DCCompetenciaVelocidad from '../DetalleCompetencia/DCCompetenciaVelocidad';
import DCCompetenciaBloque from '../DetalleCompetencia/DCCompetenciaBloque';
import DCCompetenciaVias from '../DetalleCompetencia/DCCompetenciaVias';
import DCCompetenciaCombinada from '../DetalleCompetencia/DCCompetenciaCombinada';
import ViewCompetenciaVelocidad from '../DetalleCompetencia/ViewCompetenciaVelocidad';
import ViewCompetenciaBloque from '../DetalleCompetencia/ViewCompetenciaBloque';
import ViewCompetenciaVias from '../DetalleCompetencia/ViewCompetenciaVias';
import ViewCompetenciaCombinada from '../DetalleCompetencia/ViewCompetenciaCombinada';
import DCAgregarDeportistas from '../DetalleCompetencia/DCAgregarDeportistas';
import DCEditarRegistroVelocidad from '../DetalleCompetencia/DCEditarRegistroVelocidad';
import DCEditarRegistroBloque from '../DetalleCompetencia/DCEditarRegistroBloque';
import DCEditarRegistroViasComb from '../DetalleCompetencia/DCEditarRegistroViasComb';
import DCEditarRegistroBloqueComb from '../DetalleCompetencia/DCEditarRegistroBloqueComb';
import DCEditarRegistroVias from '../DetalleCompetencia/DCEditarRegistroVias';
import DetalleCompetenciaCreate from '../DetalleCompetencia/Create';
import DetalleCompetenciaDelete from '../DetalleCompetencia/Delete';
import DetalleCompetenciaDetails from '../DetalleCompetencia/Details';
import DetalleCompetenciaEdit from '../DetalleCompetencia/Edit';
import DetalleCompetenciaResultados from '../DetalleCompetencia/Resultados';
import DetalleCompetenciaMostrarPDFNuevaPagina from '../DetalleCompetencia/MostrarPDFNuevaPagina';
import DetalleCompetenciaMostrarPDFNuevaPaginaFinal from '../DetalleCompetencia/MostrarPDFNuevaPaginaFinal';
import VistaPDFListaResultados from '../DetalleCompetencia/VistaPDFListaResultados';
import VistaPDFListaResultadosFinal from '../DetalleCompetencia/VistaPDFListaResultadosFinal';

const Stack = createNativeStackNavigator();

const DetalleCompetenciaStackNavigation = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="DetalleCompetenciaIndex" component={DetalleCompetenciaIndex} options={{ headerShown: false }} />
            <Stack.Screen name="DCCompetenciaVelocidad" component={DCCompetenciaVelocidad} options={{ headerShown: false }} />
            <Stack.Screen name="DCCompetenciaCombinada" component={DCCompetenciaCombinada} options={{ headerShown: false }} />
            <Stack.Screen name="DCCompetenciaBloque" component={DCCompetenciaBloque} options={{ headerShown: false }} />
            <Stack.Screen name="DCCompetenciaVias" component={DCCompetenciaVias} options={{ headerShown: false }} />
            <Stack.Screen name="ViewCompetenciaVelocidad" component={ViewCompetenciaVelocidad} options={{ headerShown: false }} />
            <Stack.Screen name="ViewCompetenciaCombinada" component={ViewCompetenciaCombinada} options={{ headerShown: false }} />
            <Stack.Screen name="ViewCompetenciaBloque" component={ViewCompetenciaBloque} options={{ headerShown: false }} />
            <Stack.Screen name="ViewCompetenciaVias" component={ViewCompetenciaVias} options={{ headerShown: false }} />
            <Stack.Screen name="DCAgregarDeportistas" component={DCAgregarDeportistas} options={{ headerShown: false }} />
            <Stack.Screen name="DCEditarRegistroVelocidad" component={DCEditarRegistroVelocidad} options={{ headerShown: false }} />
            <Stack.Screen name="DCEditarRegistroVias" component={DCEditarRegistroVias} options={{ headerShown: false }} />
            <Stack.Screen name="DCEditarRegistroBloque" component={DCEditarRegistroBloque} options={{ headerShown: false }} />
            <Stack.Screen name="DCEditarRegistroViasComb" component={DCEditarRegistroViasComb} options={{ headerShown: false }} />
            <Stack.Screen name="DCEditarRegistroBloqueComb" component={DCEditarRegistroBloqueComb} options={{ headerShown: false }} />
            <Stack.Screen name="DetalleCompetenciaCreate" component={DetalleCompetenciaCreate} options={{ headerShown: false }} />
            <Stack.Screen name="DetalleCompetenciaDelete" component={DetalleCompetenciaDelete} options={{ headerShown: false }} />
            <Stack.Screen name="DetalleCompetenciaDetails" component={DetalleCompetenciaDetails} options={{ headerShown: false }} />
            <Stack.Screen name="DetalleCompetenciaEdit" component={DetalleCompetenciaEdit} options={{ headerShown: false }} />
            <Stack.Screen name="DetalleCompetenciaResultados" component={DetalleCompetenciaResultados} options={{ headerShown: false }} />
            <Stack.Screen name="DetalleCompetenciaMostrarPDFNuevaPagina" component={DetalleCompetenciaMostrarPDFNuevaPagina} options={{ headerShown: false }} />
            <Stack.Screen name="DetalleCompetenciaMostrarPDFNuevaPaginaFinal" component={DetalleCompetenciaMostrarPDFNuevaPaginaFinal} options={{ headerShown: false }} />
            <Stack.Screen name="VistaPDFListaResultados" component={VistaPDFListaResultados} options={{ headerShown: false }} />
            <Stack.Screen name="VistaPDFListaResultadosFinal" component={VistaPDFListaResultadosFinal} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default DetalleCompetenciaStackNavigation;