import {
     View, TextInput, StyleSheet , KeyboardAvoidingView
} from "react-native"

import Header from "../../components/header"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const Edit = (): JSX.Element => {
    return (
        <KeyboardAvoidingView behavior="height" style={style.container}>
            <Header />
            <View style={style.inputContainer}>
                <TextInput multiline style={style.input} value={"買い物\nリスト"}/>
            </View>
            <CircleButton>
                <Icon name="checkmark" size={40} color="#ffffff"/>
            </CircleButton>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        paddingVertical: 32,
        paddingHorizontal: 27,
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24
    }
})

export default Edit