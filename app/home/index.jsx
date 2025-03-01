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
        <Text style={styles.logoText}>CaptionAI</Text>
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

        <Text style={styles.sectionTitle}>AI Generated Captions</Text>
        <TouchableOpacity style={styles.regenerateButton}>
          <Text style={styles.regenerateText}>Regenerate</Text>
        </TouchableOpacity>

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
          <TouchableOpacity><Ionicons name="home" size={24} color="#7C3AED" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="time-outline" size={24} color="#A0AEC0" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="settings-outline" size={24} color="#A0AEC0" /></TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingHorizontal: 20 },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#7C3AED', marginVertical: 20 },
  uploadBox: { width: '90%', height: 250, backgroundColor: '#E5E7EB', borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  uploadContent: { alignItems: 'center' },
  uploadText: { fontSize: 16, color: '#7C3AED', marginTop: 10 },
  uploadSubText: { fontSize: 12, color: '#A0AEC0' },
  sectionTitle: { fontSize: 18, fontWeight: '600', color: '#4A5568', marginVertical: 10 },
  regenerateButton: { alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 },
  regenerateText: { color: '#7C3AED' },
  captionCardContainer: { width: '100%', alignItems: 'center' },
  captionCard: { width: '90%', backgroundColor: '#FFFFFF', borderRadius: 10, padding: 15, marginVertical: 5, elevation: 2 },
  captionTag: { fontSize: 14, color: '#7C3AED', marginBottom: 5 },
  captionText: { fontSize: 14, color: '#2D3748', marginBottom: 10 },
  copyText: { fontSize: 12, color: '#7C3AED' },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingVertical: 10, borderTopWidth: 1, borderColor: '#E2E8F0', marginTop: 20 }
});

export default HomeScreen;
