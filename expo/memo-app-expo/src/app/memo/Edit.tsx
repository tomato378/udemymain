import {
     View, TextInput, StyleSheet , Alert
} from "react-native"
import { router, useLocalSearchParams} from 'expo-router'
import { useState, useEffect } from "react"
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore"

import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
// import { type Memo } from "../../../types/memo"
import { auth, db } from "../../config"

const handlePress = (id: string, bodyText: string): void => {
    if (auth.currentUser === null) { return}
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    setDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then(() => {
        router.back()
    })
    .catch((error) => {
        console.log(error)
        Alert.alert('更新に失敗しました')
    })
    
}

const Edit = (): JSX.Element => {
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText] = useState('')
    useEffect(() => {
        if (auth.currentUser === null) {return}
        const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
        getDoc(ref)
            .then((docRef) => {
                console.log(docRef.data())
                const RemoteBodyText = docRef?.data()?.bodyText
                setBodyText(RemoteBodyText)
                console.log('nanda')
            })
            .catch((error) => {
                console.log(error)
                console.log('なぜか')
            })
    }, [])
    console.log('edit', id)
    return (
        <KeyboardAvoidingView  style={style.container}>
            <View style={style.inputContainer}>
                <TextInput 
                    multiline 
                    style={style.input} 
                    value={bodyText}
                    onChangeText={(text) => { setBodyText(text) }}
                    autoFocus
                />
            </View>
            <CircleButton onPress={() =>  {handlePress(id, bodyText )}}>
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
        flex: 1
    },
    input: {
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
        paddingVertical: 32,
        paddingHorizontal: 27
    }
})

export default Edit