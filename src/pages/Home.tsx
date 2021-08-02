/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';
// SafeAreaView -> utilizado no IOS para as quetões de margem

interface INewSkill {
  id: string;
  name: string
  date?: Date
}

export function Home () {
  const [ newSkill, setNewSkill ] = useState('');
  const [ mySkills, setMySkills ] = useState<INewSkill[]>([]);
  const [ gretting, setGretting ] = useState('');

  function handleNewAddSkill () {
    const data = {
      id: String(new Date().getHours()),
      name: newSkill
    }
    setMySkills(oldState => [ ...oldState, data ]);
    setNewSkill('');
  }

  function handleRemoveSkill (id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if(currentHour < 12) {
      setGretting('Good morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good afternoon')
    } else {
      setGretting('Good night')
    }
  }, [])
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Welcome, Carlos
        </Text>

        <Text style={{ color: '#fff'}}>
          {gretting}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          value={newSkill}
          onChangeText={setNewSkill}
        />

        <Button
          title='Add Skill'
          onPress={handleNewAddSkill}
        />

        <Text style={[ styles.title, { marginVertical: 50 } ]}>
          My Skills
        </Text>
        <FlatList
          data={mySkills}
          keyExtractor={item => item.id}
          renderItem={ ({ item }) => (
            <SkillCard 
              skill={item.name}
              onPress={() => handleRemoveSkill(item.id)}  
            />
          )}
        />

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: '#121015',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    marginTop: 30,
    padding: Platform.OS === 'ios' ? 15 : 10,
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#1f1e25',
    borderRadius: 7,
  },
});
