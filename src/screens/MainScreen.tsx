import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {TTodo} from '../types';
import {AddTodo} from '../components/AddTodo';
import {Todo} from '../components/Todo';

type Props = {
  todos: TTodo[];
  addTodo: (title: string) => void;
  onRemoveTodo: (id: string) => void;
  onTouchTodo: (id: string) => void;
}
export const MainScreen: React.FC<Props> = ({addTodo, todos, onRemoveTodo, onTouchTodo}) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Todo todo={item} onRemove={onRemoveTodo} onTouch={onTouchTodo} />}
      />
    </View>
  )
};

const styles = StyleSheet.create({

});