import React from 'react';
import {colors, dimensions} from '../theme';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {ScheduleDays} from '../Screens/Schedule/constants';

class ScheduleNavigator extends React.Component {
    state = {
        selectedDate: "Day1"
    };

    onSelection = selectedDate => {
        console.log(selectedDate);
        this.setState({
            selectedDate: selectedDate
        })
        // Emit Value to Parent
    }

    render() {
        const { selectedDate } = this.state;
        return (
            <View style={styles.container}>
                {
                    Object.keys(ScheduleDays).map((day, i) => {
                        return (
                            <TouchableHighlight
                                underlayColor={colors.primaryDark}
                                onPress={() => this.onSelection(day)}
                                key={i}
                            >
                                <View style={[selectedDate === day ? styles.buttonNavHighlight: styles.buttonNavNormal, styles.buttonNav]}>
                                    <Text style={styles.buttonNavText}>
                                        {ScheduleDays[day].date}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        width: dimensions.width,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "rgba(255, 255, 255, .2)",
        borderBottomColor: "rgba(255, 255, 255, .2)",
        left: 0,
        bottom: -1
    },
    buttonNav: {
        width: dimensions.width / 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 0,
        backgroundColor: '#996d88',
        borderRightColor: '#7b566d',
        borderWidth: 0.25,
        borderTopWidth: 1,
    },
    buttonNavNormal: {
        borderTopColor: '#996d88'
    },
    buttonNavHighlight: {
        borderTopColor: '#fff'
    },
    buttonNavText: {
        color: '#e5e5e5',
    }
});

export default ScheduleNavigator;
