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
  const [tiempoOrig1, setTiempoOrig1] = useState(0);
  const [tiempoOrig2, setTiempoOrig2] = useState(0);

  const fetchRegistroResultado = async () => {
    try {
      const response = await api.get(`/api/RegistroResultado/${idRegistroResultado}`);
      let data = response.data; // Trabajamos con la data de la respuesta directamente
      setTiempoOrig1(response.data.tiempo1); // Guardamos el valor original de tiempo1
      setTiempoOrig2(response.data.tiempo2); // Guardamos el valor original de tiempo1

      if(data.registroEditadoT1 === false && data.tiempo1 > 0){
        console.log("🤢🤢🤢🤢🤢🤢");
        
        data = {
          ...data,
          tiempo1: 0, // Modificamos el valor de tiempo1
        };
      }

      if(data.registroEditadoT1 === true && data.registroEditadoT2 === false && data.tiempo2 > 0){
        console.log("😍😍😍😍😍😍😍😍😍😍");
        
        data = {
          ...data,
          tiempo2: 0, // Modificamos el valor de tiempo2
        };
      }

      console.log("🦑🦑🦑🦑🦑🦑🦑 "+data)
      console.log("🦑🦑🦑🦑🦑🦑🦑 tiempoOrig1: "+tiempoOrig1)
      console.log("🦑🦑🦑🦑🦑🦑🦑 tiempoOrig2: "+tiempoOrig2)

// Finalmente, actualizamos el estado con los cambios realizados sobre la data
    setRegistroResultado(data);


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

  const handleSalidaFalse = async () => {
    try {
      Alert.alert(
        "Confirmación", // Título
        "¿Está seguro de la descalificación?", // Mensaje
        [
          {
            text: "Si",
            onPress: async () => {
              // Aquí colocas la lógica para actualizar el registro
              handleDescalificar();
            },
          },
          {
            text: "No",
            style: "cancel", // Hace que el botón se vea como opción de cancelación
          }
          
        ]
      );
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo actualizar el registro");
    }
  }

  const handleDescalificar = async () => {
    try {
      console.log("🙈🙈🙈🙈🙈🙈🙈")

      let regResGuardar = {...registroResultado};

      regResGuardar.registroEditadoT2 = true;
      regResGuardar.registroEditadoT1 = true;
      regResGuardar.fallRegistro1 = true;
      regResGuardar.fallRegistro2 = true;
      regResGuardar.tiempo1=tiempoOrig1*2;
      regResGuardar.tiempo2=tiempoOrig2*2;
      regResGuardar.SalidaFalse=true;

      regResGuardar.registroCompleto=true;

      await api.put(`/api/RegistroResultado/${idRegistroResultado}`, regResGuardar);

      navigation.goBack();
      navigation.navigate('DCCompetenciaVelocidad', { idCom: idCom, regUpdated: true });
    }
    catch (error) {
      console.error(error); 
      Alert.alert("Error", "No se pudo actualizar el registro");
    }
  }

  const handleFallButtonT1 = async (key, value) => {
    
    try {

      console.log("😡😡😡😡😡😡 tiempoOrig1: "+tiempoOrig1)
      console.log("😡😡😡😡😡😡 tiempoOrig2: "+tiempoOrig2)
     
      let regResGuardar = {...registroResultado};



      ///////////////////////////////


        regResGuardar.registroEditadoT1 = true;
        regResGuardar.fallRegistro1 = true;
        regResGuardar.tiempo1=tiempoOrig1+1;

        if(regResGuardar.tipoRegistro==2){
          regResGuardar.registroCompleto=true;
        }
  
      ///////////////////////////////

      

      // if(registroResultado.competencia && registroResultado.competencia.idMod==1){
        
      //   if(registroResultado.tipoRegistro==1){
          
      //       regResGuardar.registroEditadoT1 = true;
      //       regResGuardar.fallRegistro1 = true;
      //       tiempoOrig1;
      //   }
        
      // }

      await api.put(`/api/RegistroResultado/${idRegistroResultado}`, regResGuardar);
      Alert.alert('Éxito', 'Registro actualizado correctamente');
      navigation.goBack();
      navigation.navigate('DCCompetenciaVelocidad', { idCom: idCom, regUpdated: true });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo actualizar el registro');
    }

  };
  
  const handleFallButtonT2 = async (key, value) => {
    
    try {
     
      let regResGuardar = {...registroResultado};

      regResGuardar.registroEditadoT2 = true;
      regResGuardar.fallRegistro2 = true;
      regResGuardar.tiempo2=tiempoOrig2+1;
      regResGuardar.registroCompleto=true;

      await api.put(`/api/RegistroResultado/${idRegistroResultado}`, regResGuardar);
      Alert.alert('Éxito', 'Registro actualizado correctamente');
      navigation.goBack();
      navigation.navigate('DCCompetenciaVelocidad', { idCom: idCom, regUpdated: true });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo actualizar el registro');
    }

  };
  
  const handleGuardarCambios = async () => {
    try {
     

      let regResGuardar = {...registroResultado};

      console.log("let regResGuardar = {...registroResultado}; ❌❌❌❌❌❌❌")
      console.log(JSON.stringify(regResGuardar));
      

        if(registroResultado.tipoRegistro==1){

          if(!regResGuardar.registroEditadoT2 && regResGuardar.registroEditadoT1 && regResGuardar.tiempo2>0){
            regResGuardar.registroEditadoT2 = true;
            regResGuardar.registroCompleto = true;
          }

          if(regResGuardar.tiempo1>0){
            regResGuardar.registroEditadoT1 = true;
          }
    
          
        }
        else{
          if(regResGuardar.tiempo1>0){
            regResGuardar.registroEditadoT1 = true;
            regResGuardar.registroCompleto = true;
          }
        }
      

      await api.put(`/api/RegistroResultado/${idRegistroResultado}`, regResGuardar);
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
        <Text style={styles.label}>Tiempo1: </Text>
        <TextInput
          style={styles.input}
          value={registroResultado.fallRegistro1?"FALL":String(registroResultado.tiempo1)} // Aseguramos que el valor de tiempo1 siempre se mantenga si no es editado
          editable={!registroResultado.registroEditadoT1}  // Si es true, el input está deshabilitado
          keyboardType="numeric"  // Si esperas números
          onChangeText={(value) => handleInputChange('tiempo1', value)}  // Actualiza el valor cuando lo edites
          
        />

      <TouchableOpacity 
      disabled={registroResultado.registroEditadoT1}
      style={[styles.saveButton,registroResultado.registroEditadoT1 && styles.inactiveTab]} onPress={handleFallButtonT1}>
        <Text style={[styles.saveButtonText,registroResultado.registroEditadoT1 && styles.inactiveTabText]}>Fall</Text>
      </TouchableOpacity>


      {
        registroResultado.tipoRegistro==1 &&
        <>
        <Text style={styles.label}>Tiempo2: </Text>
        <TextInput
          style={styles.input}
          value={registroResultado.fallRegistro2?"FALL":registroResultado.registroEditadoT1 ? String(registroResultado.tiempo2) : '0'}
          editable={(!registroResultado.registroEditadoT2) && registroResultado.registroEditadoT1}  // Si es true, el input está deshabilitado
          keyboardType="numeric"  // Si esperas números
          onChangeText={(value) => handleInputChange('tiempo2', value)}  // Actualiza el valor cuando lo edites
        />

        <TouchableOpacity 
        disabled={(!registroResultado.registroEditadoT1)}
        style={[styles.saveButton,(!registroResultado.registroEditadoT1) && styles.inactiveTab]} onPress={handleFallButtonT2}>
          <Text style={[styles.saveButtonText,(!registroResultado.registroEditadoT1) && styles.inactiveTabText]}>Fall</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity style={styles.saveButton} onPress={handleFallButtonT2}>
        <Text style={styles.saveButtonText}>Fall</Text>
      </TouchableOpacity> */}
        </>
      }
      
      </>
      }
      <TouchableOpacity style={styles.saveButton} onPress={handleGuardarCambios}>
        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>
      <View style={{ height: 1, backgroundColor: "#ccc", marginVertical: 10 }} />

      <TouchableOpacity style={styles.dangerButton} onPress={handleSalidaFalse}>
        <Text style={styles.saveButtonText}>Salida en False</Text>
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
  dangerButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#dc3546',
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  inactiveTab: {
    backgroundColor: "#D3D3D3", // Color de fondo para botones desactivados
  },
  inactiveTabText: {
    color: "#A9A9A9", // Color de texto para botones desactivados
  },
});

export default DCEditarRegistroResultado;
