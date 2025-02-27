import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useFocusEffect } from '@react-navigation/native'; 

import api from '../../services/api'; 


const DCCompetenciaVelocidad = () => {
  const route = useRoute();
  const { idCom, depAdded } = route.params; // Accede a los parámetros de la ruta

  const navigation = useNavigation();
  const [competencia, setCompetencia] = useState();
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [selectedTab, setSelectedTab] = useState('detalle'); // Estado para manejar la pestaña seleccionada
  // const [isDetalleActive, setIsDetalleActive] = useState(true);
  // const [isDeportistasTabActive, setIsDeportistasTabActive] = useState(true);
  const [isResultadosTabActive, setIsResultadosTabActive] = useState(false);
  const [isOctavosTabActive, setIsOctavosTabActive] = useState(false);
  const [isCuartosTabActive, setIsCuartosTabActive] = useState(false);
  const [isSemisTabActive, setIsSemisTabActive] = useState(false);
  const [isFinalesTabActive, setIsFinalesTabActive] = useState(false);
  const [isAddDeportistasActive, setIsAddDeportistasActive] = useState(true);
  const [addDepsComplete, setAddDepsComplete] = useState(false);

  const [registrosResultados, setRegistrosResultados] = useState([]);
  const [regsResOctavos, setRegsResOctavos] = useState([]);
  const [regsResCuartos, setRegsResCuartos] = useState([]);
  const [regsResSemi, setRegsResSemi] = useState([]);
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

  const procesarResultadosVSOctavos = async (resEntrada) => {
    try
    {
      const resOctavos = resEntrada.filter((res) => res.etapa==2)
      
      console.log('Resultados de entrada resOctavos: ✅✅✅✅✅✅✅✅', JSON.stringify(resOctavos));

      if(resOctavos.length==0){
        return;
      }

      setIsTerminarClasifEnabled(false);

      setIsOctavosTabActive(true);


      

      const vsOctavos = [];

      for (let i = 0; i < 8; i++) {
        vsOctavos.push(null);
      }


        vsOctavos[0] = {registrosVS:[
        //{...resOctavos.find(item => item.orden === 1), orden: 1} || null, 
        resOctavos.find(item => item.orden === 1)?{...resOctavos.find(item => item.orden === 1),orden:1}:null, 
        resOctavos.find(item => item.orden === 16)?{...resOctavos.find(item => item.orden === 16),orden:1}:null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 1)?resOctavos.find(item => item.orden === 1).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 16)?resOctavos.find(item => item.orden === 16).registroCompleto:true)
      };
      vsOctavos[1] = {registrosVS:[
        resOctavos.find(item => item.orden === 8)?{...resOctavos.find(item => item.orden === 8),orden:8}:null, 
        resOctavos.find(item => item.orden === 9)?{...resOctavos.find(item => item.orden === 9),orden:8}:null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 8)?resOctavos.find(item => item.orden === 8).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 9)?resOctavos.find(item => item.orden === 9).registroCompleto:true)
      };
      vsOctavos[2] = {registrosVS:[
        resOctavos.find(item => item.orden === 4)?{...resOctavos.find(item => item.orden === 4), orden: 4} : null, 
        resOctavos.find(item => item.orden === 13)?{...resOctavos.find(item => item.orden === 13), orden: 4} : null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 4)?resOctavos.find(item => item.orden === 4).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 13)?resOctavos.find(item => item.orden === 13).registroCompleto:true)
      };
      vsOctavos[3] = {registrosVS:[
        resOctavos.find(item => item.orden === 5)?{...resOctavos.find(item => item.orden === 5), orden: 5} : null, 
        resOctavos.find(item => item.orden === 12)?{...resOctavos.find(item => item.orden === 12), orden: 5} : null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 5)?resOctavos.find(item => item.orden === 5).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 12)?resOctavos.find(item => item.orden === 12).registroCompleto:true)
      };
      vsOctavos[4] = {registrosVS:[
        resOctavos.find(item => item.orden === 2)?{...resOctavos.find(item => item.orden === 2), orden: 2} : null, 
        resOctavos.find(item => item.orden === 15)?{...resOctavos.find(item => item.orden === 15), orden: 2} : null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 2)?resOctavos.find(item => item.orden === 2).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 15)?resOctavos.find(item => item.orden === 15).registroCompleto:true)
      };
      vsOctavos[5] = {registrosVS:[
        resOctavos.find(item => item.orden === 7)?{...resOctavos.find(item => item.orden === 7), orden: 7} : null, 
        resOctavos.find(item => item.orden === 10)?{...resOctavos.find(item => item.orden === 10), orden: 7} : null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 7)?resOctavos.find(item => item.orden === 7).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 10)?resOctavos.find(item => item.orden === 10).registroCompleto:true)
      };
      vsOctavos[6] = {registrosVS:[
        resOctavos.find(item => item.orden === 3)?{...resOctavos.find(item => item.orden === 3), orden: 3} : null, 
        resOctavos.find(item => item.orden === 14)?{...resOctavos.find(item => item.orden === 14), orden: 3} : null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 3)?resOctavos.find(item => item.orden === 3).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 14)?resOctavos.find(item => item.orden === 14).registroCompleto:true)
      };
      vsOctavos[7] = {registrosVS:[
        resOctavos.find(item => item.orden === 6)?{...resOctavos.find(item => item.orden === 6), orden: 6} : null, 
        resOctavos.find(item => item.orden === 11)?{...resOctavos.find(item => item.orden === 11), orden: 6} : null],
        etapaCompleta:
        (resOctavos.find(item => item.orden === 6)?resOctavos.find(item => item.orden === 6).registroCompleto:true)
        &&
        (resOctavos.find(item => item.orden === 11)?resOctavos.find(item => item.orden === 11).registroCompleto:true)
      };

    console.log('Resultados vsOctavos: 🤖🤖🤖🤖🤖🤖', vsOctavos);
      setRegsResOctavos(vsOctavos);

      const noCompletadosOct = vsOctavos.filter((res) => res.etapaCompleta==false);

      if(noCompletadosOct.length>0 || regsResCuartos.length==0){
        setIsTerminarOctavosEnabled(true);
      }
      else
      {
        setIsTerminarOctavosEnabled(false);
      }
      

    }
    catch(error){
      console.error("Error al procesar los resultados vs: ", error);
    }
  }

  const procesarResultadosVSCuartos = async (resEntrada) => {
    try
    {

      const resCuartos = resEntrada.filter((res) => res.etapa==3)

      console.log('Resultados de entrada resCuartos: 😡😡😡😡', JSON.stringify(resCuartos));

      
      if(resCuartos.length==0){
        return;
      }

      setIsTerminarOctavosEnabled(false);

      setIsCuartosTabActive(true);
      

      const vsCuartos = [];

      for (let i = 0; i < 4; i++) {
        vsCuartos.push(null);
      }

      vsCuartos[0] = {registrosVS:[
        resCuartos.find(item => item.orden === 1)?{...resCuartos.find(item => item.orden === 1), orden: 1} : null, 
        resCuartos.find(item => item.orden === 8)?{...resCuartos.find(item => item.orden === 8), orden: 1} : null],
        etapaCompleta:
        (resCuartos.find(item => item.orden === 1)?resCuartos.find(item => item.orden === 1).registroCompleto:true)
        &&
        (resCuartos.find(item => item.orden === 8)?resCuartos.find(item => item.orden === 8).registroCompleto:true)
      };
      vsCuartos[1] = {registrosVS:[
        resCuartos.find(item => item.orden === 4)?{...resCuartos.find(item => item.orden === 4), orden: 4} : null, 
        resCuartos.find(item => item.orden === 5)?{...resCuartos.find(item => item.orden === 5), orden: 4} : null],
        etapaCompleta:
        (resCuartos.find(item => item.orden === 4)?resCuartos.find(item => item.orden === 4).registroCompleto:true)
        &&
        (resCuartos.find(item => item.orden === 5)?resCuartos.find(item => item.orden === 5).registroCompleto:true)
      };
      vsCuartos[2] = {registrosVS:[
        resCuartos.find(item => item.orden === 2)?{...resCuartos.find(item => item.orden === 2), orden: 2} : null, 
        resCuartos.find(item => item.orden === 7)?{...resCuartos.find(item => item.orden === 7), orden: 2} : null],
        etapaCompleta:
        (resCuartos.find(item => item.orden === 2)?resCuartos.find(item => item.orden === 2).registroCompleto:true)
        &&
        (resCuartos.find(item => item.orden === 7)?resCuartos.find(item => item.orden === 7).registroCompleto:true)
      };
      vsCuartos[3] = {registrosVS:[
        resCuartos.find(item => item.orden === 3)?{...resCuartos.find(item => item.orden === 3), orden: 3} : null, 
        resCuartos.find(item => item.orden === 6)?{...resCuartos.find(item => item.orden === 6), orden: 3} : null],
        etapaCompleta:
        (resCuartos.find(item => item.orden === 3)?resCuartos.find(item => item.orden === 3).registroCompleto:true)
        &&
        (resCuartos.find(item => item.orden === 6)?resCuartos.find(item => item.orden === 6).registroCompleto:true)
      };

      console.log('Resultados vsCuartos: 🤢🤢🤢🤢🤢', JSON.stringify(vsCuartos));
      setRegsResCuartos(vsCuartos);



      ////////////////////
      const noCompletadosCuartos = vsCuartos.filter((res) => res.etapaCompleta==false);
      if(noCompletadosCuartos.length>0){
        setIsTerminarCuartosEnabled(false);
      }
      else
      {
        setIsTerminarCuartosEnabled(true);
      }

      ////////////////////
    }
    catch(error){
      console.error("Error al procesar los resultados vs: ", error);
    }
  }

  const procesarResultadosVSSemi = async (resEntrada) => {
    try
    {
      const resSemis = resEntrada.filter((res) => res.etapa==4)

      console.log('Resultados de entrada resSemis: 🐟🐟🐟🐟🐟🐟🐟🐟🐟🐟', JSON.stringify(resSemis));
 
      if(resSemis.length==0){
        return;
      }

      setIsTerminarCuartosEnabled(false);

      setIsSemisTabActive(true);

      const vsSemis = [];

      for (let i = 0; i < 2; i++) {
        vsSemis.push(null);
      }

      vsSemis[0] = {registrosVS:[
        resSemis.find(item => item.orden === 1)?{...resSemis.find(item => item.orden === 1), orden: 1} : null, 
        resSemis.find(item => item.orden === 4)?{...resSemis.find(item => item.orden === 4), orden: 1} : null],
        etapaCompleta:
        (resSemis.find(item => item.orden === 1)?resSemis.find(item => item.orden === 1).registroCompleto:true)
        &&
        (resSemis.find(item => item.orden === 4)?resSemis.find(item => item.orden === 4).registroCompleto:true)
      };
      vsSemis[1] = {registrosVS:[
        resSemis.find(item => item.orden === 2)?{...resSemis.find(item => item.orden === 2), orden: 2} : null, 
        resSemis.find(item => item.orden === 3)?{...resSemis.find(item => item.orden === 3), orden: 2} : null],
        etapaCompleta:
        (resSemis.find(item => item.orden === 2)?resSemis.find(item => item.orden === 2).registroCompleto:true)
        &&
        (resSemis.find(item => item.orden === 3)?resSemis.find(item => item.orden === 3).registroCompleto:true)
      };
      

      console.log('Resultados vsSemis: 🦑🦑🦑🦑🦑🦑🦑🦑', JSON.stringify(vsSemis));
      setRegsResSemi(vsSemis);

       ////////////////////
       const noCompletadosSemis = vsSemis.filter((res) => res.etapaCompleta==false);
       if(noCompletadosSemis.length>0){
         setIsTerminarSemisEnabled(false);
       }
       else
       {
        setIsTerminarSemisEnabled(true);
       }
 
       ////////////////////

    }
    catch(error){
      console.error("Error al procesar los resultados vs: ", error);
    }
  }

  const procesarResultadosVSFinal = async (resEntrada) => {
    try
    {
      const resFinal = resEntrada.filter((res) => res.etapa>=5)

      console.log('Resultados de entrada resFinal: 🎃🎃🎃🎃🎃🎃🎃', JSON.stringify(resFinal));
      if(resFinal.length==0){
        return;
      }

      setIsTerminarSemisEnabled(false);

      setIsFinalesTabActive(true);

      
      const vsFinal = [];

      for (let i = 0; i < 2; i++) {
        vsFinal.push(null);
      }

      vsFinal[0] = {registrosVS:[resFinal.find(item => item.orden === 1) || null, resFinal.find(item => item.orden === 2) || null],etapaCompleta:true};
      vsFinal[1] = {registrosVS:[resFinal.find(item => item.orden === 3) || null, resFinal.find(item => item.orden === 4) || null],etapaCompleta:true};
      

      console.log('Resultados vsFinal: 🔶🔶🔶🔶🔶🔶🔶🔶', JSON.stringify(vsFinal));
      setRegsResFinal(vsFinal);

////////////////////////////
const noCompletadosFinal = vsFinal.filter((res) => res.etapaCompleta==false);
       if(noCompletadosFinal.length>0){
         setIsTerminarFinalEnabled(false);
       }
       else
       {
        setIsTerminarFinalEnabled(true);
       }
////////////////////////////

    }
    catch(error){
      console.error("Error al procesar los resultados vs: ", error);
    }
  }


  const getRegistrosResultados = async (id) => {
    try {
    api.get(`/api/RegistroResultado/ByIdCom/${id}`)
      .then(response => {
        console.log('Registros desde de la API 😈😍: _>_>_>_>_>_>_>', response.data);

        setRegistrosResultados(response.data.filter((res) => res.etapa==1));
        if(registrosResultados.length>0 ){
          
          setIsResultadosTabActive(true);
        }
        
        const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
        if(noCompletados.length>0 || regsResOctavos.length==0){
          setIsTerminarClasifEnabled(true);
        }
        else
        {
          setIsTerminarClasifEnabled(false);
        }

        procesarResultadosVSOctavos(response.data);        
        procesarResultadosVSCuartos(response.data);        
        procesarResultadosVSSemi(response.data);
        procesarResultadosVSFinal(response.data);
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
  }

  const handleTerminarFaseClasif = async () => {
    
    const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
    if(noCompletados.length>0){
    //if(false){
      Alert.alert('Error', 'No se han completado todos los registros de fase clasif');
      return;
    }
    else{
      
      //Aqui se verifica si la competencia es de velocidad y se calcula octavos
      if(competencia.idMod==1){
        const clasifOctavos = registrosResultados
        .sort((a, b) => (a.tiempo1 + a.tiempo2) - (b.tiempo1 + b.tiempo2))
        .slice(0, 16)
        .map((item, index) => ({ ...item, orden: index + 1 }));

        console.log('Clasificados a octavos: 👽👽👽👽👽', clasifOctavos);

        
        const resultsOctavos = clasifOctavos.map((res) => {
          return {
            idCom: idCom,
            idDep: res.idDep,
            etapa: 2,
            tipoRegistro: 2,
            orden: res.orden
          };
        })

        console.log('post resultsOctavos: 😈😈😈😈', resultsOctavos);
        const generarOctavosResult=await generarResultados(resultsOctavos);
        await getRegistrosResultados(idCom);
      }

      
    }
  }

  const handleTerminarOctavos = async () => {
    const noCompletados = regsResOctavos.filter((res) => res.etapaCompleta==false);

    console.log('noCompletados: 🤔🤔🤔🤔🤔', JSON.stringify(noCompletados));

    console.log('regsResOctavos: 😍😍😍😍😍😍😍😍😍😍😍😍😍😍😍', JSON.stringify(regsResOctavos));
    console.log("Continuamos")
    if(noCompletados.length>0){
//if(false){
      Alert.alert('Error', 'No se han completado todos los registros');
      return;
    }
    else{
      console.log("Llegamos")
      if(competencia.idMod==1){
        
        console.log("Llegamos 2")
        setIsTerminarOctavosEnabled(false);
        //const clasifCuartos = regsResOctavos.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(0, 8);
        
        console.log("🐟🐟🐟🐟🐟🐟😈")
        console.log("🐟🐟🐟🐟🐟🐟😈 " +JSON.stringify(regsResOctavos))
        try{
          const clasifCuartos = regsResOctavos.map(reg8vos => 
            (reg8vos.registrosVS[0]?reg8vos.registrosVS[0].tiempo1:Infinity)
            <
            (reg8vos.registrosVS[1]?reg8vos.registrosVS[1].tiempo1:Infinity)
            ?reg8vos.registrosVS[0]:reg8vos.registrosVS[1]
          )
          console.log('Clasificados a cuartos: 😈😈😈😈😈', clasifCuartos);

          const resultsCuartos = clasifCuartos.filter(res=>res!=null).map((res) => {
            return {
              idCom: idCom,
              idDep: res.idDep,
              etapa: 3,
              tipoRegistro: 2,
              orden: res.orden
            };
          })

          console.log('post resultsCuartos: ❌❌❌❌', resultsCuartos);
          const generarCuartosResult=await generarResultados(resultsCuartos);
          await getRegistrosResultados(idCom);
          
        }
        catch(error){
          console.error("Error al procesar los resultados cuartos: ", error);
        }
        console.log("🐳🐳🐳🐳🐳🐳🐳")

        
      }

      
    }
    //setIsTerminarOctavosEnabled(false)
  }
  const handleTerminarCuartos = async () => {
    setIsSemisTabActive(true);
    const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
    if(noCompletados.length>0){
//if(false){
      Alert.alert('Error', 'No se han completado todos los registros');
      return;
    }
    else{
      if(competencia.idMod==1){
        
        setIsTerminarCuartosEnabled(false);
        
        console.log("🐟🐟🐟🐟🐟🐟😈")
        console.log("🐟🐟🐟🐟🐟🐟😈 " +JSON.stringify(regsResCuartos))
        try{
          const clasifSemis = regsResCuartos.map(reg4vos => 
            (reg4vos.registrosVS[0]?reg4vos.registrosVS[0].tiempo1:Infinity)
            <
            (reg4vos.registrosVS[1]?reg4vos.registrosVS[1].tiempo1:Infinity)
            ?reg4vos.registrosVS[0]:reg4vos.registrosVS[1]
          )
          console.log('Clasificados a semis: 😈😈😈😈😈', clasifSemis);

          const resultsSemis = clasifSemis.filter(res=>res!=null).map((res) => {
            return {
              idCom: idCom,
              idDep: res.idDep,
              etapa: 4,
              tipoRegistro: 2,
              orden: res.orden
            };
          })

          console.log('post resultsCuartos: ❌❌❌❌', resultsSemis);
          const generarSemisResult=await generarResultados(resultsSemis);
          await getRegistrosResultados(idCom);
        }
        catch(error){
          console.error("Error al procesar los resultados cuartos: ", error);
        }
        console.log("🐳🐳🐳🐳🐳🐳🐳")
      }

      
    }
    setIsTerminarCuartosEnabled(false)
  }

  const handleTerminarSemi = async () => {
    setIsFinalesTabActive(true);
    const noCompletados = registrosResultados.filter((res) => res.registroCompleto==false);
    if(noCompletados.length>0){
//if(false){
      Alert.alert('Error', 'No se han completado todos los registros');
      return;
    }
    else{
      if(competencia.idMod==1){
        
        setIsTerminarSemisEnabled(false);
        
        console.log("🐟🐟🐟🐟🐟🐟😈 TFTFTF")
        console.log("🐟🐟🐟🐟🐟🐟😈 TFTFTF " +JSON.stringify(regsResSemi))
        try{
          const clasifFinal = regsResSemi.map(regSem => 
            (regSem.registrosVS[0]?regSem.registrosVS[0].tiempo1:Infinity)
            <
            (regSem.registrosVS[1]?regSem.registrosVS[1].tiempo1:Infinity)
            ?regSem.registrosVS[0]:regSem.registrosVS[1]
          )

          const clasif3er = regsResSemi.map(regSem => 
            (regSem.registrosVS[0]?regSem.registrosVS[0].tiempo1:Infinity)
            >
            (regSem.registrosVS[1]?regSem.registrosVS[1].tiempo1:Infinity)
            ?regSem.registrosVS[0]:regSem.registrosVS[1]
          )

          
          

          
          const results3er = clasif3er.filter(res=>res!=null).map((res,index) => {
            return {
              idCom: idCom,
              idDep: res.idDep,
              etapa: 5,
              tipoRegistro: 2,
              orden: index+3
            };
          })
          
          const resultsFinal = clasifFinal.filter(res=>res!=null).map((res,index) => {
            return {
              idCom: idCom,
              idDep: res.idDep,
              etapa: 6,
              tipoRegistro: 2,
              orden: index+1
            };
          })

          const resultsEtapaFinal = results3er.concat(resultsFinal);

          console.log('post resultsEtapaFinal: ❌❌❌❌', resultsEtapaFinal);
          const generarFinalesResult=await generarResultados(resultsEtapaFinal);
          await getRegistrosResultados(idCom);
        }
        catch(error){
          console.error("Error al procesar los resultados cuartos: ", error);
        }
        console.log("🐳🐳🐳🐳🐳🐳🐳")
      }

      
    }
    setIsTerminarCuartosEnabled(false)

  }
  const handleTerminarFinal = async () => {
    // setIsOctavosTabActive(true);
    console.log("Llegamos a final")
    

    const ganador = regsResFinal.filter(r => r.registrosVS.some(vs => vs.orden < 3))
    .map(reg8vos => 
      (reg8vos.registrosVS[0]?reg8vos.registrosVS[0].tiempo1:Infinity)
      <
      (reg8vos.registrosVS[1]?reg8vos.registrosVS[1].tiempo1:Infinity)
      ?reg8vos.registrosVS[0]:reg8vos.registrosVS[1]
    )
    console.log("ganador "+ JSON.stringify(ganador));

    const tercerLugar = regsResFinal.filter(r => r.registrosVS.some(vs => vs.orden >= 3)).map(reg8vos => 
      (reg8vos.registrosVS[0]?reg8vos.registrosVS[0].tiempo1:Infinity)
      <
      (reg8vos.registrosVS[1]?reg8vos.registrosVS[1].tiempo1:Infinity)
      ?reg8vos.registrosVS[0]:reg8vos.registrosVS[1]
    )
    console.log("tercerLugar "+ JSON.stringify(tercerLugar));
    // const ganador = regsResFinal.sort((a, b) => (a.tiempo1 +a.tiempo2) - (b.tiempo1+b.tiempo2)).slice(0, 1);
    //     console.log('Ganador: 😒😒😒😒😒', ganador);
        
        Alert.alert('Ganador', 'El ganador es: '+ganador[0].deportista.nombresDep+" "+ganador[0].deportista.apellidosDep+"\n"+
          "El tercer lugar es: "+tercerLugar[0].deportista.nombresDep+" "+tercerLugar[0].deportista.apellidosDep);
        //Alert.alert('Ganador', 'El tercerLugar es: '+tercerLugar.deportista.nombresDep+" "+ganador[0].deportista.apellidosDep);

    setIsTerminarFinalEnabled(false)
  }

  const handleEditarRegistroRes = (registro) => {
    navigation.navigate('DCEditarRegistroVelocidad', { idCom:idCom, idRegistroResultado: registro.idRegistroResultado });
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
    
    console.log("Cambio en competencia!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(competencia);

    const handleUpdates = async () => {
      try {
        if(depAdded && addDepsComplete==false && competencia) {
          if(competencia && competencia.competenciaDeportistas.length > 0) {
            setIsResultadosTabActive(true);
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
                tipoRegistro: 1,
                orden: 0
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
          <Text style={styles.addButtonText}>Terminar Fase Clasif</Text>
        </TouchableOpacity>
          </View>
        );
      case 'octavos':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Octavos de Final: {regsResOctavos.filter(r=>r.etapaCompleta).length}/{ regsResOctavos.length}</Text>
            {/* Aquí puedes agregar el contenido de Fase 2 */}
            <View style={styles.resultadosListContainer}>
            { regsResOctavos.length>0 &&
            
            <FlatList
              data={regsResOctavos}
              keyExtractor={(item,index) => index.toString()}
              renderItem={renderResultadoVSItem}
              contentContainerStyle={{ }}
            />
            
            }
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarOctavosEnabled && styles.inactiveTab]} onPress={handleTerminarOctavos} disabled={!isTerminarOctavosEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      case 'cuartos':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Cuartos de Final: {regsResCuartos.filter(r=>r.etapaCompleta).length}/{ regsResCuartos.length}</Text>
            <View style={styles.resultadosListContainer}>
            {regsResCuartos.length>0 && 
            <FlatList
            data={regsResCuartos}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderResultadoVSItem}
            contentContainerStyle={{ }}
          />
            }
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarCuartosEnabled && styles.inactiveTab]} onPress={handleTerminarCuartos} disabled={!isTerminarCuartosEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      case 'semis':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Semifinales: {regsResSemi.filter(r=>r.etapaCompleta).length}/{ regsResSemi.length}</Text>
            <View style={styles.resultadosListContainer}>
            {regsResSemi.length>0 && 
            <FlatList
            data={regsResSemi}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderResultadoVSItem}
            contentContainerStyle={{ }}
            />
            }
          </View>
          <TouchableOpacity style={[styles.addButton, !isTerminarSemidEnabled && styles.inactiveTab]} onPress={handleTerminarSemi} disabled={!isTerminarSemidEnabled}>
          <Text style={styles.addButtonText}>Terminar Fase</Text>
        </TouchableOpacity>
          </View>
        );
      case 'finales':
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Etapa Final: {regsResFinal.filter(r=>r.etapaCompleta).length}/{ regsResFinal.length}</Text>
            
            <View style={styles.resultadosListContainer}>
            {regsResFinal.length>0 &&
            <FlatList
            data={regsResFinal}
            keyExtractor={(item,index) => index.toString()}
            renderItem={renderResultadoVSItem}
            contentContainerStyle={{ }}
            />
            }
            
            
            
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
              {/* <Text style={styles.label}>Cédula: {item.deportista.cedulaDep}</Text> */}
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

  const renderResultadoVSItem = ({ item }) => (
    <View style={styles.resVSItem}>
      
      {(item.registrosVS[0]?item.registrosVS[0].etapa==5:false) && <Text style={styles.label}>TERCER LUGAR</Text>}
      {(item.registrosVS[0]?item.registrosVS[0].etapa==6:false) && <Text style={styles.label}>FINAL</Text>}
         { item && 

         <View style={styles.resVSItemContainer}>

            { item.registrosVS[0] && 
            <View style={[styles.resVSItemDepContainer, { 
              // backgroundColor: '#FFDD00' 
              }]}>
              
              <View style={styles.resVSItemData}>
                <Text style={styles.label}>Deportista 1: {item.registrosVS[0].deportista.cedulaDep}</Text>
                <Text style={styles.label}>Nombres: {item.registrosVS[0].deportista.nombresDep}</Text>
                <Text style={styles.label}>Apellidos: {item.registrosVS[0].deportista.apellidosDep}</Text>
                {/* <Text style={styles.label}>Puesto: {item.registrosVS[0].orden}</Text> */}
                <Text style={styles.label}>Tiempo1: {item.registrosVS[0].tiempo1}</Text>
              </View>
              <View style={styles.resVSItemBtnContainer}>
                <TouchableOpacity style={[styles.buttonResult, item.registrosVS[0].registroCompleto &&styles.inactiveTab]} onPress={() => handleEditarRegistroRes(item.registrosVS[0])}
                  disabled={item.registrosVS[0].registroCompleto}>
                  <Text style={[styles.buttonResultText]}>Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>}
            
            {item.registrosVS[1] && <View style={[styles.resVSItemDepContainer, {
              //  backgroundColor: '#00DD00' 
               }]}>
              <View style={styles.resVSItemData}>
                <Text style={styles.label}>Deportista 2: {item.registrosVS[1].deportista.cedulaDep}</Text>
                <Text style={styles.label}>Nombres: {item.registrosVS[1].deportista.nombresDep}</Text>
                <Text style={styles.label}>Apellidos: {item.registrosVS[1].deportista.apellidosDep}</Text>
                {/* <Text style={styles.label}>Puesto: {item.registrosVS[1].orden}</Text> */}
                <Text style={styles.label}>Tiempo1: {item.registrosVS[1].tiempo1}</Text>
              </View>
              <View style={styles.resVSItemBtnContainer}>
                <TouchableOpacity style={[styles.buttonResult, item.registrosVS[1].registroCompleto &&styles.inactiveTab]} onPress={() => handleEditarRegistroRes(item.registrosVS[1])}
                  disabled={item.registrosVS[1].registroCompleto}>
                  <Text style={[styles.buttonResultText]}>Agregar</Text>
                </TouchableOpacity>
              </View>
            </View>}

            


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
    <Text style={styles.title}>Detalle Competencia Velocidad</Text>
    <TouchableOpacity
      style={[
        styles.tab,
        selectedTab === 'detalle' && styles.selectedTab, // Si está seleccionado, aplica el estilo de seleccionado
         selectedTab !== 'detalle' && styles.activeTab, // Si está activo pero no seleccionado, aplica el estilo de activo
      ]}
      onPress={() => setSelectedTab('detalle')}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'detalle' && styles.selectedTabText, // Si está seleccionado, cambia el color del texto
          selectedTab !== 'detalle' && styles.activeTabText, // Si está activo pero no seleccionado, cambia el color del texto
        ]}
      >
        Detalle
      </Text>
    </TouchableOpacity>
  </View>

  <View style={styles.tabsContainer}>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'deportistas' && styles.selectedTab,
        selectedTab !== 'deportistas' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('deportistas')}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'deportistas' && styles.selectedTabText,
          selectedTab !== 'deportistas' && styles.activeTabText,
        ]}
      >
        Deportistas
      </Text>
    </TouchableOpacity>
    
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'resultados' && styles.selectedTab,
        !isResultadosTabActive && styles.inactiveTab,
        isResultadosTabActive && selectedTab !== 'resultados' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('resultados')}
      disabled={!isResultadosTabActive}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'resultados' && styles.selectedTabText,
          !isResultadosTabActive && styles.inactiveTabText,
          isResultadosTabActive && selectedTab !== 'resultados' && styles.activeTabText,
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
        selectedTab === 'octavos' && styles.selectedTab,
        !isOctavosTabActive && styles.inactiveTab,
        isOctavosTabActive && selectedTab !== 'octavos' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('octavos')}
      disabled={!isOctavosTabActive}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'octavos' && styles.selectedTabText,
          !isOctavosTabActive && styles.inactiveTabText,
          isOctavosTabActive && selectedTab !== 'octavos' && styles.activeTabText,
        ]}
      >
        Resultados Octavos
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'cuartos' && styles.selectedTab,
        !isCuartosTabActive && styles.inactiveTab,
        isCuartosTabActive && selectedTab !== 'cuartos' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('cuartos')}
      disabled={!isCuartosTabActive}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'cuartos' && styles.selectedTabText,
          !isCuartosTabActive && styles.inactiveTabText,
          isCuartosTabActive && selectedTab !== 'cuartos' && styles.activeTabText,
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
        selectedTab === 'semis' && styles.selectedTab,
        !isSemisTabActive && styles.inactiveTab,
        isSemisTabActive && selectedTab !== 'semis' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('semis')}
      disabled={!isSemisTabActive}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'semis' && styles.selectedTabText,
          !isSemisTabActive && styles.inactiveTabText,
          isSemisTabActive && selectedTab !== 'semis' && styles.activeTabText,
        ]}
      >
        Resultados Semifinal
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[
        styles.tab,{ flex: 1 },
        selectedTab === 'finales' && styles.selectedTab,
        !isFinalesTabActive && styles.inactiveTab,
        isFinalesTabActive && selectedTab !== 'finales' && styles.activeTab,
      ]}
      onPress={() => setSelectedTab('finales')}
      disabled={!isFinalesTabActive}
    >
      <Text
        style={[
          styles.tabText,
          selectedTab === 'finales' && styles.selectedTabText,
          !isFinalesTabActive && styles.inactiveTabText,
          isFinalesTabActive && selectedTab !== 'finales' && styles.activeTabText,
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
},
resVSItem:{
  flexDirection:'column' ,
  //flex:1 ,
  padding:5,
  // marginVertical: 10,
  // padding: 10,
  //backgroundColor: '#ff0000',
  // borderColor : '#000',
  // borderWidth :1, 
  // borderRadius: 10,
  // elevation: 2,
},
resVSItemContainer:{
  flex:1 ,
  flexDirection:'row' ,
},
resVSItemDepContainer:{
  flex:1 ,
  flexDirection:'column' ,
  
},
resVSItemData:{
  
},
resVSItemBtnContainer:{
  
},
  
});

export default DCCompetenciaVelocidad;
