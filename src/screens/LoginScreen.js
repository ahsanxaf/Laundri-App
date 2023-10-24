import { StyleSheet, Text, View, Platform, SafeAreaView, KeyboardAvoidingView, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.signinTextContainer}>
          <Text style={{fontSize: 20, color: '#662d91', fontWeight: 'bold'}}>Sign In</Text>
          <Text style={{fontSize: 16, marginTop: 8, fontWeight: '600'}}>Sign In to Your Account</Text>
        </View>
        <View style={{marginTop: 20,}}>
          <View style={styles.inputTextContainer}>
            <MaterialCommunityIcons name="email-outline" size={24} color="#002244" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder='Email'
              style={[styles.inputText, {fontSize: email ? 16 : 16}]}
            /></
          View>

          <View style={[styles.inputTextContainer, {marginTop: 20}]}>
            <Ionicons name="key-outline" size={24} color="#002244" />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder='Password'
              secureTextEntry={true}
              style={[styles.inputText, {fontSize: password ? 16 : 16}]}
            />
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>Login</Text>
          </TouchableOpacity>

          <Pressable style={{marginTop: 20}} onPress={() => navigation.navigate('Register')}>
            <Text style={{ fontSize: 17, fontWeight: '500', textAlign: "center", color: "gray" }}>Don't have an account? Sign Up</Text>
          </Pressable>

        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS==='android' ? 50 : 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10
    },
    signinTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 80
    },
    inputText: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      width: 300,
      marginVertical: 10,
      marginLeft: 13
    },
    inputTextContainer: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    loginButton: {
      backgroundColor: '#002244',
      width: 200,
      padding: 15,
      borderRadius: 7,
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
})