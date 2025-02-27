import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';

const DCEditarRegistroResultado = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { idCom, idRegistroResultado } = route.params;
  const [loading, setLoading] = useState(true);

  const [registroResultado, setRegistroResultado] = useState({});

  const fetchRegistroResultado = async () => {
    try {
      const response = await api.get(`/api/RegistroResultado/${idRegistroResultado}`);
      setRegistroResultado(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo cargar el registro de resultado');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistroResultado();
  }, []);

  const handleInputChange = (key, value) => {
    setRegistroResultado({ ...registroResultado, [key]: value });
  };

  
  const handleGuardarCambios = async () => {
    try {
     if(registroResultado.competencia && registroResultado.competencia.idMod==1){
        if(registroResultado.tipoRegistro==1){
          if(registroResultado.tiempo1>0 && registroResultado.tiempo2>0){
            registroResultado.registroCompleto=true;
        }
        }
        else
        {
          if(registroResultado.tiempo1>0){
            registroResultado.registroCompleto=true;
          }
        }
     }
      await api.put(`/api/RegistroResultado/${idRegistroResultado}`, registroResultado);
      Alert.alert('Éxito', 'Registro actualizado correctamente');
      navigation.goBack();
      navigation.navigate('DCCompetenciaVelocidad', { idCom: idCom, regUpdated: true });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo actualizar el registro');
    }
  };

  if (loading) return <Text style={styles.loadingText}>Cargando...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Registro de Resultado 
      Competión
      { registroResultado.competencia &&  registroResultado.competencia.idMod==1?" Velocidad":registroResultado.competencia.idMod==2?" Bloque":registroResultado.competencia.idMod==3?" Vias":" Combinada"}

      </Text>
      
      {/* <Text style={styles.label}>ID Deportista</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={registroResultado.idDep?.toString() || ''}
        onChangeText={(value) => handleInputChange('idDep', value)}
      /> */}

      {registroResultado.competencia.idMod==1 &&
      <>
        <Text style={styles.label}>Tiempo 1</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={registroResultado.tiempo1?.toString() || ''}
        onChangeText={(value) => handleInputChange('tiempo1', value)}
      />

      {
        registroResultado.tipoRegistro==1 &&
        <>
        <Text style={styles.label}>Tiempo 2</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={registroResultado.tiempo2?.toString() || ''}
        onChangeText={(value) => handleInputChange('tiempo2', value)}
      />
        </>
      }
      
      </>}

      {registroResultado.competencia.idMod==2 &&
        <>
        <Text style={styles.label}>Intento 1</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={registroResultado.intento1?.toString() || ''}
        onChangeText={(value) => handleInputChange('intento1', value)}
      />

      <Text style={styles.label}>Completado 1</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={registroResultado.completado1 ? '1' : '0'}
        onChangeText={(value) => handleInputChange('completado1', value === '1')}
      />

      <Text style={styles.label}>Puesto</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={registroResultado.puesto?.toString() || ''}
        onChangeText={(value) => handleInputChange('puesto', value)}
      />
      </>
      }
      <TouchableOpacity style={styles.saveButton} onPress={handleGuardarCambios}>
        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  saveButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default DCEditarRegistroResultado;
