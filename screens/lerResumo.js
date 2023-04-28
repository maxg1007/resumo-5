import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

export default class LerResumo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground
        source={require("../assets/fundo.jpg")}
        style={Styles.imageBackground}
      >
        <View style={Styles.appTitle}>
          <Text style={Styles.titleText}>
            {this.props.route.params.resumo.titulo}
          </Text>
        </View>
        <ScrollView style={Styles.container}>
          <View style={Styles.cardContainer}>
            <Text style={Styles.imputResumo}>
              {this.props.route.params.resumo.resumo}
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const Styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardContainer: {
    backgroundColor: "rgba(255,255,255,0.5)",
    borderWidth: 2,
    borderColor: "white",
    alignSelf: "center",
    justifyContent: "flex-start",
    borderRadius: 15,
    flexWrap: "wrap",
    flex: 0.8,
    margin: 20,
    flexDirection: "row",
  },
  appTitle: {
    flex: 0.2,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontFamily: "Sweets-smile",
  },
  materiaText: {
    fontFamily: "Sweets-smile",
    fontSize: 30,
  },
  materiaButton: {
    alignSelf: "center",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 20,
    width: 240,
    height: 50,
    alignItems: "center",
    justifyContent: "space-between",
    margin: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  plus: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },

  imputResumo: {
    color: "black",
    fontFamily: "Sweets-smile",
    fontSize: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  enviar: {
    alignSelf: "center",
    backgroundColor: "#547FF0",
    marginTop: 20,
    borderRadius: 20,
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Sweets-smile",
    color: "white",
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
});
