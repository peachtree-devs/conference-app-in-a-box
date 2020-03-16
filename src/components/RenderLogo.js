import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export const renderLogo = require('../assets/renderAtlLogo.png');
export const landingLogo = require('../assets/renderAtl-Landing.png');
export const facebookLogo = require('../assets/facebook.png');

class RenderLogo extends React.Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.logo}
                    source={renderLogo}
                    resizeMode='contain'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
    }
});

export default RenderLogo;
