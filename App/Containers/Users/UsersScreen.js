import React, { useEffect } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import styles from "./UsersStyles";
import { Helpers } from "App/Theme";
import { UserItem, Plus } from "../../Components";
import { useNavigation } from "@react-navigation/native";
import Strings from "../../Values/Strings";

const UsersScreen = () => {
  const { navigate } = useNavigation();
  const data = [
    {
      id: 1,
      name: "Fabricio Saciloto",
      phone: 905526796872,
      city: "istanbul,Turkey",
    },
    {
      id: 2,
      name: "Flavio Jesus",
      phone: 556423233692,
      city: "SaoPaulo,Brazil",
    },
    {
      name: "Diego Rodrigues",
      phone: "01967497492",
      city: "Vegas,USA",
      id: 3,
    },
  ];

  useEffect(() => {
    // dispatch(ExampleActions.fetchUser());
  }, []);

  return (
    <View style={[Helpers.fill]}>
      <SafeAreaView />
      <Text style={styles.result}>Test</Text>
      <Text style={styles.text}>Collaction</Text>
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        data={data}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item, index }) => (
          <UserItem
            item={item}
            index={index}
            onDelete={() => {}}
            onEdit={() => {}}
          />
        )}
        ListHeaderComponent={
          <Text style={styles.headerFlatlist}>Contacts</Text>
        }
      />
      <Plus onPress={() => navigate(Strings.Routes.ADD_USER)} />
    </View>
  );
};

export default UsersScreen;
