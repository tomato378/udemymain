import {
    View, TextInput, StyleSheet 
} from "react-native"
import { router } from 'expo-router'
import { collection, addDoc,Timestamp } from "firebase/firestore"
import { useState } from "react"

import KeyboardAvoidingView from "../../components/KeyboardAvoidingView"
import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"
import { db, auth } from "../../config"

const handlePress = (bodyText: string): void => {
    if (auth.currentUser === null) {return}
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    addDoc(ref, {
        bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
        .then((docRef) => {
            console.log('succes', docRef.id)
            router.back()
        })
        .catch(() => {
            console.log(Error)
        })
}


const Create = (): JSX.Element => {
    const [bodyText, setBodyText] =useState('')
    return (
       <KeyboardAvoidingView style={style.container}>
           <View style={style.inputContainer}>
               <TextInput 
               multiline
               style={style.input}
               value={bodyText}
               onChangeText={(text) => { setBodyText(text) }}
               autoFocus
            />
           </View>
           <CircleButton onPress={() => {handlePress(bodyText)}}>
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

export default Create