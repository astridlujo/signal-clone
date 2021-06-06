import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Input, Text } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {

    const [name, setName] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("");
    const [ profilePictureUrl, setProfilePictureUrl ] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login'
        })
    }, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: profilePictureUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
                });
            }).catch(error => alert(error.message));
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
            <StatusBar style="light" />
            <Text h3 style={{ marginBottom: 50 }} >
                Create a Signal account
            </Text>

            <View style={styles.inputContainer} >
                <Input 
                    placeholder="Full Name" 
                    autoFocus type="text"  
                    value={name} 
                    onChangeText={(inputName) => setName(inputName)} 
                />

                <Input 
                    placeholder="Email" 
                    type="email"  
                    value={email} 
                    onChangeText={(inputEmail) => setEmail(inputEmail)} 
                />

                <Input 
                    placeholder="Password" 
                    secureTextEntry 
                    type="password"  
                    value={password} 
                    onChangeText={(inputPassword) => setPassword(inputPassword)} 
                />

                <Input 
                    placeholder="Profile Picture URL (Optional)" 
                    onSubmitEditing={register} 
                    type="text"  
                    value={profilePictureUrl} 
                    onChangeText={(inputUrl) => setProfilePictureUrl(inputUrl)} 
                />

            </View>

            <Button containerStyle={styles.button} raised title="Register" onPress={register} />

            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },

    inputContainer: {
        width: 300
    },

    button: {
        width: 200,
        marginTop: 10
    }
})