export const contactFormApi = {
    get: async () => {
        const response = await fetch('/api/contact-form');
        return response.json();
    },
    post: async (data: any) => {
        const response = await fetch('/api/contact-form', {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return response.json();
    }
}