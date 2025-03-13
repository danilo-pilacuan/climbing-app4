import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  Switch,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import api from "../../services/api";

const DCEditarRegistroResultado = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { idCom, idRegistroResultado } = route.params;
  const [loading, setLoading] = useState(true);

  const [registroResultado, setRegistroResultado] = useState({});
  const [topSeleccionado, setTopSeleccionado] = useState({
    maxEscala1: false,
    maxEscala2: false,
  });
  const [competencia, setCompetencia] = useState();

  const fetchRegistroResultado = async () => {
    try {
      const response = await api.get(
        `/api/RegistroResultado/${idRegistroResultado}`
      );
      console.log(
        "Registro de resultado: 😈😈😈😈😈",
        JSON.stringify(response.data)
      );
      setRegistroResultado(response.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo cargar el registro de resultado");
    } finally {
      setLoading(false);
    }
  };

  const getCompetencia = async (id) => {
    try {
      const response = await api.get(`/api/Competencia/${id}`);
      console.log(
        "Respuesta de la API: 🦑🦑🦑🦑🦑🎃🎃🎃🎃",
        JSON.stringify(response.data)
      );
      //setCompetencia(response.data);
      return response.data;
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo obtener la competencia msg2");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistroResultado();
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
  }, []);

  const handleInputChange = (key, value) => {
    setRegistroResultado({ ...registroResultado, [key]: value });
  };

  const handleCheckboxChange = (key) => {
    setTopSeleccionado((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));

    setRegistroResultado((prev) => ({
      ...prev,
      [key]: !topSeleccionado[key] ? prev.maxPresas.toString() : "", // Si se activa, se asigna maxPresas
    }));
  };

  const handleToggleTop = (key) => {
    setTopSeleccionado((prev) => ({ ...prev, [key]: !prev[key] }));
    if (!topSeleccionado[key]) {
      // Si se activa Top, se borra el valor de maxEscala correspondiente
      setRegistroResultado((prev) => ({
        ...prev,
        [key]: registroResultado.maxPresas.toString(),
      }));
    }
  };

  const handleGuardarCambios = async () => {
    try {
      console.log(
        "Guardando cambios en registro de resultado: 👽👽🤢🤢",
        JSON.stringify(registroResultado)
      );
      registroResultado.registroCompleto = true;

      const bodyUpdate = {
        idRegistroResultado: registroResultado.idRegistroResultado,
        MaxEscala1: registroResultado.maxEscala1,
        MaxEscala2: registroResultado.maxEscala2,
      };

      console.log("Body Update: 👽👽🐟🐟🐟", JSON.stringify(bodyUpdate));

      await api.put(`/api/RegistroResultado/updatevias`, bodyUpdate);
      Alert.alert("Éxito", "Registro actualizado correctamente");
      navigation.goBack();
      if (competencia.idMod == 3) {
        navigation.navigate("DCCompetenciaVias", {
          idCom: idCom,
          regUpdated: true,
        });
      }

      if (competencia.idMod == 4) {
        navigation.navigate("DCCompetenciaCombinada", {
          idCom: idCom,
          regUpdated: true,
        });
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "No se pudo actualizar el registro");
    }
  };

  if (loading) return <Text style={styles.loadingText}>Cargando...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Editar Registro de Resultado Vias</Text>
      {/* <Text style={styles.title}>{competencia.nombreCom}</Text> */}

      {/* Aquí adaptamos la lógica de edición para utilizar los campos de Intento y MaxEscala */}

      <View style={styles.tableContainer}>
        {/* Fila de Intentos */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={styles.headerCell}></Text>
          {[1, 2].map((num) => (
            <Text key={num} style={styles.headerCell}>{`R${num}`}</Text>
          ))}
        </View>

        {/* Fila de MaxEscala */}
        <View style={styles.row}>
          <Text style={styles.labelCell}>Max Escala</Text>
          {[1, 2].map((num) => (
            <>
              <TextInput
                key={`maxEscala${num}`}
                style={styles.inputCell}
                keyboardType="numeric"
                value={registroResultado[`maxEscala${num}`]?.toString() || ""}
                onChangeText={(value) =>
                  handleInputChange(`maxEscala${num}`, value)
                }
                editable={!topSeleccionado[`maxEscala${num}`]}
              />
              <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Top</Text>
                <Switch
                  value={topSeleccionado[`maxEscala${num}`]}
                  onValueChange={() => handleToggleTop(`maxEscala${num}`)}
                />
              </View>
            </>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleGuardarCambios}
      >
        <Text style={styles.saveButtonText}>Guardar Cambios</Text>
      </TouchableOpacity>
    </ScrollView>
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
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  saveButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  // Estilos de la tabla
  tableContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRow: {
    backgroundColor: "#ddd",
    paddingVertical: 8,
  },
  headerCell: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  labelCell: {
    width: 60,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 8,
    borderRightWidth: 1,
    borderColor: "#ccc",
  },
  inputCell: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    margin: 5,
  },
});

export default DCEditarRegistroResultado;
