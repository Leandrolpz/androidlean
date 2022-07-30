import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";

class Texto extends Component {
  // definindo propriedade do elemento
  static propriedade = {
    limite: ''
    
  };

  // manipulando estado de uma string
  state = {
    galoGray: "",
  };

  // criando função
  alteracao =  (galoGray) => {
    if(galoGray.length <= 255){
        this.setState({ galoGray });
    }
  }

  render() {
    const { state, props } = this;

    return (
      <View>
        <TextInput
          multiline={true}
          numberOfLines={3}
          value={state.galoGray}
          onChangeText={this.alteracao}
          style={{ borderColor: "gray", borderWidth: 1 }}
        />
        <Text>
          Total: {state.galoGray.length}/{props.limite}
        </Text>
      </View>
    );
  }
}

export default Texto;
