import { RegisterFormType } from '@/app/components/modules/Register/registerForm.type';

export const formattedPhoneValue = (values: RegisterFormType) => {
    let formattedPhone = values.phone;
    if (formattedPhone.charAt(0) === '0') {
        formattedPhone = formattedPhone.substring(1);
    }
    const formattedPhoneAndCountry = values.countryCode + formattedPhone;
    return {
        ...values,
        phone: formattedPhoneAndCountry,
    };
};
