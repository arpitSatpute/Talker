import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Signup = ({navigation}) => {

    const [isHovered, setIsHovered] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.login}>Sign Up</Text>
        <View style={styles.inputContainer}>
            <View>
                <Text style={styles.inputContainerText}>Username</Text>
                <TextInput style={styles.input} placeholder="example123" />
            </View>
            <View>
                <Text style={styles.inputContainerText}>Email</Text>
                <TextInput style={styles.input}  placeholder="abc@example.com" />
            </View>
            <View>
                <Text style={styles.inputContainerText}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter Your Password" />
            </View>
            <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText}>SignUp</Text>
            </Pressable>
            <Pressable
            onPressIn={()=> setIsHovered(true)}
            onPressOut={()=> setIsHovered(false)}
            onPress={() => navigation.navigate("Login")}
            >
            <Text style={[styles.createAccount, isHovered && styles.createAccountHover]}>Login</Text>
            </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Signup;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#d0d3d4',
    },
    card: {
        backgroundColor: '#c3c3c3',
        padding: 10,
        borderRadius: 9,
        alignItems: 'center',
        color: '#fff',
        width: 300,
        flex: 0.7,
        justifyContent: 'space-around',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },

    login: {
        fontSize: 36,
        fontWeight: '600',
        flex: 0.5,
        padding: 10,
    },

    input: {
        backgroundColor: '#f5f6f7',
        padding: 10,
        borderRadius: 9,
        width: 200,
        borderColor: '#000',
        borderWidth: 0.1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },

    inputContainer: {
        flex: 1.7,
        gap: 25,
        alignItems: 'center',
    },

    button: {
        backgroundColor: '#ff8c00',
        padding: 10,
        borderRadius: 9,
        width: 100,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
    },

    buttonText:{
        fontWeight: '500',
        fontSize: 14,
    },

    inputContainerText: {
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 4,
        marginBottom: 5,

    },

    createAccount: {
        fontSize: 16,
        fontWeight: 400,
        color: '#1e90ff',
    },

    createAccountHover: {
        textDecorationLine: 'underline',
        color: 'blue',
    },


});