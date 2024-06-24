import * as Yup from 'yup';

export const countryCodes = [
    { value: '+33', label: 'France (+33)' },
    { value: '+32', label: 'Belgique (+32)' },
    { value: '+41', label: 'Suisse (+41)' },
    { value: '+352', label: 'Luxembourg (+352)' },
    { value: '+1', label: 'Canada (+1)' },
];

export const validationSchema = Yup.object({
    email: Yup.string()
        .email('Adresse email invalide')
        .required("L'email est requis"),
    password: Yup.string()
        .required('Mot de passe est requis')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .matches(
            /[A-Z]/,
            'Le mot de passe doit contenir au moins une lettre majuscule',
        )
        .matches(
            /[a-z]/,
            'Le mot de passe doit contenir au moins une lettre minuscule',
        )
        .matches(/\d/, 'Le mot de passe doit contenir au moins un chiffre')
        .matches(
            /[@$!%*?&]/,
            'Le mot de passe doit contenir au moins un caractère spécial (@$!%*?&)',
        ),
    firstname: Yup.string().required('Le prénom est requis'),
    lastname: Yup.string().required('Le nom est requis'),
    countryCode: Yup.string().required('Le code du pays est requis'),
    phone: Yup.string()
        .required('Le téléphone est requis')
        .matches(/^\d+$/, 'Le téléphone doit contenir seulement des chiffres'),
});
