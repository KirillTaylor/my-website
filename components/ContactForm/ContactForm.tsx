'use client'

import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { getContactFormFields, validateEmail, validatePhone } from "utils/input";
import { capitalize } from "@mui/material";
import { contactFormApi } from "utils/api";
import { Field } from "components/ContactForm/ContactFormTypes";

const ContactForm = () => {

    // Field array
    const fieldsArray: Field[] = getContactFormFields();

    // Use the array above to create a state for errors on all fields
    const errorsState: Record<string, string> = fieldsArray.map(field => ({ [field.name]: '' })).reduce((acc, curr) => ({ ...acc, ...curr }), {});
    errorsState.formErrors = '';
    const valuesState: Record<string, string> = fieldsArray.map(field => ({ [field.name]: '' })).reduce((acc, curr) => ({ ...acc, ...curr }), {});

    // Field errors state
    const [errors, setErrors] = useState<Record<string, string>>(errorsState);
    // Field values state
    const [values, setValues] = useState<Record<string, string>>(valuesState);

    const [formStatus, setFormStatus] = useState<{ type: string, message: string }>({
        type: '',
        message: ''
    });

    // Handle field change
    const handleOnTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormStatus({
            type: '',
            message: ''
        }); 

        // Get the value, required, and name of the field
        const value: string = event.target.value;
        const required: boolean = event.target.required;
        const name: string = event.target.name;

        if (!value && required) {
            setErrors(prev => ({
                ...prev,
                [name]: 'This field is required'
            }));
        } else if (name === 'email' && value && !validateEmail(value)) {
            setErrors(prev => ({
                ...prev,
                [name]: 'Please enter a valid email address'
            }));
        } else if (name === 'phone' && value && !validatePhone(value)) {
            setErrors(prev => ({
                ...prev,
                [name]: 'Please enter a valid phone number'
            }));
        } else {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));

            setValues(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    // Handle form submission
    const handleOnFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        // Reset form errors
        setFormStatus({
            type: '',
            message: ''
        });

        // Check if there are any field errors
        const hasFieldErrors: boolean = Object.entries(errors).some(([key, value]) => key !== 'formErrors' && value !== '');
        const hasEmptyFields: boolean = Object.values(values).some(value => value === '');
        
        if (!hasFieldErrors && !hasEmptyFields) {
            // Handle successful form submission here
            setFormStatus({
                type: 'success',
                message: 'Your message has been sent successfully. We will get back to you as soon as possible.'
            });
        } else {
            setFormStatus({
                type: 'error',
                message: 'There was an error with your submission. Please try again.'
            });
        }

        const response = await contactFormApi.post(values);
        if(response.success) {
            // reset form
            setValues(valuesState);
            setErrors(errorsState);
        }
    };

    return (
        <div className="container flex flex-col md:flex-row items-center justify-center min-h-[15vh] py-10 my-10">
            <div className="w-full md:w-1/2">
                <h3 className="text-4xl font-bold mb-4">Get in touch</h3>
                <p className="text-gray-500">
                    We would love to hear from you. Please use the form on the right to fill out all your details we will get back to you to set up a meeting.
                    <br />
                    Looking forward to hearing from you!
                </p>
            </div>
            <div className="w-full md:w-1/2 md:p-10">
                <Box
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '95%' }, }}
                    autoComplete="off"
                    onSubmit={handleOnFormSubmit}>
                    {fieldsArray.map((field, index) => (
                        <div className="flex flex-col" key={index}>
                            <TextField
                                name={field.name}
                                rows={field.rows || 1}
                                multiline={field.multiline}
                                size="small"
                                required={field.required || false}
                                label={capitalize(field.label)}
                                onChange={handleOnTextFieldChange}
                                onBlur={handleOnTextFieldChange}
                                error={!!errors[field.name]}
                                helperText={errors[field.name]}
                                slotProps={{ inputLabel: { required: false } }}
                            />
                        </div>
                    ))}
                    <div className="flex flex-col p-2">
                        <Button variant="contained" color="primary" type="submit">{'Get in touch'}</Button>
                    </div>
                    {formStatus.type === 'success' && <p className="text-green-500">{formStatus.message}</p>}
                    {formStatus.type === 'error' && <p className="text-red-500">{formStatus.message}</p>}
                </Box>
            </div>
        </div>
    );
};

export default ContactForm;
