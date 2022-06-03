import { Text, View, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { Styles } from "./Styles";
import Icon from "react-native-vector-icons/FontAwesome";
import { Camera, CameraType } from "expo-camera";
import * as FaceDetector from "expo-face-detector";

const ScreenB = ({ navigation }) => {
  const [PermissionsCam, setPermission] = React.useState(false);
  const [cameraRef, setCameraRef] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);

  const handleCameraClick = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setPermission(true);
    }
  };

  const handleCapture = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log("check values", photo);
    }
  };

  return PermissionsCam ? (
    <View style={Styles.container}>
      <Camera
        style={Styles.camera}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
        // onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.accurate,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.none,
          runClassifications: FaceDetector.FaceDetectorClassifications.none,
          minDetectionInterval: 100,
          tracking: true,
        }}
      >
        <View style={Styles.buttonContainer}>
        <TouchableOpacity
            style={Styles.closeBtn}
            onPress={() => setPermission(false)}
          >
            <Icon name="close" size={38} color="#3e3e3e" />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.clickBtnMain}
            onPress={() => handleCapture()}
          >
            <View style={Styles.clickBtn} />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.rotateBtn}
            onPress={() => {
              setType(
                type === CameraType.back ? CameraType.front : CameraType.back
              );
            }}
          >
            <Icon name="refresh" size={38} color="#fff" />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  ) : (
    <View style={Styles.container}>
      <View style={Styles.appBar}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="chevron-left" size={28} color="#3e3e3e" />
        </TouchableOpacity>
      </View>
      <View style={Styles.bodySection}>
        <Text style={Styles.Title}>Camera Functionality</Text>
        <Pressable style={Styles.Btn} onPress={() => handleCameraClick()}>
          <Icon name="camera" size={30} color="#900" />
        </Pressable>
      </View>
    </View>
  );
};
export default ScreenB;
