import React from "react";
import { View, Button } from "react-native";


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button title="Take a Pic!!" onPress={() => navigate('Camera', { name: 'Camera' })}/>
      </View>
    );
  }
}

export default HomeScreen;