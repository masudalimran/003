import { SafeAreaView, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <StatusBar
        backgroundColor="#eee"
        animated={true}
        barStyle={"dark-content"}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}
