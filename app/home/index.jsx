import React, { useCallback, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const [image, setImage] = useState(null);
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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F8F9FC' }}>
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            <Text style={styles.logoText}>CaptionAI</Text>
          </View>
          <Ionicons name="person-circle-outline" size={30} color={'#00000080'} />
        </View>
        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <View style={styles.uploadContent}>
              <Ionicons name="cloud-upload-outline" size={40} color="#7C3AED" />
              <Text style={styles.uploadText}>Tap to upload image</Text>
              <Text style={styles.uploadSubText}>JPG, PNG up to 10MB</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.sectionTitleContainer}>
          <Text style={styles.sectionTitle}>AI Generated Captions</Text>
          <TouchableOpacity style={styles.regenerateButton}>
            <Ionicons name="reload-outline" size={16} color="#7C3AED" />
            <Text style={styles.regenerateText}>Regenerate</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.captionCardContainer}>
          <View style={styles.captionCard}>
            <Text style={styles.captionTag}>Trendy</Text>
            <Text style={styles.captionText}>Living my best life with this amazing view! #blessed #wanderlust #photooftheday</Text>
            <TouchableOpacity><Text style={styles.copyText}>Copy</Text></TouchableOpacity>
          </View>

          <View style={styles.captionCard}>
            <Text style={styles.captionTag}>Professional</Text>
            <Text style={styles.captionText}>Excited to share insights from our latest innovation project. Embracing new challenges and pushing boundaries.</Text>
            <TouchableOpacity><Text style={styles.copyText}>Copy</Text></TouchableOpacity>
          </View>

          <View style={styles.captionCard}>
            <Text style={styles.captionTag}>Funny</Text>
            <Text style={styles.captionText}>When your coffee kicks in and suddenly you’re ready to conquer the world... or at least your inbox!</Text>
            <TouchableOpacity><Text style={styles.copyText}>Copy</Text></TouchableOpacity>
          </View>
        </View>

        <View style={styles.navBar}>
          <View style={styles.navBarCard}>
            <TouchableOpacity onPress={() => router.push('/home')}><Ionicons name="home-outline" size={24} color="#7C3AED" /></TouchableOpacity>
            <Text style={styles.navBarTextActive} >Home</Text>
          </View>
          <View style={styles.navBarCard}>
            <TouchableOpacity onPress={() => router.push('/edits')}><Ionicons name="create-outline" size={24} color="#A0AEC0" /></TouchableOpacity>
            <Text style={styles.navBarText} >Create</Text>
          </View>
          <View style={styles.navBarCard}>
            <TouchableOpacity onPress={() => router.push('/edits')}><Ionicons name="time-outline" size={24} color="#A0AEC0" /></TouchableOpacity>
            <Text style={styles.navBarText} >History</Text>
          </View>
          <View style={styles.navBarCard}>
            <TouchableOpacity onPress={() => router.push('/settings')}><Ionicons name="settings-outline" size={24} color="#A0AEC0" /></TouchableOpacity>
            <Text style={styles.navBarText} >Settings</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20 
  },
  header:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '90%', 
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  logoImage: {
    width: 30, 
    height: 30,
  },
  logoText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginVertical: 20 
  },
  uploadBox: { 
    width: '90%', 
    height: 250, 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 20 
  },
  uploadContent: { 
    alignItems: 'center' 
  },
  uploadText: { 
    fontSize: 16, 
    color: '#7C3AED',
    marginVertical: 10, 
  },
  uploadSubText: { 
    fontSize: 12, 
    color: '#A0AEC0' 
  },
  sectionTitleContainer: {
    width: '90%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginVertical: 10,
  },
  sectionTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#000000', 
  },
  regenerateButton: { 
    flexDirection: 'row', 
    gap: 5,
    alignItems: 'center',
  },
  regenerateText: { 
    color: '#7C3AED' 
  },
  captionCardContainer: { 
    width: '100%', 
    alignItems: 'center' 
  },
  captionCard: { 
    width: '90%', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    padding: 15, 
    marginVertical: 5, 
    elevation: 2 
  },
  captionTag: { 
    fontSize: 14, 
    color: '#7C3AED', 
    marginBottom: 5 
  },
  captionText: { 
    fontSize: 14, 
    color: '#2D3748', 
    marginBottom: 10 
  },
  copyText: { 
    fontSize: 12, 
    color: '#7C3AED',
  },
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '100%', 
    paddingVertical: 10, 
    borderTopWidth: 1, 
    borderColor: '#E2E8F0', 
    marginTop: 20,
  },
  navBarCard: { 
    alignItems: 'center',
  },
  navBarText: { 
    fontSize: 12, 
    color: '#A0AEC0'
  },
  navBarTextActive: {
    fontSize: 12,
    color: '#7C3AED',
  }
});

export default HomeScreen;
