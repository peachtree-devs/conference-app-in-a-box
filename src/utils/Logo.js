import {Image, StyleSheet, View} from 'react-native';
import {logo} from '../theme';
import React from 'react';

export const Logo = () => (
    <View style={styles.logoContainer}>
        <Image
            style={styles.logo}
            resizeMode='contain'
            source={logo}
        />
    </View>
)

const styles = StyleSheet.create({
    logoContainer: {
        marginTop: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: 50,
        width: 200
    }
})
