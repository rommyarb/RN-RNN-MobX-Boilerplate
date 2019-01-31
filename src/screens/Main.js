import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, TextInput } from "react-native";
import { observer, inject } from "mobx-react";

@inject("auth")
@observer
class Main extends Component<Props> {
  _onChangeName = input => {
    this.props.auth.onChangeName(input);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native + React Native Navigation + MobX Boilerplate!
        </Text>
        <TextInput
          style={{
            width: "50%",
            height: 40,
            borderColor: "#ccc",
            borderRadius: 6,
            borderWidth: 1,
            textAlign: "center",
            marginBottom: 12,
            backgroundColor: "white"
          }}
          placeholder="Enter your name"
          onChangeText={this._onChangeName}
          value={this.props.auth.name}
        />
        <Text>github.com/rommyarb</Text>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
