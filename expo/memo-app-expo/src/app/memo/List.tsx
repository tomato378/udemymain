import { View, StyleSheet } from "react-native"
import { router } from 'expo-router'

import Header from '../../components/header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from "../../components/CircleButton"
import Icon from '../../components/Icon'

const handlePress = (): void => {
    router.push('/memo/Create')
}


const List = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name="plus" size={40} color="#ffffff"/>
            </CircleButton>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})

export default List