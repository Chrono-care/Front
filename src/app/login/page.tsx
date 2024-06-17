'use client';

import React from 'react';
import {
    Box,
    Button,
    Container,
    Link,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Adresse email invalide')
        .required("L'email est requis"),
    password: Yup.string().required('Mot de passe est requis'),
});

const Login = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '15vh',
            }}
        >
            <Paper
                elevation={3}
                sx={{ padding: 3, width: '100%', maxWidth: 400 }}
            >
                <Typography variant="h4" component="h1" marginBottom={3}>
                    Se connecter
                </Typography>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, errors, touched }) => (
                        <Form>
                            <Box mb={3}>
                                <Field
                                    as={TextField}
                                    name="email"
                                    type="email"
                                    label="Email"
                                    fullWidth
                                    error={touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Box>
                            <Box mb={1}>
                                <Field
                                    as={TextField}
                                    name="password"
                                    type="password"
                                    label="Mot de passe"
                                    fullWidth
                                    error={
                                        touched.password && !!errors.password
                                    }
                                    helperText={
                                        touched.password && errors.password
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
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={isSubmitting}
                            >
                                Se connecter
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Container>
    );
};

export default Login;
