import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList() {
  return (
    <ScrollView>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do laundry</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Go to gym</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Walk dog</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#A52A2A',
    backgroundColor: '#A52A2A',
  },
  completed: {
    backgroundColor: '#FAEBD7',
  },
  taskText: {
    fontSize: 25,
    fontStyle: 'italic',
  },
});

export default ToDoList;
