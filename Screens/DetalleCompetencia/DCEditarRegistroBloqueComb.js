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
            

     registroResultado.registroCompleto=true;

      await api.put(`/api/RegistroResultado/${idRegistroResultado}`, registroResultado);
      Alert.alert('Éxito', 'Registro actualizado correctamente');
      navigation.goBack();
      navigation.navigate('DCCompetenciaCombinada', { idCom: idCom, regUpdated: true });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo actualizar el registro');
    }
  };

  if (loading) return <Text style={styles.loadingText}>Cargando...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Editar Registro de Resultado Bloque Combinada
      </Text>
  
      
        <View style={styles.tableContainer}>
          {/* Encabezado de la tabla */}
          <View style={[styles.row, styles.headerRow]}>
            <Text style={styles.headerCell}></Text>
            {[1, 2, 3, 4].map((num) => (
              <Text key={num} style={styles.headerCell}>{`Ruta ${num}`}</Text>
            ))}
          </View>
  
          {/* Fila de TopB */}
          <View style={styles.row}>
            <Text style={styles.labelCell}>Top</Text>
            {[1, 2, 3, 4].map((num) => (
              <TextInput
                key={`topB${num}`}
                style={styles.inputCell}
                keyboardType="numeric"
                value={registroResultado[`topB${num}`]?.toString() || ''}
                onChangeText={(value) => handleInputChange(`topB${num}`, value)}
              />
            ))}
          </View>
  
          {/* Fila de ZonaB */}
          <View style={styles.row}>
            <Text style={styles.labelCell}>Zona Alta</Text>
            {[1, 2, 3, 4].map((num) => (
              <TextInput
                key={`zonaB${num}`}
                style={styles.inputCell}
                keyboardType="numeric"
                value={registroResultado[`zonaB${num}`]?.toString() || ''}
                onChangeText={(value) => handleInputChange(`zonaB${num}`, value)}
              />
            ))}
          </View>
          
          <View style={styles.row}>
            <Text style={styles.labelCell}>Zona Baja</Text>
            {[1, 2, 3, 4].map((num) => (
              <TextInput
                key={`zonaA${num}`}
                style={styles.inputCell}
                keyboardType="numeric"
                value={registroResultado[`zonaA${num}`]?.toString() || ''}
                onChangeText={(value) => handleInputChange(`zonaA${num}`, value)}
              />
            ))}
          </View>
        </View>
      
  
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

  // Estilos de la tabla
  tableContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRow: {
    backgroundColor: '#ddd',
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  labelCell: {
    width: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 8,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  inputCell: {
    flex: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 5,
  },
});

export default DCEditarRegistroResultado;
