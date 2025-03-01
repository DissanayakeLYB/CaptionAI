import React, { useCallback } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useRouter } from 'expo-router';

const LoginScreen = () => {

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
  }

  return (
    <ScrollView>
      <LinearGradient colors={['#7C3AED', '#2241b1']} style={styles.gradient}>
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <Image style={styles.image} source={require('../../assets/images/logo.png')} />
          <Text style={styles.logoText}>CaptionAI</Text>

          <TextInput
            placeholder='Email'
            placeholderTextColor='#FFFFFF90'
            style={styles.input}
          />

          <TextInput
            placeholder='Password'
            placeholderTextColor='#FFFFFF90'
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.loginButton} onPress={() => {}}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.guestButton} onPress={() => router.push('/sign_up')}>
            <Text style={styles.guestButtonText}>Don't have an account? Sign Up</Text>
          </TouchableOpacity>

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
  input: {
    width: '90%',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#FFFFFF20',
    color: '#FFFFFF',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFFFFF60',
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#5E2EC3',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    fontWeight: '900',
  },
  guestButton: {
    marginTop: 15,
  },
  guestButtonText: {
    color: '#FFFFFF90',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
  },
});

export default LoginScreen;
