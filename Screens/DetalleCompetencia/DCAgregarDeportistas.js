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
  const [todosDeportistas, setTodosDeportistas] = useState([]); // Lista completa original

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(''); //FIXME: Implementar busqueda de deportista

 const getDeportistasDisponibles= async (id) => {
      try {
        const response = await api.get('/api/Deportista');
        console.log('Respuesta de la API deppp:', response.data);
        console.log('Params: ', route.params);
        console.log('idCom: ', idCom);
        setTodosDeportistas(response.data); // Guarda la lista completa
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
    
   
    
    getCompetencia(idCom);
    getDeportistasDisponibles();
    
    console.log('Competencia: ', competencia);
    console.log('Competencia: ', competencia);

    //fetchcompetencia();

  }, []);



  const handleAgregarDeportista = (deportista) => {
    setDeportistasDisponibles((prev) => prev.filter(d => d.idDep !== deportista.idDep));
    setDeportistasAgregados((prev) => [...prev, deportista]);
};

const handleQuitarDeportista = (deportista) => {
    setDeportistasAgregados((prev) => prev.filter(d => d.idDep !== deportista.idDep));
    setDeportistasDisponibles((prev) => [...prev, deportista]);
};

 const handleSearch = (text) => {
    setSearchQuery(text); // Actualiza el estado de searchQuery
    
    if (!text.trim()) {
      setDeportistasDisponibles(todosDeportistas);   // Si el campo está vacío, recarga todos los deportistas
      return;
    }
    
    // Filtrar deportistas según la búsqueda
    const filtered = todosDeportistas.filter(deportista => {
      const nombres = deportista.nombresDep ? deportista.nombresDep.toLowerCase() : '';
      const apellidos = deportista.apellidosDep ? deportista.apellidosDep.toLowerCase() : '';
      const cedula = deportista.cedulaDep ? deportista.cedulaDep.toLowerCase() : '';

      return (
        nombres.includes(text.toLowerCase()) ||
        apellidos.includes(text.toLowerCase()) ||
        cedula.includes(text)
      );
    });

    console.log('Resultados filtrados:', filtered); // Imprime los resultados filtrados

    setDeportistasDisponibles(filtered); // Actualiza el estado con los resultados filtrados
    
  };

const handleFinishSelection = async () => {

  if (deportistasAgregados.length === 0) {
    Alert.alert('Error', 'No se han agregado deportistas a la competencia');
    return
  }

  if (competencia.idMod==1 && deportistasAgregados.length <4) {
    Alert.alert('Error', 'Para la competencia de velocidad se requieren al menos 4 deportistas');
    return
  }

  if (competencia.idMod==2 && deportistasAgregados.length <4) {
    Alert.alert('Error', 'Para la competencia de bloque se requieren al menos 4 deportistas');
    return
  }

  if (competencia.idMod==3 && deportistasAgregados.length <4) {
    Alert.alert('Error', 'Para la competencia de vias se requieren al menos 4 deportistas');
    return
  }

  if (competencia.idMod==4 && deportistasAgregados.length !=8) {
    Alert.alert('Error', 'Para la competencia de combinada se requieren exactamente 8 deportistas');
    return
  }


  const apiData = deportistasAgregados.map(d => ({ idDep: d.idDep,idCom: idCom }));
  console.log("apiData???????: ", apiData);

  api.post("/api/CompetenciaDeportista/bulk",apiData)
  .then(response=>{
    console.log("Response: "+response.data);
    navigation.goBack();
    if(competencia.idMod==1){
      navigation.navigate('DCCompetenciaVelocidad', { idCom: idCom, depAdded:true }); 
    }
    if(competencia.idMod==2){
      navigation.navigate('DCCompetenciaBloque', { idCom: idCom, depAdded:true }); 
    }
    if(competencia.idMod==3){
      navigation.navigate('DCCompetenciaVias', { idCom: idCom, depAdded:true }); 
    }
    if(competencia.idMod==4){
      navigation.navigate('DCCompetenciaCombinada', { idCom: idCom, depAdded:true }); 
    }

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
<TextInput
        value={searchQuery}
        onChangeText={handleSearch} // Llama a handleSearch al cambiar el texto
        placeholder="Buscar ..."
        style={styles.searchInput}
      />
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
        height: "40%",
    },
    containerDeportistasAdd:{
        height: "40%",
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
    searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default DCAgregarDeportistas;
