import * as Yup from 'yup';

export const loginFormValidationSchema = Yup.object({
    email: Yup.string()
        .email('Adresse email invalide')
        .required("L'email est requis"),
    password: Yup.string().required('Mot de passe est requis'),
});
