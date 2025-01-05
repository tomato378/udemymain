import { View, StyleSheet } from "react-native"
import Header from '../../components/header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from "../../components/CircleButton"
import Icon from '../../components/Icon'

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
            <CircleButton>
                <Icon name="pencil" size={40} color="#ffffff"/>
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