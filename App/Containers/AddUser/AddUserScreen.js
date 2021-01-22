import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styles from "./AddUserStyles";
import { Helpers } from "App/Theme";
import { Input, SubmitBtn } from "../../Components";
import { userService } from "../../Services/UserService";
import { useRoute } from "@react-navigation/native";
import Strings from "../../Values/Strings";

function AddUserScreen({ navigation }) {
  const params = useRoute().params;

  const [state, setstate] = useState({
    name: "",
    number: "",
    city: null,
  });
  useEffect(() => {
    if (params?.id) {
      setUserById(params.id);
    }
  }, [params]);

  const setUserById = async (id) => {
    const user = await userService.fetchUserById(id);
    setstate((prev) => ({
      ...prev,
      name: user.name,
      number: user.phone,
      city: user.city,
    }));
  };

  async function userRegister() {
    await userService.postUser(state);
    navigation.navigate(Strings.Routes.HOME_SCREEN);
  }
  async function userUpdate() {
    await userService.updateUser(params.id, state);
    navigation.navigate(Strings.Routes.HOME_SCREEN);
  }

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

      <SubmitBtn
        isEdit={params?.isEdit}
        onPress={params?.isEdit ? userUpdate : userRegister}
      />
    </View>
  );
}

export default AddUserScreen;
