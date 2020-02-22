import React, {useCallback, useState} from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import NavBar from './src/components/NavBar';
import {AddTodo} from './src/components/AddTodo';
import {Todo} from './src/components/Todo';

export default function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = useCallback((title) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };

    setTodos(prev => [newTodo, ...prev]);
  }, []);

  return (
    <View>
      <NavBar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <Todo todo={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  text: {
  }
});