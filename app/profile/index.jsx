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
                colors={['#7C3AED', '#8B5CF6']}
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
            <View style={styles.planComparisonContainer}>
                <Text style={styles.planComparisonTitle}>Plan Comparison</Text>
                {renderPlanComparison('Monthly Captions', '50', 'Unlimited')}
                {renderPlanComparison('AI Processing Speed', 'Standard', 'Priority')}
                {renderPlanComparison('Caption History', '24 hours', 'Unlimited')}
                {renderPlanComparison('Custom Tones', 'Basic', 'Advanced')}
                {renderPlanComparison('Export Formats', '2', 'All')}
            </View>
        </ScrollView>
    );
}

function renderPlanComparison(label, free, premium) {
    return (
        <View style={styles.comparisonRow}>
            <Text style={styles.labelText}>{label}</Text>
            <View style={styles.comparisonValues}>
                <Text style={styles.freeText}>{free}</Text>
                <Text style={styles.premiumText}>{premium}</Text>
            </View>
        </View>
    );
}

const navbar = () => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity onPress={() => router.navigate('Home')}>
                <Ionicons name="home" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.navigate('Profile')}>
                <Ionicons name="person" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 16,
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
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    planText: {
        color: '#6B7280',
    },
    upgradeContainer: {
        padding: 20,
        borderRadius: 16,
        marginBottom: 20,
    },
    upgradeTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
    },
    upgradeDescription: {
        color: 'white',
        marginBottom: 15,
    },
    priceText: {
        color: 'white',
        fontSize: 24,
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
    },
    planComparisonContainer: {
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,
    },
    planComparisonTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    comparisonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    labelText: {
        fontSize: 16,
        color: '#374151',
    },
    comparisonValues: {
        flexDirection: 'row',
    },
    freeText: {
        color: '#6B7280',
        marginRight: 15,
    },
    premiumText: {
        color: '#7C3AED',
        fontWeight: '600',
    },
});

export default ProfileScreen;