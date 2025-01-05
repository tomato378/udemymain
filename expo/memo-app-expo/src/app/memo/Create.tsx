import {
    View, TextInput, StyleSheet , KeyboardAvoidingView
} from "react-native"
import { router } from 'expo-router'


import CircleButton from "../../components/CircleButton"
import Icon from "../../components/Icon"

const handlePress = (): void => {
    router.back()
}


const Create = (): JSX.Element => {
   return (
       <KeyboardAvoidingView behavior="height" style={style.container}>
           <View style={style.inputContainer}>
               <TextInput multiline style={style.input} value=""/>
           </View>
           <CircleButton onPress={handlePress}>
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