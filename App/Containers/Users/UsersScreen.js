import React, { useEffect } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import styles from "./UsersStyles";
import UsersActions from "../../Stores/Users/Actions";
import { Helpers } from "App/Theme";
import { UserItem, Plus } from "../../Components";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Strings from "../../Values/Strings";
import { userService } from "../../Services/UserService";

const UsersScreen = () => {
  const { navigate } = useNavigation();
  const users = useSelector((state) => state.users.users);
  const [data, setdata] = React.useState(users);

  useFocusEffect(
    React.useCallback(async () => {
      const newUsers = await userService.fetchUsers();
      setdata(newUsers);
    }, [])
  );
  async function deleteUser(id) {
    await userService.deleteUser(id);
    const newUsers = await userService.fetchUsers();
    setdata(newUsers);
  }

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
            onDelete={() => deleteUser(item.id)}
            onEdit={() =>
              navigate(Strings.Routes.ADD_USER, { id: item.id, isEdit: true })
            }
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
