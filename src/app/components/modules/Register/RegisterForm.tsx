'use client';

import React from 'react';
import {
    Box,
    Button,
    Link,
    MenuItem,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import { countryCodes, validationSchema } from './registerForm.constant';

const RegisterForm = () => {
    const handleSubmit = (values: {
        email: string;
        password: string;
        confirmPassword: string;
        firstname: string;
        lastname: string;
        phone: string;
        countryCode: string;
    }) => {
        let formattedPhone = values.phone;
        if (formattedPhone.charAt(0) === '0') {
            formattedPhone = formattedPhone.substring(1);
        }
        const formattedPhoneAndCountry = values.countryCode + formattedPhone;
        const formattedValues = {
            ...values,
            phone: formattedPhoneAndCountry,
        };
        console.log('Registering', formattedValues);
        return;
        // TODO: implémenter la requête d'inscription ici
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            firstname: '',
            lastname: '',
            phone: '',
            countryCode: '',
        },
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: 500 }}>
            <Typography variant="h4" component="h1" marginBottom={3}>
                S'inscrire
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box
                    mb={3}
                    sx={{
                        borderRadius: 1,
                    }}
                >
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
                <Box mb={3}>
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Mot de passe"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                </Box>
                <Box mb={3}>
                    <TextField
                        fullWidth
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirmation du mot de passe"
                        type="password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.confirmPassword &&
                            Boolean(formik.errors.confirmPassword)
                        }
                        helperText={
                            formik.touched.confirmPassword &&
                            formik.errors.confirmPassword
                        }
                    />
                </Box>
                <Box mb={3} display="flex" alignItems="center">
                    <TextField
                        sx={{ width: '95%', marginRight: 2 }}
                        fullWidth
                        id="firstname"
                        name="firstname"
                        label="Prénom"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.firstname &&
                            Boolean(formik.errors.firstname)
                        }
                        helperText={
                            formik.touched.firstname && formik.errors.firstname
                        }
                    />
                    <TextField
                        fullWidth
                        id="lastname"
                        name="lastname"
                        label="Nom"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={
                            formik.touched.lastname &&
                            Boolean(formik.errors.lastname)
                        }
                        helperText={
                            formik.touched.lastname && formik.errors.lastname
                        }
                    />
                </Box>
                <Box mb={2} display="flex" alignItems="center">
                    <TextField
                        select
                        fullWidth
                        id="countryCode"
                        name="countryCode"
                        label="Code Pays"
                        value={formik.values.countryCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{ width: '95%', marginRight: 2 }}
                        error={
                            formik.touched.countryCode &&
                            Boolean(formik.errors.countryCode)
                        }
                        helperText={
                            formik.touched.countryCode &&
                            formik.errors.countryCode
                        }
                    >
                        {countryCodes.map((code) => (
                            <MenuItem key={code.value} value={code.value}>
                                {code.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        fullWidth
                        id="phone"
                        name="phone"
                        label="Téléphone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{ borderRadius: 45 }}
                        error={
                            formik.touched.phone && Boolean(formik.errors.phone)
                        }
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Box>
                <Box mb={3}>
                    <Link href="/login" variant="body2">
                        Déjà un compte ? Se connecter
                    </Link>
                </Box>
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={formik.isSubmitting}
                >
                    S'inscrire
                </Button>
            </form>
        </Paper>
    );
};

export default RegisterForm;
