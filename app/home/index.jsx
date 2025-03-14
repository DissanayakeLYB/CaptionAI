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
      <SafeAreaView style={styles.container}>
        
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            <Text style={styles.logoText}>CaptionAI</Text>
          </View>
          <TouchableOpacity onPress={() => router.push('/profile')}>
            <Ionicons name="person-circle-outline" size={40} color={'#00000080'} />
          </TouchableOpacity>
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
              <Ionicons name="reload-outline" size={18} color="#7C3AED" />
              <Text style={styles.regenerateText}>Regenerate</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.captionCardContainer}>
            <View style={styles.captionCard}>
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-instagram" size={18} color="#d62976" />
                <Text style={{ fontSize: 18, color: '#d62976'}}>Trendy</Text>
              </View>
              <Text style={styles.captionText}> Chasing sunsets & collecting memories. 🌅✨ #GoldenHour #Wanderlust</Text>
              <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.captionCard}>
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-linkedin" size={18} color="#3b82f6" />
                <Text style={{ fontSize: 18, color: '#3b82f6'}}>Professional</Text>
              </View>
              <Text style={styles.captionText}>Excited to share insights from our latest innovation project. Embracing new challenges and pushing boundaries. 🚀 #GrowthMindset #CareerDevelopment </Text>
              <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.captionCard}>
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-twitter" size={18} color="#000000" />
                <Text style={{ fontSize: 18, color: '#000000'}}>Funny</Text>
              </View>
              <Text style={styles.captionText}>When your coffee kicks in and suddenly you’re ready to conquer the world... or at least your inbox!</Text>
              <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
              </View>              
            </View>

            <View style={styles.captionCard}>
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-facebook" size={18} color="#3b5998" />
                <Text style={{ fontSize: 18, color: '#3b5998'}}>Social</Text>
              </View>
              <Text style={styles.captionText}>Just another day making memories! 📸✨ #GoodVibesOnly</Text>
              <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Copy</Text>
                </TouchableOpacity>
              </View>              
            </View>

            <View style={styles.captionCard}>
              <View style={styles.captionHeadline}>
                <Ionicons name="logo-snapchat" size={18} color="#f97316" />
                <Text style={{ fontSize: 18, color: '#f97316'}}>Snap</Text>
              </View>
              <Text style={styles.captionText}>Mood. 🌟📷</Text>
              <View style={{ flexDirection: 'row', gap: 20, justifyContent: 'flex-end',}}>
                <TouchableOpacity onPress={() => router.push('/edits')} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="create-outline" size={18} color="#7C3AED" />  
                  <Text style={styles.copyText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                  <Ionicons name="copy-outline" size={18} color="#7C3AED" />  
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
            
          <TouchableOpacity onPress={() => router.push('/history')}>
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
    backgroundColor: '#FFFFFF',
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
    height: 80,
  },
  logoImage: {
    width: 35, 
    height: 35,
  },
  logoText: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginVertical: 20 
  },
  uploadBox: { 
    width: '100%', 
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
    fontSize: 20, 
    color: '#7C3AED',
    marginVertical: 10, 
  },
  uploadSubText: { 
    fontSize: 16, 
    color: '#A0AEC0' 
  },
  sectionTitleContainer: {
    width: '100%', 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginVertical: 10,
  },
  sectionTitle: { 
    fontSize: 20, 
    fontWeight: '600', 
    color: '#000000', 
  },
  regenerateButton: { 
    flexDirection: 'row', 
    gap: 7,
    alignItems: 'center',
  },
  regenerateText: { 
    fontSize: 18, 
    color: '#7C3AED',
  },
  captionCardContainer: { 
    width: '100%', 
    alignItems: 'center',
    marginBottom: 25,
  },
  captionCard: { 
    width: '95%', 
    backgroundColor: '#FFFFFF', 
    borderRadius: 10, 
    padding: 15, 
    margin: 10, 
    elevation: 2 
  },
  captionHeadline: { 
    flexDirection: 'row', 
    gap: 7,
    alignItems: 'center',
    marginBottom: 10,
  },
  captionText: { 
    fontSize: 18, 
    color: '#2D3748', 
    marginBottom: 15,
    lineHeight: 25,
    letterSpacing: 0.3,
  },
  copyText: { 
    fontSize: 16, 
    color: '#7C3AED',
  },
  navBar: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: '100%', 
    paddingVertical: 10, 
    borderTopWidth: 1, 
    borderColor: '#E2E8F0', 
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
