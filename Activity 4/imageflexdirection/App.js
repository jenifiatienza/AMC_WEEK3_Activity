import React from 'react'
import {StyleSheet, TextInput, Image, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [Text, onChangeText] = React.useState('Name');
  const [Age, onChangeNumber] = React.useState ('');
  const [Address, onChangeAddress] = React.useState ('');      
  const [School, onChangeSchool] = React.useState ('');
  const [Course, onChangeCourse] = React.useState ('');
  const [Email, onChangeEmail] = React.useState ('');
  const [Contact, onChangeContact] = React.useState ('');
  const [aboutMe, onChangeAboutMe] = React.useState('About me');
 
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://th.bing.com/th/id/OIF.oBFqKElPhZ5di1Pq2Fh4Tw?w=190&h=190&c=7&r=0&o=5&pid=1.7',
            }}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={Text}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={Age}
              placeholder="Age"
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeAddress}
              value={Address}
              placeholder="Address"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeSchool}
              value={School}
              placeholder="School"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeCourse}
              value={Course}
              placeholder="Course"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={Email}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeContact}
              value={Contact}
              placeholder="Contact NO:"
              keyboardType="phone-pad"
            />
            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={100}
              onChangeText={text => onChangeAboutMe(text)}
              value={aboutMe}
              style={styles.textArea}
              placeholder="About me"
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textArea: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
});

export default TextInputExample;