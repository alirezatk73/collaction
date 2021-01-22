import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./AddUserStyles";
import { Helpers } from "App/Theme";
import { Input, SubmitBtn } from "../../Components";

function AddUserScreen() {
  const [state, setstate] = useState({
    name: "",
    number: "",
    city: null,
  });

  return (
    <View style={[Helpers.fill]}>
      <SafeAreaView />
      <Text style={styles.text}>Contact Register</Text>
      <View style={[Helpers.center, { marginTop: "20%" }]}>
        <Input
          placeholder="Name"
          value={state.name}
          onChangeText={(name) => setstate((prev) => ({ ...prev, name }))}
        />
        <Input
          placeholder="Phone number"
          value={state.number}
          onChangeText={(number) => setstate((prev) => ({ ...prev, number }))}
        />
        <Input
          placeholder="City"
          value={state.city}
          onChangeText={(city) => setstate((prev) => ({ ...prev, city }))}
        />
      </View>
      <SubmitBtn onPress={() => {}} />
    </View>
  );
}

export default AddUserScreen;
