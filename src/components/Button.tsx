import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps, StyleSheet} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      { ...rest}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#a370f7',
    borderRadius: 7,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});
