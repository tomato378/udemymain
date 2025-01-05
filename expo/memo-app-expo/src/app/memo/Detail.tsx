import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Icon from '../../components/Icon'

import Header from '../../components/header'
import CircleButton from '../../components/CircleButton'

const Detail = (): JSX.Element => {
    return (
        <View style={styles.conainer}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年1月1日</Text>
            </View>
            <View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    テストメッセージ
                </Text>

            </ScrollView>
            </View>
            <CircleButton style={{ top: 160, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color="#ffffff"/>
            </CircleButton>
        </View>
    )
}

const styles=StyleSheet.create({
    conainer: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    memoHeader: {
        backgroundColor: '#467FD3',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16
    },
    memoBody: {
        paddingHorizontal: 27,
        paddingVertical: 32
    },
    memoBodyText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000000'
    }
})

export default Detail