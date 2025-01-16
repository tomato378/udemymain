import { View, StyleSheet, FlatList } from "react-native" // 修正: FlatList をインポート
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"

import MemoListItem from '../../components/MemoListItem'
import CircleButton from "../../components/CircleButton"
import Icon from '../../components/Icon'
import LogOutButton from "../../components/LogOutButton"
import { db, auth } from "../../config"
import { type Memo } from "../../../types/memo"

const handlePress = (): void => {
    router.push('/memo/Create')
}

const List = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <LogOutButton /> }
        })
    }, [])
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
        const q = query(ref, orderBy('updatedAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteMemos: Memo[] = []
            snapshot.forEach((doc) => {
                console.log("Document data:", doc.data()) // データをログに表示
                const { bodyText, updatedAt } = doc.data()
                remoteMemos.push({
                    id: doc.id,
                    bodyText,
                    updatedAt
                })
            })
            console.log("Fetched memos:", remoteMemos) // memosの内容を確認
            setMemos(remoteMemos)
        })
        return unsubscribe
    }, [])
    

    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                keyExtractor={(item) => item.id} // 各アイテムの一意のキーを指定
                renderItem={({ item }) => <MemoListItem memo={item} />}
            />
            <CircleButton onPress={handlePress}>
                <Icon name="plus" size={40} color="#ffffff" />
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
