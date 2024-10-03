'use client';

import React from 'react';
import { Container } from '@mui/material';
import LoginForm from '@/app/components/modules/Login/LoginForm';

const LoginPage = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 8,
            }}
        >
            <LoginForm />
        </Container>
    );
};

export default LoginPage;
