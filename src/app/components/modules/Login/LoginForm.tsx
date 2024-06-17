'use client';

import React from 'react';
import { Box, Button, Link, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { loginFormValidationSchema } from '@/app/components/modules/Login/loginFormValidationSchema';

const LoginForm = () => {
    const handleSubmit = (values: { email: string; password: string }) => {
        return; //TODO requete;
    };

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: loginFormValidationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <Paper elevation={3} sx={{ padding: 3, width: '100%', maxWidth: 400 }}>
            <Typography variant="h4" component="h1" marginBottom={3}>
                Se connecter
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <Box mb={3}>
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
                <Box mb={1}>
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
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 3,
                    }}
                >
                    <Link href="/reset-password" variant="body2">
                        Mot de passe oublié ?
                    </Link>
                    <Link href="/register" variant="body2">
                        Créer un compte
                    </Link>
                </Box>
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    disabled={formik.isSubmitting}
                >
                    Se connecter
                </Button>
            </form>
        </Paper>
    );
};

export default LoginForm;
