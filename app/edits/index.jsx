import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const EditCustomizeScreen = () => {
    const router = useRouter();
    const [caption, setCaption] = useState("Exploring new horizons! 🌅 Just wrapped up another amazing photoshoot session. Can't wait to share more with you all! #Photography #CreativeLife");

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Edit & Customize</Text>
                </View>

                <Image style={styles.image} source={require('../../assets/images/placeholder.jpeg')} />

                <View style={styles.captionContainer}>
                    <TextInput
                        style={styles.captionInput}
                        multiline
                        value={caption}
                        onChangeText={setCaption}
                        autoFocus
                    />
                    <Text style={styles.captionCounter}>{caption.length}/300</Text>
                </View>

                <TouchableOpacity style={styles.shuffleButton}>
                    <Ionicons name="reload-outline" size={14} color="#3B82F6" />
                    <Text style={styles.shuffleButtonText}>Shuffle Caption</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.copyButton}>
                    <Ionicons name="copy-outline" size={14} color="#ffffff" />
                    <Text style={styles.copyButtonText}>Copy Caption</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.shareButton}>
                    <Ionicons name="share-outline" size={14} color="#ffffff" />
                    <Text style={styles.shareButtonText}>Share</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saveButton}>
                    <Ionicons name="gift" size={14} color="#A16207" />
                    <Text style={styles.saveButtonText}>Save to History (Premium)</Text>
                </TouchableOpacity>    

            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { 
        minHeight: '100%',
        flex: 1, 
        padding: 20, 
        backgroundColor: '#FFFFFF',
    },
    backButton: { 
        display: '',
        marginBottom: 20 
    },
    title: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 20 
    },
    image: { 
        width: '100%', 
        height: 200, 
        borderRadius: 10, 
        marginBottom: 20 

    },
    chipContainer: { 
        flexDirection: 'row',
        marginBottom: 20 
    },
    chip: { 
        backgroundColor: '#EDEEF1', 
        padding: 8, 
        borderRadius: 20, 
        marginRight: 10 

    },
    chipText: { 
        color: '#333' 

    },
    captionContainer: { 
        backgroundColor: '#F5F5F5', 
        borderRadius: 10, 
        padding: 15,
        marginBottom: 10 

    },
    captionInput: { 
        minHeight: 60, 
        letterSpacing: 0.5,
        lineHeight: 20,
        fontSize: 15, 
        color: '#333' 
    },
    captionCounter: { 
        alignSelf: 'flex-end', 
        color: '#888', 
        fontSize: 12 

    },
    shuffleButton: { 
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#F5F5F5', 
        padding: 15, 
        borderRadius: 10,
        marginBottom: 10, 
        justifyContent: 'center',
        alignItems: 'center',

    },
    shuffleButtonText: {
        fontSize : 16,
        color: '#3B82F6' 
    },
    copyButton: { 
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#3B82F6', 
        padding: 15, 
        borderRadius: 10, 
        marginBottom: 10, 
        justifyContent: 'center',
        alignItems: 'center',

    },
    copyButtonText: { 
        fontSize : 16,
        color: '#FFFFFF', 
    },
    shareButton: { 
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#000000', 
        padding: 15, 
        borderRadius: 10, 
        marginBottom: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareButtonText: { 
        fontSize : 16,
        color: '#FFFFFF',
    },
    saveButton: { 
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#FDE68A80', 
        padding: 15, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    saveButtonText: { 
        color: '#A16207', 
        fontSize : 16,
        fontWeight: 'bold' 
    },
});

export default EditCustomizeScreen;
