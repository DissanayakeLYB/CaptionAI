import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView, ScrollView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {

  const router = useRouter();

  return (
    <ScrollView>
      <LinearGradient colors={['#7C3AED', '#2241b1']} style={styles.gradient}>
        <SafeAreaView style={styles.container}>

          <Image style={styles.image} source={require('../../assets/images/logo.png')} />
          <Text style={styles.logoText}>CaptionAI</Text>

          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#FFFFFF90"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#FFFFFF90"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#FFFFFF90"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#FFFFFF90"
              secureTextEntry
            />

            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          
          <Text style={styles.loginText}>
            Already have an account? <TouchableOpacity onPress={() => router.push('/log_in')}><Text style={{color:'#ffffff90', }}>Log In</Text></TouchableOpacity>
          </Text>
          

          <Text style={styles.footerText}>
            By signing up, you agree to our Terms & Privacy Policy
          </Text>
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,    
    minHeight: '100%',    
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  image: {
    marginBottom: 10,
    borderRadius: 20,
    width: 70,
    height: 70,
  },
  logoText: {
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF',
    marginBottom: 20,
    fontWeight: '900',
  },
  card: {
    width: '85%',
    borderRadius: 20,
    alignItems: 'center',
  },
  input: {
    width: '98%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF60',
    borderRadius: 8,
    backgroundColor: '#FFFFFF20',
    color: '#FFFFFF',
    fontFamily: 'Inter_400Regular',
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    width: '98%',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#5E2EC3',
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
    fontWeight: '900',
  },
  loginText: {
    color: '#FFFFFF90',
    marginTop: 20,
    marginBottom: 50,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
});

export default SignUpScreen;
