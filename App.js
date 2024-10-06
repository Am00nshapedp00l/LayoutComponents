/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import ToDoList from './src/ToDoList';
import ToDoForm from './src/ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2']);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ToDoList tasks={tasks} />
      <ToDoForm onAddTask={addTask} />
    </View>
  );
};

export default App;

