import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { height, width } = Dimensions.get("window");
export const Styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    marginTop: StatusBar.currentHeight,
  },
  appBar: {
    padding: 15,
  },
  bodySection: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  Btn: {
    marginVertical: 30,
    borderWidth: 3,
    width: 100,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "rgb(225, 225, 225)",
    backgroundColor: "#f3f3f3",
    elevation: 5,
  },
  camera: {
    height: "100%",
    width: "100%",
  },
  buttonContainer: {
    borderColor: "#fff",
    position: "relative",
    width: "100%",
    height: "100%",
  },
  closeBtn:{
      padding:15
  },
  rotateBtn: {
    height: 60,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#fff",
    position: "absolute",
    bottom: 20,
    right: 10,
  },
  clickBtnMain: {
    height: 80,
    width: 80,
    borderWidth: 3,
    borderColor: "rgb(225, 225, 225)",
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    borderRadius: 100 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  clickBtn: {
    height: "90%",
    width: "90%",
    backgroundColor: "#990000",
    borderRadius: 100 / 2,
  },
});
