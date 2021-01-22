import React from "react";
import { View } from "react-native-animatable";
import { Text, TouchableOpacity } from "react-native";
import { Delete, Edit, User } from "App/Assets/Images/svg";
import PropTypes from "prop-types";
import styles from "./UserItemStyles";

const UserItem = ({ item, onDelete, onEdit, index }) => {
  return (
    <View
      useNativeDriver
      animation={"slideInRight"}
      duration={1000}
      delay={index * 7}
      style={styles.row}
    >
      <View style={styles.nameIconWrap}>
        <User />
        <Text style={styles.name}>{item.name}</Text>
      </View>
      <View style={styles.iconWrap}>
        <TouchableOpacity style={{ paddingHorizontal: 20 }} onPress={onEdit}>
          <Edit />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Delete />
        </TouchableOpacity>
      </View>
    </View>
  );
};

UserItem.propTypes = {
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
  item: PropTypes.object,
};
export default UserItem;
