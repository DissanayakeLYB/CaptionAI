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
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
        
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            <Text style={styles.logoText}>CaptionAI</Text>
          </View>
          <Ionicons name="person-circle-outline" size={30} color={'#00000080'} />
        </View>

          <ScrollView showsVerticalScrollIndicator={false}>
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
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-instagram" size={14} color="#7C3AED" />
                <Text style={{ fontSize: 16, color: '#7C3AED'}}>Trendy</Text>
              </View>
              <Text style={styles.captionText}>Living my best life with this amazing view! #blessed #wanderlust #photooftheday</Text>
              <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={16} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={16} color="#7C3AED" />  
                  <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.captionCard}>
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-linkedin" size={14} color="#3b82f6" />
                <Text style={{ fontSize: 16, color: '#3b82f6'}}>Professional</Text>
              </View>
              <Text style={styles.captionText}>Excited to share insights from our latest innovation project. Embracing new challenges and pushing boundaries.</Text>
              <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={16} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={16} color="#7C3AED" />  
                  <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.captionCard}>
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-twitter" size={14} color="#f97316" />
                <Text style={{ fontSize: 16, color: '#f97316'}}>Funny</Text>
              </View>
              <Text style={styles.captionText}>When your coffee kicks in and suddenly you’re ready to conquer the world... or at least your inbox!</Text>
              <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={16} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={16} color="#7C3AED" />  
                  <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
        </ScrollView>

        <View style={styles.navBar}>
          <TouchableOpacity onPress={() => router.push('/home')}>
            <View style={styles.navBarCard}>
              <Ionicons name="home-outline" size={24} color="#7C3AED" />
              <Text style={styles.navBarTextActive} >Home</Text>
            </View>
          </TouchableOpacity>
            
          <TouchableOpacity onPress={() => router.push('/saved_captions')}>
            <View style={styles.navBarCard}>
              <Ionicons name="time-outline" size={24} color="#A0AEC0" />
              <Text style={styles.navBarText} >History</Text>
            </View>
          </TouchableOpacity>
            
          <TouchableOpacity onPress={() => router.push('/settings')}>
            <View style={styles.navBarCard}>
              <Ionicons name="settings-outline" size={24} color="#A0AEC0" />
              <Text style={styles.navBarText} >Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%',
    justifyContent: 'center',
  },
  header:{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
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
    width: '95%', 
    height: 350, 
    borderRadius: 10, 
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 20,
    backgroundColor: '#e0e7ff70',
    borderColor: '#6366f1',
    borderWidth: 1,
    borderStyle: 'dashed',
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
    width: '95%', 
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
    fontSize: 14, 
    color: '#7C3AED',
    letterSpacing: 0.3,
  },
  captionCardContainer: { 
    width: '100%', 
    alignItems: 'center' 
  },
  captionCard: { 
    width: '95%', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    padding: 15, 
    marginVertical: 8, 
    elevation: 2 
  },
  captionHeadline: { 
    flexDirection: 'row', 
    gap: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  captionText: { 
    fontSize: 16, 
    color: '#2D3748', 
    marginBottom: 10,
    letterSpacing:0.3,
    lineHeight: 22
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
