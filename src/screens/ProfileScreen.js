import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import { auth } from '../../firebase/Firebase'
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
    const user = auth.currentUser;
    const navigation = useNavigation();

    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace('Login');
        }).catch((e) => console.log('Failed to logout:; ', e));
    }

  return (
    <SafeAreaView style={styles.container}>
        <Pressable style={{marginVertical: 10}}>
            <Text>Welcome {user.email}</Text>
        </Pressable>

        <Pressable onPress={signOutUser}>
            <Text>Sign Out</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS==='android' ? 50 : 0,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center'
    },
})