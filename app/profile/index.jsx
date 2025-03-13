import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const ProfileScreen = () => {
    const router = useRouter();
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="black" style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.profileContainer}>
                <Image
                    source={ require('../../assets/images/profile.jpeg') }
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Sarah Wilson</Text>
                <Text style={styles.planText}>Free Plan</Text>
            </View>
            <LinearGradient
                colors={['#6466f1', '#a756f7']}
                style={styles.upgradeContainer}
            >
                <Text style={styles.upgradeTitle}>Upgrade to Premium</Text>
                <Text style={styles.upgradeDescription}>
                    Unlock all features and create unlimited captions
                </Text>
                <Text style={styles.priceText}>$9.99 per month</Text>
                <TouchableOpacity style={styles.upgradeButton}>
                    <Text style={styles.upgradeButtonText}>Upgrade Now</Text>
                </TouchableOpacity>
            </LinearGradient>
            <Text style={styles.comparisonText}>Plan Comparison</Text>
            <View style={styles.container}>
                {tableData.map((item, index) => (
                    <View style={styles.row} key={index}>
                        <Text style={styles.cellOption}>{item.option}</Text>
                        <Text style={styles.cellFree}>{item.free}</Text>
                        <Text style={styles.cellPremium}>{item.premium}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const tableData = [
    { option: 'Monthly Captions', free: 50, premium: 'Unlimited' },
    { option: 'AI Processing Speed', free: 'Standard', premium: 'Priority' },
    { option: 'Caption History', free: '24 hours', premium: 'Unlimited' },
    { option: 'Custome Tones', free: 'Basic', premium: 'Advanced' },
    { option: 'Expert Formats', free: 2, premium: 'All' },
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 8, 
        letterSpacing: 0.5,

    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 50,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 5,
        letterSpacing: 0.3,
    },
    planText: {
        color: '#6B7280',
        fontSize: 18,
        letterSpacing: 0.3,
    },
    upgradeContainer: {
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
    },
    upgradeTitle: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 5,
        letterSpacing: 0.1,
    },
    upgradeDescription: {
        color: 'white',
        marginBottom: 15,
        fontSize: 16,
        letterSpacing: 0.2,
    },
    priceText: {
        color: 'white',
        fontSize: 28,
        fontWeight: '700',
        marginBottom: 15,
    },
    upgradeButton: {
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    upgradeButtonText: {
        color: '#7C3AED',
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0.1,
    },
    comparisonText: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
        letterSpacing: 0.2,
        marginHorizontal: 25,
    },
    row: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
    },
    cellOption: {
        flex: 2,
        padding: 10,
        textAlign: 'left',
        fontSize: 18,
    },
    cellFree: {
        flex: 1,
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 16,
        color: '#9095a0'
    },
    cellPremium: {
        flex: 1,
        padding: 10,
        textAlign: 'center',
        fontSize: 16,
        color: '#6366f1',
        fontWeight: '600',
    },
});

export default ProfileScreen;