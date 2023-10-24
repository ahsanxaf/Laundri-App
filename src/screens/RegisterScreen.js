import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, TextInput, Pressable, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView>
            <View style={styles.signupTextContainer}>
                <Text style={{fontSize: 20, color: '#662d91', fontWeight: 'bold'}}>Register</Text>
                <Text style={{fontSize: 16, marginTop: 8, fontWeight: '600'}}>Create a new Account</Text>
            </View>
            <View style={{marginTop: 0}}>
                <View style={styles.inputTextContainer}>
                    <MaterialCommunityIcons name="email-outline" size={24} color="#002244" />
                    <TextInput
                    value={email}
                    onChange={(text) => setEmail(text)}
                    placeholder='Email Address'
                    keyboardType= 'email-address'
                    style={[styles.inputText, {fontSize: email ? 16 : 16}]}
                    /></
                View>

                <View style={[styles.inputTextContainer, {marginTop: 20}]}>
                    <Ionicons name="key-outline" size={24} color="#002244" />
                    <TextInput
                    value={password}
                    onChange={(text) => setPassword(text)}
                    placeholder='Password'
                    secureTextEntry={true}
                    style={[styles.inputText, {fontSize: password ? 16 : 16}]}
                    />
                </View>
                
                <View style={[styles.inputTextContainer, {marginTop: 20}]}>
                    <AntDesign name="phone" size={24} color="#002244" />
                    <TextInput
                    value={phone}
                    onChange={(text) => setPhone(text)}
                    placeholder='Phone Number'
                    keyboardType= 'numeric'
                    style={[styles.inputText, {fontSize: phone ? 16 : 16}]}
                    />
                </View>

                <TouchableOpacity style={styles.registerButton}>
                    <Text style={{ fontSize: 18, textAlign: "center", color: "white" }}>Register</Text>
                </TouchableOpacity>

                <Pressable style={{marginTop: 20}} onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 17, fontWeight: '500', textAlign: "center", color: "gray" }}>Already have an account? Sign In</Text>
                </Pressable>

            </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS==='android' ? 50 : 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10
    },
    signupTextContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 80,
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
    registerButton: {
      backgroundColor: '#002244',
      width: 200,
      padding: 15,
      borderRadius: 7,
      marginTop: 50,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
})