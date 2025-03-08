import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  return (
    <SafeAreaProvider>
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome</Text>
            <Pressable onPress={() => navigation.navigate("Login")} style={styles.getInButton}>
                <Text style={styles.getInButtonText}>Get In 🏹</Text>
            </Pressable>
        </View>
    </SafeAreaProvider>
  );
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        backgroundColor: '#d0d3d4',
    },
    welcomeText: {
        fontSize: 36,
        fontWeight: '600',
    },

    getInButton: {
        backgroundColor: '#ff8c00',
        padding: 10,
        borderRadius: 9,
        width: 100,
        alignItems: 'center',
    },

    getInButtonText:{
        fontWeight: '600',
        fontSize: 18,
    },

})