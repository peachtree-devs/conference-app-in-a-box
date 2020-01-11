import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const renderLogo = require('../assets/renderAtlLogo.png');

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
