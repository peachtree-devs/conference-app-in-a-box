import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, Button, TouchableOpacity} from 'react-native';
import {facebookLogo, landingLogo} from '../../components/RenderLogo';
import {Screens} from '../constants';

class LandingScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;

        return (
            <ImageBackground
                style={styles.container}
                source={require('../../assets/atlanta.jpg')}
                resizeMode='cover'>
                <TouchableOpacity onPress={() => navigate(Screens.RENDER)} style={styles.guestButton}>
                    <Text style={styles.guestText}>Explore as Guest</Text>
                </TouchableOpacity>
                <View style={styles.landingHeader}>
                    <Text style={styles.landingTitle}>
                        Render ATL
                    </Text>
                    <Image
                        style={styles.landingLogo}
                        source={landingLogo}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.landingFooter}>
                    <Image
                        style={styles.facebookAuthButton}
                        source={facebookLogo}
                        resizeMode='contain'
                    />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.onPress}
                        >
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    guestButton: {
        position: 'absolute',
        right: 10,
        top: '10%',
    },
    guestText: {
        fontSize: 15,
        color: 'white',
        textDecorationLine: 'underline'

    },
    landingHeader: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 50,
        paddingTop: 30,
        width: '100%'
    },
    landingTitle: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 60,
        paddingTop: 50,
        marginBottom: 0,
    },
    landingFooter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        alignItems: 'center'
    },
    facebookAuthButton: {
        width: '90%'
    },
    landingLogo: {
        height: 100,
        width: 150,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        backgroundColor: '#669277',
        width: '49%',
        textAlign: 'center',
        padding: 20,
        marginLeft: 20,
        marginRight: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default LandingScreen;
