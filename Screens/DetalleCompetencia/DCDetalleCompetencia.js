import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native'; 

import api from '../../services/api'; 


const DCDetalleCompetencia = () => {
  const route = useRoute();
  const { idCom, depAdded } = route.params; // Accede a los parámetros de la ruta

  const navigation = useNavigation();
  const [competencia, setCompetencia] = useState();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedTab, setSelectedTab] = useState('detalle'); // Estado para manejar la pestaña seleccionada
  const [isDetalleActive, setIsDetalleActive] = useState(true);
  const [isDeportistasActive, setIsDeportistasActive] = useState(true);
  const [isResultadosActive, setIsResultadosActive] = useState(true);
  const [isFase2Active, setIsFase2Active] = useState(false);
  const [isFase3Active, setIsFase3Active] = useState(false);
  const [isFase4Active, setIsFase4Active] = useState(false);
  const [isFase5Active, setIsFase5Active] = useState(false);
  const [isAddDeportistasActive, setIsAddDeportistasActive] = useState(true);
  
  const [addDepsComplete, setAddDepsComplete] = useState(false);

  const [registrosResultados, setRegistrosResultados] = useState([]);
  const [regsResOctavos, setRegsResOctavos] = useState([]);
  const [regsResCuartos, setRegsResCuartos] = useState([]);
  const [regsResSemi, setRegsResSemi] = useState([]);
  const [regsResTercerLugar, setRegsResTercerLugar] = useState([]);
  const [regsResFinal, setRegsResFinal] = useState([]);

  const [isTerminarClasifEnabled, setIsTerminarClasifEnabled] = useState(true);
  const [isTerminarOctavosEnabled, setIsTerminarOctavosEnabled] = useState(true);
  const [isTerminarCuartosEnabled, setIsTerminarCuartosEnabled] = useState(true);
  const [isTerminarSemidEnabled, setIsTerminarSemisEnabled] = useState(true);
  const [isTerminarFinalEnabled, setIsTerminarFinalEnabled] = useState(true);

  const getCompetencia = async (id) => {
    try {
      const response = await api.get(`/api/Competencia/${id}`);
      console.log('Respuesta de la API:', response.data);
      //setCompetencia(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'No se pudo obtener la competencia msg2');
    } finally {
      setLoading(false);
    }
  };

  const getRegistrosResultados = async (id) => {
    try {
      api.get(`/api/RegistroResultado/ByIdCom/${id}`)
      .then(response => {
        //console.log('Registros desde de la API: _>_>_>_>_>_>_>', response.data);

        setRegistrosResultados(response.data.filter((res) => res.etapa==1));
        if(registrosResultados.length>0 ){
          
          setIsResultadosActive(true);
        }
        const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
        if(noCompletados.length>0 || regsResOctavos.length==0){
          setIsTerminarClasifEnabled(true);
        }
        else
        {
          setIsTerminarClasifEnabled(false);
        }
        setRegsResOctavos(response.data.filter((res) => res.etapa==2));
        if(regsResOctavos.length>0 ){
          
          setIsFase2Active(true);
        }
        const noCompletadosOct = regsResOctavos.filter((res) => res.registroCompleto==false);
        if(noCompletadosOct.length>0 || regsResCuartos.length==0){
          setIsTerminarOctavosEnabled(true);
        }
        else
        {
          setIsTerminarOctavosEnabled(false);
        }
        setRegsResCuartos(response.data.filter((res) => res.etapa==3));
        if(regsResCuartos.length>0){
          
          setIsFase3Active(true);
        }
        const noCompletadosCuartos = regsResCuartos.filter((res) => res.registroCompleto==false);
        if(noCompletadosCuartos.length>0 || regsResSemi.length==0){
          setIsTerminarCuartosEnabled(true);
        }
        else
        {
          setIsTerminarCuartosEnabled(false);
        }
        setRegsResSemi(response.data.filter((res) => res.etapa==4));
        if(regsResSemi.length>0){
          
          setIsFase4Active(true);
        }
        const noCompletadosSemis = regsResSemi.filter((res) => res.registroCompleto==false);
        if(noCompletadosSemis.length>0 || regsResFinal.length==0){
          setIsTerminarSemisEnabled(true);
        }
        else
        {
          setIsTerminarSemisEnabled(false);
        }

        setRegsResTercerLugar(response.data.filter((res) => res.etapa==5));
        // if(regsResOctavos.length>0){
        //   setIsTerminarOctavosEnabled(false);
        //   setIsFase2Active(true);
        // }
        setRegsResFinal(response.data.filter((res) => res.etapa==6));
        if(regsResFinal.length>0){
          setIsTerminarFinalEnabled(false);
          setIsFase5Active(true);
        }
        const noCompletadosFinal = regsResFinal.filter((res) => res.registroCompleto==false);
        if(noCompletadosFinal.length>0){
          setIsTerminarFinalEnabled(true);
        }
        else
        {
          setIsTerminarFinalEnabled(true);
        }
      })
      .catch(error => {
        console.error('Error al obtener los registros de resultados: _>_>_>_>_>_>_>', error);
      });
      
      
    } catch (err) {
      console.error(err);
      Alert.alert('Error', 'No se pudo obtener la competencia msg1');
    } finally {
      setLoading(false);
    }
  };

  const generarResultados = async (resultadosEntrada) => {
    try{
      return await api.post("/api/RegistroResultado/BulkCreate",resultadosEntrada)
    }
    catch(error){
      console.error("Error al generar los resultados: ", error);
    }
    
    // .then(response=>{
    //   console.log("Response generarResultados: 😊😊😊😊😊😊"+response.data);
    //   return response.data;

    // })
    // .catch(error=>{
    //   console.log("Error: "+error)
    // });
  }

  const handleTerminarFaseClasif = async () => {
    setIsFase2Active(true);
    const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
    if(noCompletados.length>0){
    //if(false){
      Alert.alert('Error', 'No se han completado todos los registros');
      return;
    }
    else{

      if(competencia.idMod==1){
        const clasifOctavos = registrosResultados.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(0, 16);
        console.log('Clasificados a octavos: 😒😒😒😒😒', clasifOctavos);
        const resultsOctavos = clasifOctavos.map((res, index) => {
          return {
            idCom: idCom,
            idDep: res.idDep,
            etapa: 2,
          };
        })
        console.log('post resultsOctavos: ❌❌❌❌', resultsOctavos);
        const generarOctavosResult=await generarResultados(resultsOctavos);
        await getRegistrosResultados(idCom);
      }

      
    }
    setIsTerminarClasifEnabled(false)
  }

  const handleTerminarOctavos = async () => {
    setIsFase3Active(true);
    const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
    if(noCompletados.length>0){
//if(false){
      Alert.alert('Error', 'No se han completado todos los registros');
      return;
    }
    else{
      // regsResOctavos
      // regsResCuartos
      // regsResSemi
      // regsResTercerLugar
      // regsResFinal
      if(competencia.idMod==1){
        const clasifCuartos = regsResOctavos.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(0, 8);
        console.log('Clasificados a cuartos: 😒😒😒😒😒', clasifCuartos);
        const resultsCuartos = clasifCuartos.map((res, index) => {
          return {
            idCom: idCom,
            idDep: res.idDep,
            etapa: 3,
          };
        })
        console.log('post resultsCuartos: ❌❌❌❌', resultsCuartos);
        const generarCuartosResult=await generarResultados(resultsCuartos);
        await getRegistrosResultados(idCom);
      }

      
    }
    setIsTerminarOctavosEnabled(false)
  }
  const handleTerminarCuartos = async () => {
    setIsFase4Active(true);
    const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
    if(noCompletados.length>0){
//if(false){
      Alert.alert('Error', 'No se han completado todos los registros');
      return;
    }
    else{
      // regsResOctavos
      // regsResCuartos
      // regsResSemi
      // regsResTercerLugar
      // regsResFinal
      if(competencia.idMod==1){
        const clasifSemis = regsResCuartos.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(0, 4);
        console.log('Clasificados a semis: 😒😒😒😒😒', clasifSemis);
        const resultsSemis = clasifSemis.map((res, index) => {
          return {
            idCom: idCom,
            idDep: res.idDep,
            etapa: 4,
          };
        })
        console.log('post resultsSemis: ❌❌❌❌', resultsSemis);
        const generarSemisResult=await generarResultados(resultsSemis);
        await getRegistrosResultados(idCom);
      }

      
    }
    setIsTerminarCuartosEnabled(false)
  }
  const handleTerminarSemi = async () => {
    setIsFase5Active(true);
    const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
    if(noCompletados.length>0){
//if(false){
      Alert.alert('Error', 'No se han completado todos los registros');
      return;
    }
    else{
      // regsResOctavos
      // regsResCuartos
      // regsResSemi
      // regsResTercerLugar
      // regsResFinal
      if(competencia.idMod==1){
        
        const clasifTercerL = regsResSemi.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(2, 4);
        console.log('Clasificados a cuartos: 😒😒😒😒😒', clasifTercerL);
        const resultsTercerL = clasifTercerL.map((res, index) => {
          return {
            idCom: idCom,
            idDep: res.idDep,
            etapa: 5,
          };
        })
        console.log('post resultsCuartos: ❌❌❌❌', resultsTercerL);
        const generarTercerLResult=await generarResultados(resultsTercerL);

        
        const clasifFinal = regsResSemi.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(0, 2);
        console.log('Clasificados a cuartos: 😒😒😒😒😒', clasifFinal);
        const resultsFinal = clasifFinal.map((res, index) => {
          return {
            idCom: idCom,
            idDep: res.idDep,
            etapa: 6,
          };
        })
        console.log('post resultsCuartos: ❌❌❌❌', resultsFinal);
        const generarFinalResult=await generarResultados(resultsFinal);


        await getRegistrosResultados(idCom);
      }

      const resultsOctavos = registrosResultados.map((res, index) => {
        return {
          idCom: idCom,
          idDep: res.idDep,
          etapa: 2,
        };
      })
    }
    setIsTerminarSemisEnabled(false)
  }
  const handleTerminarFinal = async () => {
    // setIsFase2Active(true);


    const ganador = regsResFinal.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(0, 1);
        console.log('Ganador: 😒😒😒😒😒', ganador);
        
        Alert.alert('Ganador', 'El ganador es: '+ganador[0].deportista.nombresDep+" "+ganador[0].deportista.apellidosDep);

    setIsTerminarFinalEnabled(false)
  }

  const handleEditarRegistroRes = (registro) => {
    navigation.navigate('DCEditarRegistroResultado', { idCom:idCom, idRegistroResultado: registro.idRegistroResultado });
  }

  useFocusEffect(
    React.useCallback(() => {

      const handleGoback =async () => {
        try{
          console.log("commmming backkkkkkkkkkkkkkkkkkkkkkkkkkkk");
          console.log('myyyyyyyyyyyyyyyyyy route.params:', route.params); // Ver los parámetros recibidos
          if(route.params && route.params.regUpdated) {
            console.log('RegUpdated ❤️❤️❤️❤️❤️❤️:', route.params.regUpdated);
            await getRegistrosResultados(idCom);
          }
          else{
            if(route.params && route.params.depAdded) {
              console.log('depAdded 🤣🤣🤣🤣🤣🤣:', route.params.depAdded);
            }
          }

          setLoading(true);  // Re-inicia el estado de carga al recibir el foco
        getCompetencia(idCom).then((data) => {
          setCompetencia(data);
          
        }).catch((error) => {
          console.error('Error al obtener la competencia en useFocusEffect:', error);
        });
        }
        catch(error){
          console.error('Error al obtener la competencia en useFocusEffect:', error);
        }

      

      
      };

      handleGoback();

      
    }, [idCom, depAdded]) // Se vuelve a ejecutar cada vez que idCom o depAdded cambien
  );

  useEffect(() => {
    
    ///////////////////////////////////////////////////////////////
    
    // if(depAdded && addDepsComplete==false && competencia) {
    //   setIsResultadosActive(true);
    //   setAddDepsComplete(true);

    //   //setIsAddDeportistasActive(false)
    //   console.log("Addddddddding deportistas");
    //   console.log("competencia!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    //     console.log(competencia);
    //   console.log("my competencia.competenciaDeportistas <<<<<<<<<<<<<<<<<<");
    //     console.log(competencia.competenciaDeportistas);
    //     console.log("my competencia.competenciaDeportistas.length");
    //     console.log(competencia.competenciaDeportistas.length);
    //   if(competencia.competenciaDeportistas.length > 4) {
    //     console.log("competencia.competenciaDeportistas");
    //     console.log(competencia);
    //     console.log("competencia.competenciaDeportistas.length");
    //     console.log(competencia.competenciaDeportistas.length);
      
    //     const resultsClasif = competencia.competenciaDeportistas.map((dep, index) => {
    //       console.log('Dep competenciacompetenciacompetenciacompetencia:', dep);  // Ver el deportista
    //       return {
    //         idCom: idCom,
    //         idDep: dep.deportista.idDep,
    //         etapa: 1,
    //       };
    //     });
    //     console.log('Resultados Clasif gennnnnnnnnnnnnnn:', resultsClasif);  // Ver los resultados

    //     const generateAndFetchResults = async () => {
    //       try {
    //         //await generarResultados(resultsClasif);
    //         generarResultados(resultsClasif).then((result) => {
    //           console.log('Resultado de generarResultados: ✅✅✅✅✅✅✅✅', result);  // Maneja el resultado
    //           getRegistrosResultados(idCom);
    //         });
            
    //       } catch (error) {
    //         console.error('Error al generar los resultados:', error);  // Maneja el error si ocurre
    //       }
    //     };

    //     generateAndFetchResults();
        
    //   }

      

    // }
    // getRegistrosResultados(idCom);

    console.log("Cambio en competencia!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(competencia);

    const handleUpdates = async () => {
      try {
        if(depAdded && addDepsComplete==false && competencia) {
          if(competencia && competencia.competenciaDeportistas.length > 4) {
            setIsResultadosActive(true);
            setIsAddDeportistasActive(false);
            console.log("competencia.competenciaDeportistas");
            console.log(competencia);
            console.log("competencia.competenciaDeportistas.length");
            console.log(competencia.competenciaDeportistas.length);
          
            const resultsClasif = competencia.competenciaDeportistas.map((dep, index) => {
              console.log('Dep competenciacompetenciacompetenciacompetencia:', dep);  // Ver el deportista
              return {
                idCom: idCom,
                idDep: dep.deportista.idDep,
                etapa: 1,
              };
            });
            console.log('Resultados Clasif gennnnnnnnnnnnnnn:', resultsClasif);  // Ver los resultados
      
            const generarResult=await generarResultados(resultsClasif);
            setAddDepsComplete(true);
            console.log('Resultados Clasif gennnnnnnnnnnnnnn:', generarResult);  // Ver los resultados
          }
        }
        await getRegistrosResultados(idCom);
      } catch (error) {
        console.error('Error al generar los resultados:', error);
      }
    };
  
    handleUpdates(); // Ejecutar la función async dentro del useEffect

    

    

    ///////////////////////////////////////////////////////////////

  }, [competencia]);

  const handleAgregarDeportistas = () => {
    navigation.navigate('DCAgregarDeportistas', { idCom: idCom }); 
  };


  const renderTabContent = () => {
    switch (selectedTab) {
      case 'detalle':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Nombre de la Competencia:</Text>
            <Text style={styles.value}>{competencia.nombreCom}</Text>
            <Text style={styles.label}>Modalidad Competencia:</Text>
            <Text style={styles.value}>{competencia.idMod==1?"Velocidad":competencia.idMod==2?"Bloque":competencia.idMod==3?"Vias":"Combinada"}</Text>
          </View>
        );
      case 'deportistas':
        return (
          <View style={styles.faseContainer}>
          <View style={styles.resultadosListContainer}>
            <FlatList
              data={competencia.competenciaDeportistas}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderDeportistaItem}
              contentContainerStyle={{ paddingBottom: 20 }}
            />
          </View>
          <TouchableOpacity style={[styles.addButton,
          competencia.competenciaDeportistas.length > 0 && styles.inactiveTab
        ]
          
        } onPress={handleAgregarDeportistas} disabled={ competencia.competenciaDeportistas.length >0}>
          <Text style={styles.addButtonText}>Agregar Deportistas</Text>
        </TouchableOpacity>
          </View>
        );
      case 'resultados':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Resultados: {registrosResultados.filter(r=>r.registroCompleto).length}/{ registrosResultados.length}</Text>
            <View style={styles.resultadosListContainer}>
            { registrosResultados.length>0 && <FlatList
              data={registrosResultados}
              keyExtractor={(item) => item.idRegistroResultado.toString()}
              renderItem={renderResultadoItem}
              contentContainerStyle={{  }}
            />}
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarClasifEnabled && styles.inactiveTab]} onPress={handleTerminarFaseClasif} disabled={!isTerminarClasifEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      case 'fase2':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Octavos de Final: {regsResOctavos.filter(r=>r.registroCompleto).length}/{ regsResOctavos.length}</Text>
            {/* Aquí puedes agregar el contenido de Fase 2 */}
            <View style={styles.resultadosListContainer}>
            { regsResOctavos.length>0 &&<FlatList
              data={regsResOctavos}
              keyExtractor={(item) => item.idRegistroResultado.toString()}
              renderItem={renderResultadoItem}
              contentContainerStyle={{ }}
            />}
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarOctavosEnabled && styles.inactiveTab]} onPress={handleTerminarOctavos} disabled={!isTerminarOctavosEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      case 'fase3':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Cuartos de Final: {regsResCuartos.filter(r=>r.registroCompleto).length}/{ regsResCuartos.length}</Text>
            <View style={styles.resultadosListContainer}>
            {regsResCuartos.length>0 && <FlatList
              data={regsResCuartos}
              keyExtractor={(item) => item.idRegistroResultado.toString()}
              renderItem={renderResultadoItem}
              contentContainerStyle={{}}
            />}
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarCuartosEnabled && styles.inactiveTab]} onPress={handleTerminarCuartos} disabled={!isTerminarCuartosEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      case 'fase4':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Semifinales: {regsResSemi.filter(r=>r.registroCompleto).length}/{ regsResSemi.length}</Text>
            <View style={styles.resultadosListContainer}>
            {regsResSemi.length>0 && <FlatList
              data={regsResSemi}
              keyExtractor={(item) => item.idRegistroResultado.toString()}
              renderItem={renderResultadoItem}
              contentContainerStyle={
                {
                  //backgroundColor:'#FF0000'
                }}
            />}
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarSemidEnabled && styles.inactiveTab]} onPress={handleTerminarSemi} disabled={!isTerminarSemidEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      case 'fase5':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Tercer Lugar: {regsResTercerLugar.filter(r=>r.registroCompleto).length}/{ regsResTercerLugar.length}</Text>
            <Text style={styles.label}>----------------------------------------------------------</Text>
            <View style={styles.resultadosListContainer}>
            {regsResTercerLugar.length>0 &&<FlatList
              data={regsResTercerLugar}
              keyExtractor={(item) => item.idRegistroResultado.toString()}
              renderItem={renderResultadoItem}
              contentContainerStyle={{ paddingBottom: 20 }}
            />}
            <Text style={styles.label}>----------------------------------------------------------</Text>
            <Text style={styles.label}>Final: {regsResFinal.filter(r=>r.registroCompleto).length}/{ regsResFinal.length}</Text>
            
            {regsResFinal.length>0 && <FlatList
              data={regsResFinal}
              keyExtractor={(item) => item.idRegistroResultado.toString()}
              renderItem={renderResultadoItem}
              contentContainerStyle={{ paddingBottom: 20 }}
            />}
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarFinalEnabled && styles.inactiveTab]} onPress={handleTerminarFinal} disabled={!isTerminarFinalEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  };

  const renderDeportistaItem = ({ item }) => (
    <View style={styles.deportistaItem}>
      <Text style={styles.label}>
        {item.deportista ? item.deportista.nombresDep + " " + item.deportista.apellidosDep : 'Nombre no disponible'}
      </Text>
    </View>
  );
  
  const renderResultadoItem = ({ item }) => (
    <View style={styles.resItem}>
         { item && <View style={styles.resItemContainer}>
            <View style={styles.resItemData}>
              <Text style={styles.label}>Cédula: {item.deportista.cedulaDep}</Text>
              <Text style={styles.label}>Nombres: {item.deportista.nombresDep}</Text>
              <Text style={styles.label}>Apellidos: {item.deportista.apellidosDep}</Text>
              <Text style={styles.label}>Tiempo1: {item.tiempo1}</Text>
              <Text style={styles.label}>Tiempo2: {item.tiempo2}</Text>
            </View>
            <View style={styles.resBtnContainer}>
              <TouchableOpacity style={[styles.buttonResult, item.registroCompleto &&styles.inactiveTab]} onPress={() => handleEditarRegistroRes(item)}
                disabled={item.registroCompleto}>
                <Text style={[styles.buttonResultText]}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
}
        </View>
  );

  if (loading) {
    return <Text style={styles.loadingText}>Cargando...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!competencia || competencia.length === 0) {
    return <Text style={styles.emptyText}>No hay competencia disponibles.</Text>;
  }

  return (
    <View style={styles.container}>
      


{/* Barra de detalles con botón */}
<View style={styles.detailContainer}>
    <Text style={styles.title}>Detalle Competencia</Text>
    <TouchableOpacity
      style={[
        styles.tab,
        selectedTab === 'detalle' && styles.selectedTab, // Si está seleccionado, aplica el estilo de seleccionado
        !isDetalleActive && styles.inactiveTab, // Si está desactivado, aplica el estilo de desactivado
        isDetalleActive && selectedTab !== 'detalle' && styles.activeTab, // Si está activo pero no seleccionado, aplica el estilo de activo
      ]}
      onPress={() => setSelectedTab('detalle')}
      disabled={!isDetalleActive} // Desactiva el botón si no está activo
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'detalle' && styles.selectedTabText, // Si está seleccionado, cambia el color del texto
          !isDetalleActive && styles.inactiveTabText, // Si está desactivado, cambia el color del texto
          isDetalleActive && selectedTab !== 'detalle' && styles.activeTabText, // Si está activo pero no seleccionado, cambia el color del texto
        ]}
      >
        Detalle
      </Text>
    </TouchableOpacity>
  </View>

  {/* Barra de pestañas */}
  <View style={styles.tabsContainer}>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'deportistas' && styles.selectedTab,
        !isDeportistasActive && styles.inactiveTab,
        isDeportistasActive && selectedTab !== 'deportistas' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('deportistas')}
      disabled={!isDeportistasActive}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'deportistas' && styles.selectedTabText,
          !isDeportistasActive && styles.inactiveTabText,
          isDeportistasActive && selectedTab !== 'deportistas' && styles.activeTabText,
        ]}
      >
        Deportistas
      </Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'resultados' && styles.selectedTab,
        !isResultadosActive && styles.inactiveTab,
        isResultadosActive && selectedTab !== 'resultados' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('resultados')}
      disabled={!isResultadosActive}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'resultados' && styles.selectedTabText,
          !isResultadosActive && styles.inactiveTabText,
          isResultadosActive && selectedTab !== 'resultados' && styles.activeTabText,
        ]}
      >
        Resultados Clasif.
      </Text>
    </TouchableOpacity>
  </View>

  {/* Más botones */}
  <View style={styles.tabsContainer}>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'fase2' && styles.selectedTab,
        !isFase2Active && styles.inactiveTab,
        isFase2Active && selectedTab !== 'fase2' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('fase2')}
      disabled={!isFase2Active}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'fase2' && styles.selectedTabText,
          !isFase2Active && styles.inactiveTabText,
          isFase2Active && selectedTab !== 'fase2' && styles.activeTabText,
        ]}
      >
        Resultados Octavos
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'fase3' && styles.selectedTab,
        !isFase3Active && styles.inactiveTab,
        isFase3Active && selectedTab !== 'fase3' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('fase3')}
      disabled={!isFase3Active}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'fase3' && styles.selectedTabText,
          !isFase3Active && styles.inactiveTabText,
          isFase3Active && selectedTab !== 'fase3' && styles.activeTabText,
        ]}
      >
        Resultados Cuartos
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.tabsContainer}>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'fase4' && styles.selectedTab,
        !isFase4Active && styles.inactiveTab,
        isFase4Active && selectedTab !== 'fase4' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('fase4')}
      disabled={!isFase4Active}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'fase4' && styles.selectedTabText,
          !isFase4Active && styles.inactiveTabText,
          isFase4Active && selectedTab !== 'fase4' && styles.activeTabText,
        ]}
      >
        Resultados Semifinal
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'fase5' && styles.selectedTab,
        !isFase5Active && styles.inactiveTab,
        isFase5Active && selectedTab !== 'fase5' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('fase5')}
      disabled={!isFase5Active}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'fase5' && styles.selectedTabText,
          !isFase5Active && styles.inactiveTabText,
          isFase5Active && selectedTab !== 'fase5' && styles.activeTabText,
        ]}
      >
        Resultados Final
      </Text>
    </TouchableOpacity>
  </View>

      {/* Contenido de la pestaña seleccionada */}
      {renderTabContent()}

      
    </View>
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
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  detailsButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  
  competencia: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3,
    // marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginBottom: 10,
  },
  deportistasContainer: {
    //height: '70%', // Ajusta el porcentaje visible para el FlatList
    marginBottom: 80,
    // marginTop: 10,
  },
  deportistaItem: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    position: 'absolute',
    bottom: 20, // El botón se mantendrá en el fondo
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 3, // Este es el 75% del contenedor
    marginRight: 10,
    // Aquí ajustamos el tamaño del texto para que se ajuste al ancho disponible
    flexShrink: 1, 
    flexWrap: 'wrap',
  },
  detailsButton: {
    flex: 1, // El 25% restante
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTab: {
    backgroundColor: '#cccccc', // Color de fondo para botones activos
  },
  inactiveTab: {
    backgroundColor: '#D3D3D3', // Color de fondo para botones desactivados
  },
  selectedTab: {
    backgroundColor: '#007bff', // Color de fondo para el botón seleccionado
  },
  activeTabText: {
    color: '#000', // Color de texto para botones activos
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#A9A9A9', // Color de texto para botones desactivados
  },
  selectedTabText: {
    color: '#fff', // Color de texto para el botón seleccionado
    fontWeight: 'bold',
  },
  buttonResult:{
    backgroundColor:'#007bff' ,
    paddingVertical :10 ,
    paddingHorizontal :15 ,
    borderRadius :5 ,
    elevation :2 ,
    flexGrow :1 ,
    marginHorizontal :5 ,
},
buttonResultText:{
    color:'#fff' ,
    textAlign:'center' ,
    fontWeight:'bold' ,
},
resItemContainer:{
  flex:1 ,
  flexDirection:'row' ,
  marginVertical: 10,
  padding: 10,
  backgroundColor: '#ffffff',
  borderRadius: 10,
  elevation: 2,
},
resItemData:{
  flex:1 ,
  width:"90%"
},
resBtnContainer:{
  flex:1 ,
  paddingVertical:15 
},
faseContainer:{
  backgroundColor: '#FFF',
  padding: 15,
  borderRadius: 10,
  elevation: 3,
  flex:1,
},
resultadosListContainer:{
  flex:1 ,
  marginBottom: 60,
}
  
});

export default DCDetalleCompetencia;
