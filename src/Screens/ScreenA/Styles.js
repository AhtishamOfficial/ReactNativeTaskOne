import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { height, width } = Dimensions.get("screen");
export const Styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#fff",
    marginTop: StatusBar.currentHeight,
  },
  appbar: {
    width: "100%",
    height: 100,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  navigatBtn: {
    borderWidth: 1,
    width: 80,
    height: 40,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    backgroundColor: "#fff",
    borderColor: "rgba(3,3,3,0.4)",
  },
  Body: {
    width: "100%",
    height: "70%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  TopSection: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  toggleBtn: {
    borderWidth: 1,
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    borderRadius: 10,
    borderColor: "rgba(225, 225, 225, 0.6)",
  },
  Btntxt: {
    fontWeight: "700",
    fontSize: 18,
  },
  MidSection: {
    width: "100%",
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  Grid: {
    height: 100,
    borderWidth: 2,
    borderColor: "rgb(225, 225, 225)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
