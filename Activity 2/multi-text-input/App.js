import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Name:');
  const [AGE, onChangeAGE] = React.useState('');
  const [ADDRESS, onChangeADDRESS] = React.useState('');
  const [SCHOOL, onChangeSCHOOL] = React.useState('');
  const [COURSE, onChangeCOURSE] = React.useState('');
  const [EMAIL, onChangeEMAIL] = React.useState('');
  const [CONTACTNO, onChangeCONTACTNO] = React.useState('');
  const [ABOUT, onChangeABOUTME] = React.useState('');
  


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAGE}
          value={AGE}
          placeholder="AGE"
          keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeADDRESS}
        value={ADDRESS}
        placeholder="ADDRESS"
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeSCHOOL}
        value={SCHOOL}    
        placeholder="SCHOOL"
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeCOURSE}
        value={COURSE}
        placeholder="COURSE"
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeEMAIL}
        value={EMAIL}
        placeholder="EMAIL"
        keyboardType="numeric"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeCONTACTNO}
        value={CONTACTNO}
        placeholder="CONTACT NO"
        keyboardType="numeric"
        />
         <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={text => onChangeABOUTME(text)}
          value={ABOUT}
          style={styles.textInput}
          placeholder='ABOUT ME'
        />


      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;