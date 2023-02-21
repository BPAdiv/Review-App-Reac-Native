import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = object({
    title: string().required().min(4),
    body: string().required().min(8),
    rating: string().required().test("is-num-1-5", "Rating must be a number 1-5",
        (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0
        }),
})


export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                validationSchema={reviewSchema}
                initialValues={{ title: "", body: "", rating: "" }}

                onSubmit={(values, actions) => {
                    addReview(values)
                    // actions.resetForm()
                    console.log(values);
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput style={globalStyles.input}
                            placeholder="Review Title"
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                            onBlur={formikProps.handleBlur("title")}
                        />
                        <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
                        <TextInput style={globalStyles.input}
                            multiline minHeight={100}
                            placeholder="Review body"
                            onChangeText={formikProps.handleChange("body")}
                            value={formikProps.values.body}
                            onBlur={formikProps.handleBlur("body")}

                        />
                        <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>

                        <TextInput style={globalStyles.input}
                            placeholder="Review Rating"
                            onChangeText={formikProps.handleChange("rating")}
                            value={formikProps.values.rating}
                            keyboardType="numeric"
                            onBlur={formikProps.handleBlur("rating")}

                        />
                        <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
                        <FlatButton text="submit" onPress={formikProps.handleSubmit} />
                        {/* <Button title='submit' color="maroon" onPress={formikProps.handleSubmit} /> */}

                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({})