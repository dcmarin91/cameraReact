import { createStackNavigator, createAppContainer } from "react-navigation";
import  HomeScreen  from "./HomeScreen";
import CameraScreen from "./CameraScreen"

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen }
});

const App = createAppContainer(AppNavigator);

export default App;
