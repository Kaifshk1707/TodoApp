import { View, Text, Image } from "react-native";
import React from "react";

const FallBack = () => {
  return (
    <View>
      <Image
        source={require("./../../assets/todo.png")}
        style={{ width: 300, height: 300 }}
      />
    </View>
  );
};

export default FallBack;
