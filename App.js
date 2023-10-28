import React from 'react';
import { View, StyleSheet, PermissionsAndroid } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  // Function to request camera and microphone permissions
  const requestPermissions = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );
      const microphonePermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );

      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        microphonePermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera and microphone permissions granted.');
      } else {
        console.log('Camera and microphone permissions denied.');
      }
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    // Request camera and microphone permissions when the component mounts
    requestPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://ar.gofactz.com/' }} // Replace with your desired URL
        allowsFullscreenVideo={true} // Enable full-screen video support
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
