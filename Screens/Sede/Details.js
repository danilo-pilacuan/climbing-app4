import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importa useNavigation y useRoute
import api from '../../services/api'; // Asegúrate de importar tu API

const Details = () => {
  const navigation = useNavigation(); // Inicializa la navegación
    const route = useRoute(); // Obtiene los parámetros de la ruta
  const sede = route.params.sede; // Obtener el objeto sede pasado como parámetro
  const [listaCompetencias, setListaCompetencias] = useState([]);

  useEffect(() => {
      loadCompetencias(); // Cargar los competencias al montar el componente
      console.log('Sede recibido:', sede); 
    }, []);
  
    // Función para cargar los competencias del sede
    const loadCompetencias = async () => {
      try {
        const response = await api.get(`/api/Competencia/sede/${sede.idSede}`); // Usar el endpoint correcto
        console.log('Datos de competencias:', response.data);
        setListaCompetencias(response.data);
      } catch (error) {
        console.error('Error cargando competencias:', error.response ? error.response.data : error.message);
        Alert.alert('Error', 'No se pudieron cargar los competencias');
      }
    };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>DETALLES</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nombre de Sede:</Text>
        <Text style={styles.value}>{sede.nombreSede}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <ScrollView>
                {listaCompetencias.length > 0 ? (
                  listaCompetencias.map((competencia) => (
                    <View key={competencia.idCom} style={styles.competenciasContainer}>
                      <Text style={styles.valor}>{competencia.nombresDep}</Text>
                    </View>
                  ))
                ) : (
                  <Text style={styles.valor}>No hay competencias registrados en este sede.</Text>
                )}
              </ScrollView>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Regresar</Text>
        </TouchableOpacity>
      </View> */}
      <Text style={styles.titulo}>DETALLES SEDE</Text>
            <Text style={styles.label}>Nombre de Sede</Text>
            <Text style={styles.valor}>{sede.nombreSede || 'No disponible'}</Text>
      
            <Text style={styles.label}>Competencias:</Text>
            <ScrollView>
              {listaCompetencias.length > 0 ? (
                listaCompetencias.map((competencia) => (
                  <View key={competencia.idCom} style={styles.competenciaContainer}>
                    <Text style={styles.valor}>{competencia.nombreCom}</Text>
                  </View>
                ))
              ) : (
                <Text style={styles.valor}>No hay competencias registrados en este sede.</Text>
              )}
            </ScrollView>
      
            <TouchableOpacity style={styles.botonRegresar} onPress={() => navigation.goBack()}>
              <Text style={styles.textoBotonRegresar}>Regresar</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
   },
   titulo: {
     fontSize: 24,
     fontWeight: 'bold',
     marginBottom: 10,
   },
   label: {
     fontSize: 16,
     fontWeight: 'bold',
     marginBottom: 5,
   },
   valor: {
     fontSize: 16,
     marginBottom: 15,
   },
   deportistaContainer: {
     paddingVertical: 5,
     borderBottomWidth: 1,
     borderBottomColor: '#ccc',
   },
   botonRegresar: {
     backgroundColor: '#dc3545',
     padding: 10,
     borderRadius: 5,
   },
   textoBotonRegresar: {
     fontSize:16 ,
     color:'#fff' ,
   },
});

export default Details;