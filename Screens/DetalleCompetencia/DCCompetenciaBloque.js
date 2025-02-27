import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

import api from "../../services/api";

const DCCompetenciaBloque = () => {
  const route = useRoute();
  const { idCom, depAdded } = route.params; // Accede a los parámetros de la ruta

  const navigation = useNavigation();
  const [competencia, setCompetencia] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedTab, setSelectedTab] = useState("detalle"); // Estado para manejar la pestaña seleccionada
  const [isResultadosActive, setIsResultadosActive] = useState(true);
  const [isFinalesActive, setIsFinalesActive] = useState(true);
  //const [isAddDeportistasActive, setIsAddDeportistasActive] = useState(true);

  const [addDepsComplete, setAddDepsComplete] = useState(false);

  const [registrosResultados, setRegistrosResultados] = useState([]);
  const [regsResFinal, setRegsResFinal] = useState([]);

  const [isTerminarClasifEnabled, setIsTerminarClasifEnabled] = useState(true);
  const [isTerminarFinalEnabled, setIsTerminarFinalEnabled] = useState(true);

  const getCompetencia = async (id) => {
    try {
      const response = await api.get(`/api/Competencia/${id}`);
      console.log("Respuesta de la API:", response.data);
      //setCompetencia(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo obtener la competencia msg2");
    } finally {
      setLoading(false);
    }
  };

  const procesarResultadosVSFinal = async (resEntrada) => {
    try {
      const resFinal = resEntrada.filter((res) => res.etapa == 2);

      console.log(
        "Resultados de entrada resFinal: 🎃🎃🎃🎃🎃🎃🎃",
        JSON.stringify(resFinal)
      );

      console.log(
        "Resultados resFinal: 🔶🔶🔶🔶🔶🔶🔶🔶",
        JSON.stringify(resFinal)
      );
      setRegsResFinal(resFinal);
    } catch (error) {
      console.error("Error al procesar los resultados vs: ", error);
    }
  };

  const getRegistrosResultados = async (id) => {
    try {
      api
        .get(`/api/RegistroResultado/ByIdCom/${id}`)
        .then((response) => {
          console.log(
            "Registros desde de la API: _>_>_>_>_>_>_>",
            response.data
          );

          setRegistrosResultados(response.data.filter((res) => res.etapa == 1).sort(
            (a, b) =>a.orden - b.orden
          ));

          if (registrosResultados.length > 0) {
            setIsResultadosActive(true);
          }
          const noCompletados = registrosResultados.filter(
            (res) => res.registroCompleto == false
          );
          procesarResultadosVSFinal(response.data);
        })
        .catch((error) => {
          console.error(
            "Error al obtener los registros de resultados: _>_>_>_>_>_>_>",
            error
          );
        });
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo obtener la competencia msg1");
    } finally {
      setLoading(false);
    }
  };

  const generarResultados = async (resultadosEntrada) => {
    try {
      return await api.post(
        "/api/RegistroResultado/BulkCreate",
        resultadosEntrada
      );
    } catch (error) {
      console.error("Error al generar los resultados: ", error);
    }
  };
  
  const generarResultadosSiguienteEtapa = async (peticionEtapa) => {
    try {
      return await api.post(
        "/api/RegistroResultado/GenerarRegistrosBouldersEtapaSiguiente",
        peticionEtapa
      );
    } catch (error) {
      console.error("Error al generar los resultados: ", error);
    }
  };

  const handleTerminarFaseClasif = async () => {
    setIsFinalesActive(true);
    const noCompletados = registrosResultados.filter(
      (res) => res.registroCompleto == false
    );
    if (noCompletados.length > 0) {
      Alert.alert("Error", "No se han completado todos los registros");
      return;
    } else {
      console.log("Completados todos los registros");

      
      const resultsFinales = {
        "IdCom": idCom,
        "EtapaActual": 1,
        "EtapaSiguiente": 2,
        "NumeroClasificados": 6,
        "TipoRegistro": 3
      }

      const generarFinalesResult = await generarResultadosSiguienteEtapa(resultsFinales);
      await getRegistrosResultados(idCom);
      Alert.alert("Fase Clasificatoria Terminada", "Se han generado los resultados de la siguiente etapa");
    }
    //setIsTerminarClasifEnabled(false)
  };

  const handleTerminarFinal = async () => {
    // setIsFinalesActive(true);

    const noCompletados = regsResFinal.filter(
      (res) => res.registroCompleto == false
    );
    if (noCompletados.length > 0) {
      Alert.alert("Error", "No se han completado todos los registros");
      return;
    } else {
      const ganador = regsResFinal.find((res) => res.orden == 1);
      console.log("Ganador: 😒😒😒😒😒", ganador);
  
      Alert.alert(
        "Ganador",
        "El ganador es: " +
          ganador.deportista.nombresDep +
          " " +
          ganador.deportista.apellidosDep
      );
  
      setIsTerminarFinalEnabled(false);
    }

    
  };

  const handleEditarRegistroRes = (registro) => {
    navigation.navigate("DCEditarRegistroBloque", {
      idCom: idCom,
      idRegistroResultado: registro.idRegistroResultado,
    });
  };

  useFocusEffect(
    React.useCallback(() => {
      const handleGoback = async () => {
        try {
          console.log("commmming backkkkkkkkkkkkkkkkkkkkkkkkkkkk");
          console.log("myyyyyyyyyyyyyyyyyy route.params:", route.params); // Ver los parámetros recibidos
          if (route.params && route.params.regUpdated) {
            console.log("RegUpdated ❤️❤️❤️❤️❤️❤️:", route.params.regUpdated);
            await getRegistrosResultados(idCom);
          } else {
            if (route.params && route.params.depAdded) {
              console.log("depAdded 🤣🤣🤣🤣🤣🤣:", route.params.depAdded);
            }
          }

          setLoading(true); // Re-inicia el estado de carga al recibir el foco
          getCompetencia(idCom)
            .then((data) => {
              setCompetencia(data);
            })
            .catch((error) => {
              console.error(
                "Error al obtener la competencia en useFocusEffect:",
                error
              );
            });
        } catch (error) {
          console.error(
            "Error al obtener la competencia en useFocusEffect:",
            error
          );
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
        if (depAdded && addDepsComplete == false && competencia) {
          if (competencia && competencia.competenciaDeportistas.length > 0) {
            setIsResultadosActive(true);
            //setIsAddDeportistasActive(false);
            console.log("competencia.competenciaDeportistas");
            console.log(competencia);
            console.log("competencia.competenciaDeportistas.length");
            console.log(competencia.competenciaDeportistas.length);

            const resultsClasif = competencia.competenciaDeportistas.map(
              (dep, index) => {
                console.log(
                  "Dep competenciacompetenciacompetenciacompetencia:",
                  dep
                ); // Ver el deportista
                return {
                  idCom: idCom,
                  idDep: dep.deportista.idDep,
                  etapa: 1,
                  tipoRegistro: 3,
                  orden: 0,
                  idMod: competencia.idMod,
                };
              }
            );
            console.log("Resultados Clasif gennnnnnnnnnnnnnn:", resultsClasif); // Ver los resultados

            const generarResult = await generarResultados(resultsClasif);
            setAddDepsComplete(true);
            console.log("Resultados Clasif gennnnnnnnnnnnnnn:", generarResult); // Ver los resultados
          }
        }
        await getRegistrosResultados(idCom);
      } catch (error) {
        console.error("Error al generar los resultados:", error);
      }
    };

    handleUpdates(); // Ejecutar la función async dentro del useEffect

    ///////////////////////////////////////////////////////////////
  }, [competencia]);

  const handleAgregarDeportistas = () => {
    navigation.navigate("DCAgregarDeportistas", { idCom: idCom });
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "detalle":
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>Nombre de la Competencia:</Text>
            <Text style={styles.value}>{competencia.nombreCom}</Text>
            <Text style={styles.label}>Modalidad Competencia:</Text>
            <Text style={styles.value}>
              {competencia.idMod == 1
                ? "Velocidad"
                : competencia.idMod == 2
                ? "Bloque"
                : competencia.idMod == 3
                ? "Vias"
                : "Combinada"}
            </Text>
          </View>
        );
      case "deportistas":
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
            <TouchableOpacity
              style={[
                styles.addButton,
                competencia.competenciaDeportistas.length > 0 &&
                  styles.inactiveTab,
              ]}
              onPress={handleAgregarDeportistas}
              disabled={competencia.competenciaDeportistas.length > 0}
            >
              <Text style={styles.addButtonText}>Agregar Deportistas</Text>
            </TouchableOpacity>
          </View>
        );
      case "resultados":
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>
              Resultados:{" "}
              {registrosResultados.filter((r) => r.registroCompleto).length}/
              {registrosResultados.length}
            </Text>
            <View style={styles.resultadosListContainer}>
              {registrosResultados.length > 0 && (
                <FlatList
                  data={registrosResultados}
                  keyExtractor={(item) => item.idRegistroResultado.toString()}
                  renderItem={renderResultadoItem}
                  contentContainerStyle={{}}
                />
              )}
            </View>
            <TouchableOpacity
              style={[
                styles.addButton,
                !isTerminarClasifEnabled && styles.inactiveTab,
              ]}
              onPress={handleTerminarFaseClasif}
              disabled={!isTerminarClasifEnabled}
            >
              <Text style={styles.addButtonText}>Terminar Fase</Text>
            </TouchableOpacity>
          </View>
        );
      case "finales":
        return (
          <View style={styles.faseContainer}>
            <Text style={styles.label}>
              Etapa Final: {regsResFinal.filter((r) => r.etapaCompleta).length}/
              {regsResFinal.length}
            </Text>

            <View style={styles.resultadosListContainer}>
              {regsResFinal.length > 0 && (
                <FlatList
                  data={regsResFinal}
                  keyExtractor={(item) => item.idRegistroResultado.toString()}
                  renderItem={renderResultadoItem}
                  contentContainerStyle={{}}
                />
              )}
            </View>
            <TouchableOpacity
              style={[
                styles.addButton,
                !isTerminarFinalEnabled && styles.inactiveTab,
              ]}
              onPress={handleTerminarFinal}
              disabled={!isTerminarFinalEnabled}
            >
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
        {item.deportista
          ? item.deportista.nombresDep + " " + item.deportista.apellidosDep
          : "Nombre no disponible"}
      </Text>
    </View>
  );

  const renderResultadoItem = ({ item }) => {
    // Contar los tops y zonas y los intentos para cada uno
    
    return (
      <View style={styles.resItem}>
        {item && (
          <View style={styles.resItemContainer}>
            <View style={styles.resItemData}>
              <Text style={styles.label}>
                Nombres: {item.deportista.nombresDep}
              </Text>
              <Text style={styles.label}>
                Apellidos: {item.deportista.apellidosDep}
              </Text>
              {item.orden<100 &&
                <Text style={styles.label}>
                Puesto: {item.orden}
              </Text>}
              {/* Mostrar formato de Tops y Zonas */}
              <Text style={styles.label}>
                {item.totalTops}T {item.totalZonas}z {item.intentosTops} {item.intentosZonas}
              </Text>
            </View>
            <View style={styles.resBtnContainer}>
              <TouchableOpacity
                // style={[
                //   styles.buttonResult,
                //   item.registroCompleto 
                //   && styles.inactiveTab,
                // ]}
                style={[
                  styles.buttonResult
                ]}
                onPress={() => handleEditarRegistroRes(item)}
                // disabled={item.registroCompleto}
              >
                <Text style={[styles.buttonResultText]}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  };

  if (loading) {
    return <Text style={styles.loadingText}>Cargando...</Text>;
  }

  if (error) {
    return <Text style={styles.errorText}>{error}</Text>;
  }

  if (!competencia || competencia.length === 0) {
    return (
      <Text style={styles.emptyText}>No hay competencia disponibles.</Text>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>Detalle Competencia Bloque</Text>
        <TouchableOpacity
          style={[
            styles.tab,
            selectedTab === "detalle" && styles.selectedTab,
            selectedTab !== "detalle" && styles.activeTab, // Si está activo pero no seleccionado, aplica el estilo de activo
          ]}
          onPress={() => setSelectedTab("detalle")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "detalle" && styles.selectedTabText, // Si está seleccionado, cambia el color del texto
              selectedTab !== "detalle" && styles.activeTabText, // Si está activo pero no seleccionado, cambia el color del texto
            ]}
          >
            Detalle
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            { flex: 1 },
            selectedTab === "deportistas" && styles.selectedTab,
            selectedTab !== "deportistas" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("deportistas")}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "deportistas" && styles.selectedTabText,
              selectedTab !== "deportistas" && styles.activeTabText,
            ]}
          >
            Deportistas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            { flex: 1 },
            selectedTab === "resultados" && styles.selectedTab,
            !isResultadosActive && styles.inactiveTab,
            isResultadosActive &&
              selectedTab !== "resultados" &&
              styles.activeTab,
          ]}
          onPress={() => setSelectedTab("resultados")}
          disabled={!isResultadosActive}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "resultados" && styles.selectedTabText,
              !isResultadosActive && styles.inactiveTabText,
              isResultadosActive &&
                selectedTab !== "resultados" &&
                styles.activeTabText,
            ]}
          >
            Resultados Clasif.
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            { flex: 1 },
            selectedTab === "finales" && styles.selectedTab,
            !isFinalesActive && styles.inactiveTab,
            isFinalesActive && selectedTab !== "finales" && styles.activeTab,
          ]}
          onPress={() => setSelectedTab("finales")}
          disabled={!isFinalesActive}
        >
          <Text
            style={[
              styles.tabText,
              selectedTab === "finales" && styles.selectedTabText,
              !isFinalesActive && styles.inactiveTabText,
              isFinalesActive &&
                selectedTab !== "finales" &&
                styles.activeTabText,
            ]}
          >
            Resultados Final
          </Text>
        </TouchableOpacity>
      </View>
      {renderTabContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  detailsButton: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  tab: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },

  competencia: {
    padding: 15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
    // marginBottom: 15,
  },
  label: {
    fontWeight: "bold",
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
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    position: "absolute",
    bottom: 20, // El botón se mantendrá en el fondo
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  errorText: {
    textAlign: "center",
    color: "red",
    fontSize: 18,
    marginTop: 20,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 3, // Este es el 75% del contenedor
    marginRight: 10,
    // Aquí ajustamos el tamaño del texto para que se ajuste al ancho disponible
    flexShrink: 1,
    flexWrap: "wrap",
  },
  detailsButton: {
    flex: 1, // El 25% restante
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  activeTab: {
    backgroundColor: "#cccccc", // Color de fondo para botones activos
  },
  inactiveTab: {
    backgroundColor: "#D3D3D3", // Color de fondo para botones desactivados
  },
  selectedTab: {
    backgroundColor: "#007bff", // Color de fondo para el botón seleccionado
  },
  activeTabText: {
    color: "#000", // Color de texto para botones activos
    fontWeight: "bold",
  },
  inactiveTabText: {
    color: "#A9A9A9", // Color de texto para botones desactivados
  },
  selectedTabText: {
    color: "#fff", // Color de texto para el botón seleccionado
    fontWeight: "bold",
  },
  buttonResult: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    elevation: 2,
    flexGrow: 1,
    marginHorizontal: 5,
  },
  buttonResultText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  resItemContainer: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 2,
  },
  resItemData: {
    flex: 1,
    width: "90%",
  },
  resBtnContainer: {
    flex: 1,
    paddingVertical: 15,
  },
  faseContainer: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    flex: 1,
  },
  resultadosListContainer: {
    flex: 1,
    marginBottom: 60,
  },
  resVSItem: {
    flexDirection: "column",
    //flex:1 ,
    padding: 5,
    // marginVertical: 10,
    // padding: 10,
    backgroundColor: "#ff0000",
    // borderColor : '#000',
    // borderWidth :1,
    // borderRadius: 10,
    // elevation: 2,
  },
  resVSItemContainer: {
    flex: 1,
    flexDirection: "row",
  },
  resVSItemDepContainer: {
    flex: 1,
    flexDirection: "column",
  },
  resVSItemData: {},
  resVSItemBtnContainer: {},
});

export default DCCompetenciaBloque;
