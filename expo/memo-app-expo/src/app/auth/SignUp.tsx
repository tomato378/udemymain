import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"

import { Link, router } from "expo-router"

import Header from "../../components/header"
import Button from "../../components/Button" 

const handlePress = (): void => {
    //会員登録
    router.push('/memo/List')
} 

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value="Email address"/>
                <TextInput style={styles.input} value="Password"/>
                <Button label="Submit" onPress={handlePress}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registerde?</Text>
                    <Link href="/auth/LogIn" asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Log In.</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: "#467FD3"
    }
})

export default SignUp