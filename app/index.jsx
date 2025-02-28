import React, { useCallback } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const LandingScreen = () => {
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
      <LinearGradient
        colors={['#7C3AED', '#2241b1']}
        style={styles.gradient}
      >
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
          <Image source={require('../assets/images/logo.png')} />
          <View style={styles.headerContainer}>
            <Text style={styles.logoText}>CaptionAI</Text>
          </View>

          <Text style={styles.headline}>Generate Perfect Captions Instantly!</Text>

          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Text style={styles.cardHeadline}>AI-Powered Creativity</Text>
              <Text style={styles.cardText}>Smart captions tailored to your content</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardHeadline}>Lightning Fast</Text>
              <Text style={styles.cardText}>Get captions in seconds</Text>
            </View>

            <View style={styles.card}>
              <Text style={styles.cardHeadline}>Multiple Styles</Text>
              <Text style={styles.cardText}>Proffesional to casual tones</Text>
            </View>
          </View>


          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.guestButton}>
              <Text style={styles.guestButtonText}>Continue as Guest</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.footerText}>
            By continuing, you agree to our Terms & Privacy Policy
          </Text>
        </SafeAreaView>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 30,
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF',
    marginBottom: 5,
    fontWeight: '900',
    letterSpacing: 0.5,
  },
  headline: {
    fontSize: 13,
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF80',
    textAlign: 'center',
    marginTop: 2,
    letterSpacing: 0.3,
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  card: {
    backgroundColor: '#FFFFFF20',
    width: '90%',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF60',
  },
  cardHeadline: {
    fontSize: 14,
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF',
    fontWeight: '700',
    marginBottom: 3,
    letterSpacing: 0.3,
  },
  cardText: {
    fontSize: 12,
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF80',
    letterSpacing: 0.3,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 40,
    alignItems: 'center',
    marginBottom:100,
  },
  signUpButton: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#5E2EC3',
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    fontWeight: '900',
  },
  loginButton: {
    borderWidth: 2,
    borderColor: '#FFFFFF60',
    width: '90%',
    paddingVertical: 16,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
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

export default LandingScreen;
