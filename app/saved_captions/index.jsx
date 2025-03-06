import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SavedCaptionsScreen = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    
    const captions = [
        {
            image: '../../assets/images/placeholder.jpeg',
            text: 'Exploring new horizons and embracing the journey. Every step matters.',
            time: '2 hours ago',
            platform: 'Instagram',
            color: '#7C3AE5',
            icon: 'logo-instagram',
        },
        {
            image: '../../assets/images/placeholder.jpeg',
            text: 'Excited to share our latest innovation in AI technology.',
            time: 'Yesterday',
            platform: 'LinkedIn',
            color: '#3b82f6',
            icon: 'logo-linkedin',
        },
        {
            image: '../../assets/images/placeholder.jpeg',
            text: 'The perfect blend of creativity and technology. When passion meets purpose.',
            time: '2 days ago',
            platform: 'Twitter',
            color: '#f97316',
            icon: 'logo-twitter',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name='chevron-back' size={24} color='#000' />
          </TouchableOpacity>
            <Text style={styles.headerText}>Saved Captions</Text>
        </View>

        <TextInput
            style={styles.searchInput}
            placeholder='Search saved captions...'
            placeholderTextColor='#A1A1A1'
            value={searchText}
            onChangeText={setSearchText}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
            {['All', 'Instagram', 'Twitter', 'LinkedIn', 'Facebook', 'Snapchat'].map((filter, index) => (
            <TouchableOpacity key={index} style={styles.filterButton}>
                <Text style={styles.filterText}>{filter}</Text>
            </TouchableOpacity>
            ))}
        </ScrollView>

        <View style={styles.sortContainer}>
            <Text style={styles.sortText}>Sort by: Recent</Text>
        </View>

        <ScrollView style={styles.captionsContainer}>
            {captions.map((caption, index) => (
            <View key={index} style={styles.captionCard}>
                <Image source={{ uri: caption.image }} style={styles.captionImage} />
                <View style={styles.captionTextContainer}>
                  <Text style={styles.captionText}>{caption.text}</Text>
                  <View style={styles.captionFooter}>
                      <View style={styles.captionInfo}>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                          <Ionicons name='time-outline' size={18} color='#A1A1A1' />
                          <Text style={styles.captionTime}>{caption.time}</Text>
                        </View>
                        
                        <View style={{ flexDirection: 'row', gap: 15 }}>
                          <Ionicons name={caption.icon} size={18} color={caption.color} />
                          <TouchableOpacity>
                            <Ionicons name='copy-outline' size={18} color='#7C3AED' />
                          </TouchableOpacity>
                          <TouchableOpacity>
                            <Ionicons name='share' size={18} color='#7C3AED' />
                          </TouchableOpacity>
                        </View>
                      </View>
                  </View>
                </View>
            </View>
            ))}
        </ScrollView>
        </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  headerContainer: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    padding: 16 
  },
  headerText: { 
    fontSize: 24, 
    fontWeight: '600', 
    marginLeft: 8 

  },
  searchInput: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    margin: 16,
    borderRadius: 8,
    fontSize: 14,
    color: '#000',
  },
  filterContainer: { 
    paddingHorizontal: 16, 
    flexDirection: 'row', 
    minHeight: 30,
    maxHeight: 30

  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#F5F5F5',
    marginRight: 8,
  },
  filterText: { 
    color: '#000', 
    fontSize: 16 

  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  sortText: { 
    fontSize: 14, 
    color: '#A1A1A1' 
  },
  captionsContainer: { 
    paddingHorizontal: 20 

  },
  captionCard: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginBottom: 15,
  },
  captionImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 8, 
    marginRight: 10 

  },
  captionTextContainer: { 
    flex: 1 
  },
  captionText: { 
    fontSize: 16, 
    color: '#000', 
    marginBottom: 10,
    lineHeight: 25,
    letterSpacing: 0.5    

  },
  captionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  captionTime: { 
    fontSize: 14, 
    color: '#A1A1A1', 
  },
});

export default SavedCaptionsScreen;
