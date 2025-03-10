import React, {useState, version} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Switch, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, Fontisto, MaterialIcons, AntDesign, Feather, Octicons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

const SettingsScreen = () => {
    const router = useRouter();
    const [activeSwitch, setActiveSwitch] = useState("professional");

    const toggleSwitch = (switchName) => {
        if (activeSwitch !== switchName) {
            setActiveSwitch(switchName);
        }
    };

    const [isEnabledNightMode, setisEnabledNightMode] = useState(false);
    const [isEnabledNotifications, setisEnabledNotifications] = useState(false);

    const toggleSwitchNightMode = () => setisEnabledNightMode(previousState => !previousState);
    const toggleSwitchNotifications = () => setisEnabledNotifications(previousState => !previousState);
    
    return (
        <SafeAreaView style={styles.container} >
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="black" style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.captionSettingsContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 700, marginBottom: 15, letterSpacing: 0.3 }}>Caption Settings</Text>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View>
                            <Text style={{ fontSize: 18, letterSpacing: 0.3, marginBottom: 3 }}>Professional Tone</Text>
                            <Text style={{ fontSize: 16, color: '#949494', letterSpacing: 0.3 }}>Formal and Business-like</Text>
                        </View>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#9595FF' }} 
                            thumbColor={activeSwitch === 'professional' ? '#8B5CF6' : '#8E8E8E'}
                            onValueChange={() => toggleSwitch('professional')} 
                            value={activeSwitch === 'professional'} 
                            />
                    </View>
        
                    <View style={styles.captionSettingsBundle}>
                        <View>
                            <Text style={{ fontSize: 18, letterSpacing: 0.3, marginBottom: 3 }}>Casual Tone</Text>
                            <Text style={{ fontSize: 16, color: '#949494', letterSpacing: 0.3 }}>Friendly and relaxed</Text>
                        </View>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#9595FF' }} 
                            thumbColor={activeSwitch === 'casual' ? '#8B5CF6' : '#8E8E8E'}
                            onValueChange={() => toggleSwitch('casual')} 
                            value={activeSwitch === 'casual'} 
                            />
                    </View>
        
                    <View style={styles.captionSettingsBundle}>
                        <View>
                            <Text style={{ fontSize: 18, letterSpacing: 0.3, marginBottom: 3 }}>Witty Tone</Text>
                            <Text style={{ fontSize: 16, color: '#949494', letterSpacing: 0.3 }}>Humorous and engaging</Text>
                        </View>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#9595FF' }} 
                            thumbColor={activeSwitch === 'witty' ? '#8B5CF6' : '#8E8E8E'}
                            onValueChange={() => toggleSwitch('witty')} 
                            value={activeSwitch === 'witty'} 
                            />
                    </View>
                    
                </View>
                <View style={styles.captionSettingsContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, letterSpacing: 0.3 }}>App Settings</Text>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <Fontisto name="night-clear" size={18} color="black" />
                            <Text style={{ fontSize: 18, letterSpacing: 0.3 }}>Night Mode</Text>
                        </View>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#9595FF' }} 
                            thumbColor={activeSwitch === 'night-mode' ? '#8B5CF6' : '#8E8E8E'}
                            onValueChange={() => toggleSwitch('night-mode')} 
                            value={activeSwitch === 'night-mode'} 
                            />
                    </View>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <Ionicons name="language" size={18} color="black" />
                            <Text style={{ fontSize: 18, letterSpacing: 0.3 }}>Language</Text>
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 1 }}>
                            <Text style={{ fontSize: 16, color: '#767577', letterSpacing: 0.3 }}>English</Text>
                            <Ionicons name="chevron-forward" size={24} color="#767577" style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
                            <Ionicons name="notifications-outline" size={20} color="black" />
                            <Text style={{ fontSize: 18, letterSpacing: 0.3 }}>Notifications</Text>
                        </View>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#9595FF' }} 
                            thumbColor={isEnabledNightMode ? '#8B5CF6' : '#8E8E8E'}
                            onValueChange={toggleSwitchNightMode} 
                            value={isEnabledNightMode}
                            />
                    </View>
                    
                </View>
                <View style={styles.captionSettingsContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 700, marginBottom: 20, letterSpacing: 0.3 }}>Support & Legal</Text>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                            <AntDesign name="questioncircleo" size={20} color="black" />
                            <Text style={{ fontSize: 18, letterSpacing: 0.3 }}>Help Center</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="#767577" style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                            <Feather name="lock" size={20} color="black" />
                            <Text style={{ fontSize: 18, letterSpacing: 0.3 }}>Privacy Policy</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="#767577" style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                            <Octicons name="note" size={20} color="black" />
                            <Text style={{ fontSize: 18, letterSpacing: 0.3 }}>Terms of Service</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="#767577" style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.captionSettingsBundle}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                            <FontAwesome name="envelope-o" size={20} color="black" />
                            <Text style={{ fontSize: 18, letterSpacing: 0.3 }}>Contact Support</Text>
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="#767577" style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/log_in')}>
                    <SimpleLineIcons style={styles.logoutSymbol} name="logout" size={24} color="black" />
                    <Text style={styles.logoutText} >Log Out</Text>
                </TouchableOpacity>
                <Text style={styles.versionText}>Version 1.0.0</Text>
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
                        <Ionicons name="time-outline" size={24} color="#A0AEC0" />
                        <Text style={styles.navBarText} >History</Text>
                    </View>
                </TouchableOpacity>
                            
                <TouchableOpacity onPress={() => router.push('/settings')}>
                    <View style={styles.navBarCard}>
                        <Ionicons name="settings-outline" size={24} color="#7C3AED" />
                        <Text style={styles.navBarTextActive} >Settings</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backIcon: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.3
    },
    captionSettingsContainer : {
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        borderRadius: 10,
        backgroundColor: '#F9F9F9',
        marginBottom: 20
    },
    captionSettingsBundle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
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
    },
    logoutButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderColor: '#ef4444',
        borderWidth: 1,
        marginBottom: 20
    },
    logoutSymbol: {
        marginRight: 10,
        color: '#ef4444'
    },
    logoutText: {
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 0.3,
        color: '#ef4444'
    },
    versionText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#A0AEC0',
        marginBottom: 20
    }
});

export default SettingsScreen;