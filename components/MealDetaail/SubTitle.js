import { StyleSheet, Text, View } from "react-native";

// function SubTitle({ children }) {
//     return (
//         <View style={styles.subTitleContainer}>
//             <Text style={styles.subTitle}>{children}</Text>
//         </View>
//     )
// }

// export default SubTitle;


// const styles = StyleSheet.create({
//     subTitleContainer: {
//         marginHorizontal: 24,
//         marginVertical: 4,
//         padding: 6,
//         borderBottomColor: 'white',
//         borderBottomWidth: 2,
//     },
//     subTitle: {
//         fontWeight: 'bold',
//         fontSize: 18,
//         textAlign: 'center',
//         color: 'white',
//     },
    
// })

function SubTitle({ children }) {
    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

export default SubTitle;


const styles = StyleSheet.create({
    subTitleContainer: {
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
    },
    subTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    
})