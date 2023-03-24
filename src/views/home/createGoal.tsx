import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { create, deleteAll } from "../../state/goalsSlicer";

const CreateGoal: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity onPress={() => dispatch(create())}>
        <Text>Create goal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(deleteAll())}>
        <Text>Delete All</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateGoal;
