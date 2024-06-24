'use client';

import React from 'react';
import { Container } from '@mui/material';
import RegisterForm from '@/app/components/modules/Register/RegisterForm';

const RegisterPage = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 6,
            }}
        >
            <RegisterForm />
        </Container>
    );
};

export default RegisterPage;
