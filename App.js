import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Texto from "./Texto";
export default function App() {
  return (
    <View style={styles.container}>
      <Texto limite={255} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#c8b6ff",
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight:20,
    margin: 0
    
  },
});
