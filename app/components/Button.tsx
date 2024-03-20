import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonProps {
  text: string;
  width?: number;
  height?: number;
}

export const Button: React.FC<ButtonProps> = ({ text, width = 100, height = 40 }): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.button, { width, height }]}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
