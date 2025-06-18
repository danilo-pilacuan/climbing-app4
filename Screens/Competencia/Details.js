import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity,Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useNavigation, useRoute } from '@react-navigation/native'; // Importa useNavigation y useRoute
import api from '../../services/api'; 
import DatePicker from 'react-native-date-picker'
import { ScrollView } from "react-native-gesture-handler";
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const Details = () => {
  const navigation = useNavigation(); // Inicializa la navegación
  const route = useRoute(); // Obtiene los parámetros de la ruta
  const competenciaParam = route.params.competencia; // Obtener el objeto club pasado como parámetro
  

  
  const [competencia, setCompetencia] = useState({
    idCom: competenciaParam.idCom, // Inicializa con el ID de la competencia
    nombreCom: competenciaParam.nombreCom, // Inicializa con el nombre de la competencia
    fechaInicioCom: new Date(competenciaParam.fechaInicioCom) || new Date(), // Inicializa con la fecha de inicio de la competencia
    fechaFinCom: new Date(competenciaParam.fechaFinCom) || new Date(),
    idGen: competenciaParam.idGen,
    idJuez: competenciaParam.idJuez,
    idCatNavigationIdCat: competenciaParam.idCatNavigationIdCat,
    idSede: competenciaParam.idSede,
    idMod: competenciaParam.idMod,
    activoCom: competenciaParam.activoCom,
  });
  const [generos, setGeneros] = useState([
    { id: 1, nombre: 'Masculino' },
    { id: 2, nombre: 'Femenino' },
  ]);
  const [jueces, setJueces] = useState(
  []
);
  const [categorias, setCategorias] = useState(
  []
);
  const [sedes, setSedes] = useState(
  []
);
  const [modalidades, setModalidades] = useState(
    [
    { id: 1, nombre: 'Velocidad' },
    { id: 2, nombre: 'Bloque' },
    { id: 3, nombre: 'Vias' },
    { id: 4, nombre: 'Combinada' },
  ]
);
  const [estados, setEstados] = useState([
    { id: 1, nombre: 'Activo' },
    { id: 2, nombre: 'Inactivo' },
  ]);

  const handleEditar = () => {
    // Lógica para crear la competencia (p. ej., API call)
    console.log('Detalles competencia:', competencia);
    // Navegar a otra pantalla después de crear (opcional)
    // navigation.navigate('Competencias');

    api.put('/api/Competencia/'+competencia.idCom, competencia)
      .then((response) => {
        console.log('Competencia creada:', response.data);
        Alert.alert("Competencias", "Competencia creada con éxito");
        navigation.goBack(); // Regresar a la pantalla anterior
      })
      .catch((error) => {
        console.error('Error al crear competencia:', error);
        Alert.alert('Error', 'No se pudo crear la competencia');
      });

  };

  const handleRegresar = () => {
    navigation.goBack(); // Regresar a la pantalla anterior
  };

  const getSedes = async () => {
      try {
        const response = await api.get(`/api/Sede`);
        console.log("Respuesta de la API:", response.data);
        //setCompetencia(response.data);
        setSedes(response.data);
      } catch (err) {
        console.error(err);
        Alert.alert("Error", "No se pudo obtener la competencia msg2");
      } finally {
        setLoading(false);
      }
    };
  
    const getJueces = async () => {
    try {
      const response = await api.get(`/api/Juez`);
      console.log("Respuesta de la API:", response.data);
      //setCompetencia(response.data);
      setJueces(response.data);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo obtener la competencia msg2");
    } finally {
      setLoading(false);
    }
  };

  const getCategorias = async () => {
    try {
      const response = await api.get(`/api/Categorium`);
      console.log("Respuesta de la API:", response.data);
      //setCompetencia(response.data);
      setCategorias(response.data);
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo obtener la competencia msg2");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      console.log("🤢🤢🤢Competencia a editar:", competencia);
        getSedes();
        getJueces();
        getCategorias();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        
        <Text style={styles.titulo}>DETALLES</Text>
        <View style={styles.formContainer}>
          <Text style={styles.formTitulo}>Competencia</Text>
          <View style={styles.hr} />
          <Text style={styles.formTitulo}>{competencia.nombreCom}</Text>
          <Text style={styles.label}>Fecha de Inicio:</Text>
          <Text style={styles.formTitulo}>{competencia.fechaInicioCom.toDateString()}</Text>
          <Text style={styles.label}>Fecha de Fin:</Text>
          <Text style={styles.formTitulo}>{competencia.fechaFinCom.toDateString()}</Text>
          <Text style={styles.label}>Juez:</Text>
          <Picker
            selectedValue={competencia.idJuez}
            onValueChange={(itemValue) => setCompetencia({ ...competencia, idJuez: itemValue })}
            enabled={false} 
          >
            <Picker.Item label="--Elija un Juez--" value="" />
            {jueces.map((juez) => (
              <Picker.Item key={juez.idJuez} label={juez.nombresJuez+" "+juez.apellidosJuez} value={juez.idJuez}  />
            ))}
          </Picker>
           <Text style={styles.label}>Categoría:</Text>
          <Picker
            selectedValue={competencia.idCatNavigationIdCat}
            onValueChange={(itemValue) => setCompetencia({ ...competencia, idCatNavigationIdCat: itemValue })}
            enabled={false} 
          >
            <Picker.Item label="--Elija una Categoría--" value="" />
            {categorias.map((categoria) => (
              <Picker.Item key={categoria.idCat} label={categoria.nombreCat} value={categoria.idCat} />
            ))}
          </Picker>
          <Text style={styles.label}>Sede:</Text>
          <Picker
            selectedValue={competencia.idSede}
            onValueChange={(itemValue) => setCompetencia({ ...competencia, idSede: itemValue })}
            enabled={false} 
          >
            <Picker.Item label="--Elija una Sede--" value="" />
            {sedes.map((sede) => (
              <Picker.Item key={sede.idSede} label={sede.nombreSede} value={sede.idSede} />
            ))}
          </Picker>
          <Text style={styles.label}>Modalidad:</Text>
          <Picker
            selectedValue={competencia.idMod}
            onValueChange={(itemValue) => setCompetencia({ ...competencia, idMod: itemValue })}
            enabled={false} 
          >
            <Picker.Item label="--Elija una Modalidad--" value="" />
            {modalidades.map((modalidad) => (
              <Picker.Item key={modalidad.id} label={modalidad.nombre} value={modalidad.id} />
            ))}
          </Picker> 

          <View style={styles.botonesContainer}>
            
            <TouchableOpacity style={styles.botonRegresar} onPress={handleRegresar}>
              <Text style={styles.botonTexto}>Regresar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
  },
  formTitulo: {
    fontSize: 18,
    marginBottom: 10,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  botonesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  botonEditar: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  botonRegresar: {
    backgroundColor: '#dc3545',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Details;