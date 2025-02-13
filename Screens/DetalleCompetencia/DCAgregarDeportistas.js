import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation
import api from '../../services/api'; // Asegúrate de importar tu instancia de API
import { useRoute } from '@react-navigation/native';

const DCAgregarDeportistas = () => {
  const route = useRoute();
  const { idCom } = route.params;
  const navigation = useNavigation(); // Inicializa useNavigation
  const [competencia, setCompetencia] = useState();
  const [deportistasDisponibles, setDeportistasDisponibles] = useState();
  const [deportistasAgregados, setDeportistasAgregados] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');


const DATA = [
    { id: "1", title: "Opción 1" },
    { id: "2", title: "Opción 2" },
    { id: "3", title: "Opción 3" },
    { id: "4", title: "Opción 4" },
    { id: "5", title: "Opción 5" },
    { id: "6", title: "Opción 6" },
    { id: "7", title: "Opción 7" },
    { id: "8", title: "Opción 8" },
    { id: "9", title: "Opción 9" },
    { id: "10", title: "Opción 10" },
  ];
const DATA2 = [
    { id: "1", title: "Opción 1" },
    { id: "2", title: "Opción 2" },
    { id: "3", title: "Opción 3" },
    { id: "4", title: "Opción 4" },
    { id: "5", title: "Opción 5" },
    { id: "6", title: "Opción 6" },
    { id: "7", title: "Opción 7" },
    { id: "8", title: "Opción 8" },
    { id: "9", title: "Opción 9" },
    { id: "10", title: "Opción 10" },
  ];

  useEffect(() => {
    // const fetchcompetencia = async () => {
    //   try {
    //     const response = await api.get('/api/Competencia'); // Cambia según tu API
    //     console.log('Respuesta de la API:', response.data); // Imprime la respuesta
    //     setcompetencia(response.data);        
    //   } catch (err) {
    //     console.error(err);
    //     setError('Error al cargar las competencia');
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    const getCompetencia= async (id) => {
      try {
        const response = await api.get(`/api/Competencia/${id}`);
        console.log('Respuesta de la API:', response.data);
        console.log('Params: ', route.params);
        console.log('idCom: ', idCom);
        setCompetencia(response.data);
      } catch (err) {
        console.error(err);
        Alert.alert('Error', 'No se pudo obtener la competencia');
      }
      
    }
    
    const getDeportistasDisponibles= async (id) => {
      try {
        const response = await api.get('/api/Deportista');
        console.log('Respuesta de la API deppp:', response.data);
        console.log('Params: ', route.params);
        console.log('idCom: ', idCom);
        setDeportistasDisponibles(response.data);
        console.log('Deportistas Disponibles******:', deportistasDisponibles);
      } catch (err) {
        console.error(err);
        Alert.alert('Error', 'No se pudo obtener la competencia');
      }
      finally{
        setLoading(false);
      }
    }
    
    getCompetencia(idCom);
    getDeportistasDisponibles();
    
    console.log('Competencia: ', competencia);
    console.log('Competencia: ', competencia);

    //fetchcompetencia();

  }, []);

  const handleSearch = () => {
    const filtered = competencia.filter(competencia =>
      competencia.nombreCom.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setcompetencia(filtered);
  };

  const handleCreateCompetencia = () => {
    navigation.navigate('CrearCompetencia'); // Navega a la pantalla de creación
  };

  const handleEditCompetencia = (id) => {
    navigation.navigate('EditarCompetencia', { idCom: id }); // Navega a la pantalla de edición
  };

  const handleDetailsCompetencia = (id) => {
    navigation.navigate('DetallesCompetencia', { idCom: id }); // Navega a la pantalla de detalles
  };

  const handleAgregarDeportistas = () => {
    navigation.navigate('DCAgregarDeportistas', { idCom: idCom }); 
  }

  const handleDeleteCompetencia = async (id) => {
    try {
      await api.delete(`/api/Competencia/${id}`);
      setcompetencia(competencia.filter(competencia => competencia.IdCom !== id));
      Alert.alert('Éxito', 'Competencia eliminada con éxito');
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'No se pudo eliminar la competencia');
    }
  };

  const handleAgregarDeportista = (deportista) => {
    setDeportistasDisponibles((prev) => prev.filter(d => d.idDep !== deportista.idDep));
    setDeportistasAgregados((prev) => [...prev, deportista]);
};

const handleQuitarDeportista = (deportista) => {
    setDeportistasAgregados((prev) => prev.filter(d => d.idDep !== deportista.idDep));
    setDeportistasDisponibles((prev) => [...prev, deportista]);
};

const handleFinishSelection = async () => {
  const apiData = deportistasAgregados.map(d => ({ idDep: d.idDep,idCom: idCom }));
  console.log("apiData???????: ", apiData);

  api.post("/api/CompetenciaDeportista/bulk",apiData)
  .then(response=>{
    navigation.goBack();
    navigation.navigate('DCDetalleCompetencia', { idCom: idCom, depAdded:true }); 

  })
  .catch(error=>{
    console.log("Error: "+error)
  });

}


  if (loading) {
    return <Text style={styles.loadingText}>Cargando...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!competencia || competencia.length === 0) {
    return <Text style={styles.emptyText}>No hay competencia disponibles.</Text>;
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  
  const ItemDeportistaDisp = ({ item }) => (
    <View style={styles.depDispItem}>
      <View style={styles.depDispContainer}>
        <View style={styles.depDispDescripcion}>
          <Text style={styles.label}>Cédula: {item.cedulaDep}</Text>
          <Text style={styles.label}>Nombres: {item.nombresDep}</Text>
          <Text style={styles.label}>Apellidos: {item.apellidosDep}</Text>
        </View>
        <View style={styles.depBtn}>
          <TouchableOpacity style={styles.button} onPress={() => handleAgregarDeportista(item)}>
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const ItemDeportistaAgregado = ({ item }) => (
    <View style={styles.depDispItem}>
      <View style={styles.depDispContainer}>
        <View style={styles.depDispDescripcion}>
          <Text style={styles.label}>Cédula: {item.cedulaDep}</Text>
          <Text style={styles.label}>Nombres: {item.nombresDep}</Text>
          <Text style={styles.label}>Apellidos: {item.apellidosDep}</Text>
        </View>
        <View style={styles.depBtn}>
          <TouchableOpacity style={[styles.button,styles.deleteButton]} onPress={() => handleQuitarDeportista(item)}>
            <Text style={styles.buttonText}>Quitar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Deportista</Text>

    <View style={styles.containerDeportistas}>
    <Text style={styles.label}>Deportistas Disponibles:</Text>
    {
        deportistasDisponibles && <FlatList
        data={deportistasDisponibles}
        keyExtractor={(item) => item.idDep}
        renderItem={({ item }) => <ItemDeportistaDisp item={item} />}
      />
    }
    </View>

     {/* Lista de Deportistas Agregados */}
     <View style={styles.containerDeportistasAdd}>
        <Text style={styles.label}>Deportistas Agregados: {deportistasAgregados.length}</Text>
        <FlatList
    data={deportistasAgregados}
    keyExtractor={(item) => item.idDep}
    renderItem={({ item }) => <ItemDeportistaAgregado item={item} handleQuitarDeportista={handleQuitarDeportista} />}
/>
      </View>
    <TouchableOpacity style={styles.searchButton} onPress={handleFinishSelection}>
          <Text style={styles.searchButtonText}>Terminar Selección</Text>
        </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  depHeaderContainer:{
    width:'100%',
    flexDirection:'row',
    alignContent:'space-between',
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
   errorText: {
       textAlign: 'center',
       color: 'red',
       fontSize: 18,
       marginTop: 20,
   },
   emptyText: {
       textAlign: 'center',
       fontSize: 18,
       marginTop: 20,
   },
   competencia:{
       padding :15 ,
       backgroundColor:'#ffffff' ,
       borderRadius :10 ,
       elevation :3 ,
       marginBottom :15 ,
   },
   label:{
       fontWeight:'bold' ,
      //  marginBottom :5 ,
   },
   value:{
       marginBottom :10 ,
   },
   buttonContainer:{
       flexDirection:'row' ,
       justifyContent:'space-between' ,
       marginTop :10 ,
   },
   button:{
       backgroundColor:'#007bff' ,
       paddingVertical :10 ,
       paddingHorizontal :15 ,
       borderRadius :5 ,
       elevation :2 ,
       flexGrow :1 ,
       marginHorizontal :5 ,
   },
   buttonText:{
       color:'#fff' ,
       textAlign:'center' ,
       fontWeight:'bold' ,
   },
   deleteButton:{
    backgroundColor:'#dc3545' ,
    },
   warningBtn: {
    backgroundColor: '#ffc107'
  },
   input:{
       height :40 ,
       borderColor :'gray' ,
       borderWidth :1 ,
       //marginBottom :10 ,
       paddingHorizontal :10 ,
   },
   searchContainer:{
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       marginBottom:10,
   },
   searchButton:{
       backgroundColor:'#28a745',
       paddingVertical:10,
       paddingHorizontal:15,
       borderRadius:5,
   },
   searchButtonText:{
       color:'#fff',
       fontWeight:'bold',
   },
   createButton:{
       backgroundColor:'#007bff' ,
       paddingVertical :10 ,
       borderRadius :5 ,
   },
   createButtonText:{
       color:'#fff' ,
       textAlign:'center' ,
       fontWeight:'bold' ,
   },
    containerDeportistas:{
        height: "44%",
    },
    containerDeportistasAdd:{
        height: "44%",
    },
    depDispItem:{
        flexDirection:'row',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 2,
    },
    depDispContainer:{
        flexDirection:'row',
        
    },
    depDispDescripcion:{
        flexDirection:'column',
        width:'70%',
    },
    depBtn:{
        height: "70%",
    },
});

export default DCAgregarDeportistas;
