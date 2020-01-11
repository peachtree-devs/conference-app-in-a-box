import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {StyleSheet} from 'react-native';

class HamburgerMenu extends React.Component {
    render() {
        return (
            <Icon name="menu" style={styles.icon}/>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
        color: '#fff'
    }
});

export default HamburgerMenu;
