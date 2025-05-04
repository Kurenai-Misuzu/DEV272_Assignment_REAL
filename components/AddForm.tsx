import { ErrorMessage, Formik } from "formik";
import { useVenueListContext } from "@/context/VenueListContext";
import { useRouter } from "expo-router";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { TextInput, Button, StyleSheet } from "react-native";
import * as Yup from 'yup'


const venueSchema = Yup.object().shape({
    Name: Yup.string().required('Venue Name is required'),
    Location: Yup.string().required('Venue Location is required'), 
    Courts: Yup.number().positive().integer().required('Number of courts is required'),
    Price: Yup.number().moreThan(-1).required('Venue price is required'),
    Description: Yup.string(),
});



export default function AddVenue() {
    const {addVenue, venueList} = useVenueListContext();
    const router = useRouter();

    return (
        <Formik initialValues={{
                ID: 0, 
                Name: '',
                Location: '', 
                Courts: '',
                Price: '',
                Description: '',
            }}
            validationSchema={venueSchema}
            onSubmit={(values, {resetForm}) => {
                addVenue({
                    ID: Math.random() * 1000000,
                    Name: values.Name,
                    Location: values.Location, 
                    Courts: parseInt(values.Courts),
                    Price: parseFloat(values.Price),
                    Description: values.Description,
                });
                
                resetForm();
                router.back();
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <ThemedView>
                    {/* Name */}
                    <ThemedText type='subtitle'>Name</ThemedText>
                    <TextInput 
                        style={styles.textInputStyle}
                        value={values.Name} 
                        onChangeText={handleChange('Name')} 
                        onBlur={handleBlur('Name')} 
                        placeholder="Name here" 
                    />
                    {touched.Name && errors.Name && (
                        <ThemedText style={styles.errorMsg}>{errors.Name}</ThemedText>
                    )}
                    
                    {/* Location */}
                    <ThemedText type='subtitle'>Location</ThemedText>
                    <TextInput 
                        style={styles.textInputStyle}
                        value={values.Location} 
                        onChangeText={handleChange('Location')} 
                        onBlur={handleBlur('Location')} 
                        placeholder="Location here" 
                    />
                    {touched.Location && errors.Location && (
                        <ThemedText style={styles.errorMsg}>{errors.Location}</ThemedText>
                    )}

                    {/* Courts */}
                    <ThemedText type='subtitle'>Courts</ThemedText>
                    <TextInput 
                        style={styles.textInputStyle}
                        keyboardType='numeric'
                        value={values.Courts} 
                        onChangeText={handleChange('Courts')}
                        onBlur={handleBlur('Courts')} 
                        placeholder="Courts here" 
                    />
                    {touched.Courts && errors.Courts && (
                        <ThemedText style={styles.errorMsg}>{errors.Courts}</ThemedText>
                    )}

                    {/* Price */}
                    <ThemedText type='subtitle'>Price</ThemedText>
                    <TextInput 
                        style={styles.textInputStyle}
                        keyboardType='numeric' 
                        value={values.Price} 
                        onChangeText={handleChange('Price')} 
                        onBlur={handleBlur('Price')} 
                        placeholder="Price here" 
                    />
                    {touched.Price && errors.Price && (
                        <ThemedText style={styles.errorMsg}>{errors.Price}</ThemedText>
                    )}

                    {/* Description */}
                    <ThemedText type='subtitle'>Description</ThemedText>
                    <TextInput 
                        style={styles.textInputStyle}
                        value={values.Description} 
                        onChangeText={handleChange('Description')} 
                        onBlur={handleBlur('Description')} 
                        placeholder="Description here" 
                    />
                    {touched.Description && errors.Description && (
                        <ThemedText style={styles.errorMsg}>{errors.Description}</ThemedText>
                    )}
                    
                    <Button title='SUBMIT' onPress={() => handleSubmit()}>

                    </Button>

                </ThemedView>
            )}
        </Formik>
    )    
}

const styles = StyleSheet.create({
    textInputStyle: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#505050',
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
        marginBottom: 5
    },
    errorMsg: {
        color: '#ff0000',
        marginHorizontal: 10
    },
});