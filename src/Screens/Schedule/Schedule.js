import React from 'react'
import {MockData, ScheduleDays} from './constants';
import {StyleSheet, ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import ScheduleNavigator from '../../Navigation/ScheduleNavigator';
import BaseHeader from '../../BaseHeader';
import {
    Card,
    CardTitle,
    CardContent,
} from 'react-native-material-cards';
import {fakeAvatar} from '../../theme';

class ScheduleScreen extends React.Component {
    state = {
        date: ScheduleDays.Day1.date,
        talks: [],
        loading: false
    }

    toggleDate(date) {

    }

    async componentDidMount() {
        // Retrieve Talks from Amplify
    }

    render() {
        const mockEvents = MockData;

        return (
            <View style={styles.container}>
                <BaseHeader />
                <ScrollView>
                    <View style={styles.scrollContainer}>
                        {
                            mockEvents.map((event, index) => {
                                const talkTime = `${event.startTime} - ${event.endTime}`;
                                return (
                                    <Card key={index}>
                                        <CardTitle
                                            title={event.title}
                                            subtitle={talkTime}
                                            avatarSource={fakeAvatar}/>
                                        <CardContent text="Speaker Name"/>
                                    </Card>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <ScheduleNavigator/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7c7c7c',
        flex: 1
    },
    scrollContainer: {
        paddingBottom: 70,
        paddingRight: 20,
        paddingLeft: 20
    }
});

export default ScheduleScreen;
