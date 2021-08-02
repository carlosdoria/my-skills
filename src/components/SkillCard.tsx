import React from 'react';
import {Text, TouchableOpacity, StyleSheet, TouchableOpacityProps} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string
}

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    marginVertical: 10,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#1f1e25',
    borderRadius: 50,
  },
  textSkill: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
});
