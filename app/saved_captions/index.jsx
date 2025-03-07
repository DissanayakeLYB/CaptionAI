import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const SavedCaptionsScreen = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');
    
    const captions = [
        {
            image: 'https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=1024x1024&w=is&k=20&c=H9NmtkT7rvHX_8gGtVEXQywZPaINNBTbOovIu1TbJvU=',
            text: 'Exploring new horizons and embracing the journey. Every step matters.',
            time: '2 hours ago',
            platform: 'Instagram',
            color: '#d62976',
            icon: 'logo-instagram',
        },
        {
            image: 'https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=1024x1024&w=is&k=20&c=H9NmtkT7rvHX_8gGtVEXQywZPaINNBTbOovIu1TbJvU=',
            text: 'Excited to share our latest innovation in AI technology.',
            time: '2 hours ago',
            platform: 'LinkedIn',
            color: '#3b82f6',
            icon: 'logo-linkedin',
        },
        {
            image: 'https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=1024x1024&w=is&k=20&c=H9NmtkT7rvHX_8gGtVEXQywZPaINNBTbOovIu1TbJvU=',
            text: 'The perfect blend of creativity and technology. When passion meets purpose.',
            time: '2 hours ago',
            platform: 'Twitter',
            color: '#000000',
            icon: 'logo-twitter',
        },
        {
            image: 'https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=1024x1024&w=is&k=20&c=H9NmtkT7rvHX_8gGtVEXQywZPaINNBTbOovIu1TbJvU=',
            text: 'The perfect blend of creativity and technology. When passion meets purpose.',
            time: '2 hours ago',
            platform: 'Facebook',
            color: '#3b5998',
            icon: 'logo-facebook',
        },
        {
            image: 'https://media.istockphoto.com/id/1453838542/photo/last-light-on-mount-sneffels.jpg?s=1024x1024&w=is&k=20&c=H9NmtkT7rvHX_8gGtVEXQywZPaINNBTbOovIu1TbJvU=',
            text: 'The perfect blend of creativity and technology. When passion meets purpose.',
            time: '2 hours ago',
            platform: 'Twitter',
            color: '#f97316',
            icon: 'logo-snapchat',
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
              <TouchableOpacity
                key={index}
                style={[
                  styles.filterButton,
                  selectedFilter === filter && styles.selectedFilterButton, // Apply different style when selected
                ]}
                onPress={() => setSelectedFilter(filter)}
              >
                <Text
                  style={[
                    styles.filterText,
                    selectedFilter === filter && styles.selectedFilterText, // Change text color when selected
                  ]}
                >
                  {filter}
                </Text>
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
            <View style={styles.navBar}>
              <TouchableOpacity onPress={() => router.push('/home')}>
                <View style={styles.navBarCard}>
                  <Ionicons name="home-outline" size={24} color="#A0AEC0" />
                  <Text style={styles.navBarText} >Home</Text>
                </View>
              </TouchableOpacity>
                       
              <TouchableOpacity onPress={() => router.push('/saved_captions')}>
                <View style={styles.navBarCard}>
                  <Ionicons name="time-outline" size={24} color="#7C3AED" />
                  <Text style={styles.navBarTextActive} >History</Text>
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
  selectedFilterButton: {
    backgroundColor: '#7C3AED', 
  },
  selectedFilterText: {
    color: '#FFFFFF', 
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
    alignItems: 'center',
  },
  captionImage: { 
    width: 70, 
    height: 70, 
    borderRadius: 8, 
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',

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

export default SavedCaptionsScreen;
