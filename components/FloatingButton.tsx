import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';



export default function FloatingButton(){
    const router = useRouter();
    return(
        <TouchableOpacity style={styles.floatingButton} onPress={() => router.navigate('/form')}>
          <MaterialCommunityIcons style={styles.addIcon} name="note-plus-outline" size={24} color="white" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        backgroundColor: '#2196F3',
        width: 64,
        height: 64,
        borderRadius: 60,
        borderStyle: 'solid',
        borderColor: '#2196F3',
        borderWidth: 2,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 40,
        right: 30,
        elevation: 5, // For Android shadow
        shadowColor: "#000", // For iOS shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      addIcon: {
        bottom: 1
      }
})