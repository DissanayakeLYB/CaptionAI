import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, SafeAreaView, ScrollView, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {

  const router = useRouter();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  };

  return (
    <ScrollView>
      <LinearGradient colors={['#7C3AED', '#2241b1']} style={styles.gradient}>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>

          <Image style={styles.image} source={require('../../assets/images/logo.png')} />
          <Text style={styles.logoText}>CaptionAI</Text>

          <View style={styles.card}>
            <TextInput
              style={styles.input}
              placeholder="Name"
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

          <TouchableOpacity onPress={() => router.push('/log_in')}>
            <Text style={styles.loginText}>Already have an account? Log In</Text>
          </TouchableOpacity>

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
    minHeight: '100vh',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    marginTop: 50,
    borderRadius: 20,
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 30,
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF',
    marginBottom: 30,
    marginTop: 10,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  card: {
    backgroundColor: '#FFFFFF20',
    width: '90%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF60',
  },
  input: {
    width: '98%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF60',
    borderRadius: 8,
    backgroundColor: '#FFFFFF10',
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
    width: '98%',
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Inter_400Regular',
    fontSize: 12,
  },
});

export default SignUpScreen;
