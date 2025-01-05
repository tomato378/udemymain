import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"

import { Link, router } from "expo-router"

import Header from "../../components/header"
import Button from "../../components/Button" 

const handlePress = (): void => {
    //ログイン
    router.push('/memo/List')
} 

const LogIn = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.input} value="Email address"/>
                <TextInput style={styles.input} value="Password"/>
                <Button label="Submit" onPress={handlePress}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registerde?</Text>
                    <Link href="/auth/SignUp" asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here!</Text>
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

export default LogIn