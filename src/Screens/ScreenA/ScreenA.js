import { Text, View, Pressable } from "react-native";
import React from "react";
import { Styles } from "./Styles";

const ScreenA = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false);
  const [checkedSec, setCheckedSec] = React.useState(false);

  return (
    <View
      style={[
        Styles.container,
        checked && { backgroundColor: "#8B0000" },
        checkedSec && { backgroundColor: "#00008B" },
      ]}
    >
      <View style={Styles.appbar}>
        <Pressable
          style={Styles.navigatBtn}
          onPress={() => navigation.navigate("ScreenTwo")}
        >
          <Text>Next</Text>
        </Pressable>
      </View>
      <View style={Styles.Body}>
        <View style={Styles.TopSection}>
          <Pressable
            style={[
              Styles.toggleBtn,
              { backgroundColor: checked ? "#fff" : "#8B0000" },
            ]}
            onPress={() => setChecked(!checked)}
          >
            <Text
              style={[Styles.Btntxt, { color: checked ? "#3e3e3e" : "#fff" }]}
            >
              {" "}
              {checked ? "White" : "Red"}
            </Text>
          </Pressable>
          <Pressable
            style={[
              Styles.toggleBtn,
              { backgroundColor: checkedSec ? "#fff" : "#00008B" },
            ]}
            onPress={() => setCheckedSec(!checkedSec)}
          >
            <Text
              style={[
                Styles.Btntxt,
                { color: checkedSec ? "#3e3e3e" : "#fff" },
              ]}
            >
              {checkedSec ? "White" : "Blue"}
            </Text>
          </Pressable>
        </View>
        <View style={Styles.MidSection}>
          <View style={[Styles.Grid, { width: "22%" }]}>
            <Text>SMALL</Text>
            <Text>BOX</Text>
          </View>
          <View style={[Styles.Grid, { width: "68%" }]}>
            <Text> LARGE BOX</Text>
          </View>
        </View>
        <View style={Styles.MidSection}>
          <View style={[Styles.Grid, { width: "22%" }]}>
            <Text>SMALL</Text>
            <Text>BOX</Text>
          </View>
          <View style={[Styles.Grid, { width: "68%" }]}>
            <Text> LARGE BOX</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScreenA;
