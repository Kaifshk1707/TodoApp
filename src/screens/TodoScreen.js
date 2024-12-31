import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";
import FallBack from "../components/FallBack";

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);

  // Render a single todo item
  const renderTodo = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "#90A3EB",
          paddingHorizontal: 6,
          paddingVertical: 8,
          borderRadius: 8,
          marginBottom: 12,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <Text
          style={{
            color: "#90A",
            fontSize: 16,
            fontWeight: "600",
            flex: 1,
          }}
        >
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton icon="pencil" iconColor="#90A" />
          <IconButton
            icon="trash-can"
            iconColor="#90A"
            onPress={() => handleTodoDelete(item.id)}
          />
        </View>
      </View>
    );
  };

  // Delete a todo item
  const handleTodoDelete = (id) => {
    const updatedTodoList = todolist.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  // Add a new todo item
  const handleAddTodo = () => {
    setTodoList([...todolist, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  return (
    <View
      style={{
        marginHorizontal: "5%",
        marginTop: "5%",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 8,
          color: "#90A",
          textAlign: "center",
          backgroundColor: "#90A3EB",
          borderRadius: 10,
        }}
      >
        TodoScreen
      </Text>
      <TextInput
        style={{
          borderColor: "#90A",
          borderWidth: 1,
          borderRadius: 6,
          paddingVertical: 16,
          paddingHorizontal: 20,
          fontSize: 16,
          marginBottom: 12,
        }}
        placeholder="Add a task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#90A",
          borderRadius: 6,
          paddingVertical: 12,
          alignItems: "center",
          marginBottom: 16,
        }}
        onPress={handleAddTodo}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
      <FlatList data={todolist} renderItem={renderTodo} />
      {todolist.length < 0 && <FallBack />}
    </View>
  );
};

export default TodoScreen;
