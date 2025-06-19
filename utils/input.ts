import { Field } from "components/ContactForm/ContactFormTypes";

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/;
    return emailRegex.test(email);
}

export const validatePhone = (phone: string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    return phoneRegex.test(phone);
}

export const getContactFormFields = (): Field[] => {
    return [
        {
            name: 'name',
            label: 'Name',
            multiline: false,
            required: true
        },
        {
            name: 'email',
            label: 'Email',
            multiline: false,
            required: true
        },
        {
            name: 'phone',
            label: 'Phone',
            multiline: false,
            required: true
        },
        {
            name: 'message',
            label: 'Message',
            multiline: true,
            rows: 5,
            required: true
        }
    ];
}