'use client';

import { Box, Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

const Toto = () => {
    return (
        <Container sx={{ padding: 2 }}>
            <Typography
                variant="h6"
                sx={{
                    marginBottom: 2,
                }}
            >
                Couleurs
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#1f7aca',
                        borderRadius: 1,
                    }}
                />
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#01264c',
                        borderRadius: 1,
                    }}
                />
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#FFFFFF',
                        borderRadius: 1,
                        border: '1px solid #ccc',
                    }}
                />
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: '#C3E3FF',
                        borderRadius: 1,
                    }}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                <Typography variant="caption">#1f7aca</Typography>
                <Typography variant="caption">#01264c</Typography>
                <Typography variant="caption">#FFFFFF</Typography>
                <Typography variant="caption">#C3E3FF</Typography>
            </Box>

            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Boutons
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button variant="contained" color="secondary">
                    Rechercher
                </Button>
                <Button color="primary">Connexion</Button>
                <Button variant="outlined" color="secondary">
                    Inscription
                </Button>
            </Box>
            <Box sx={{ marginTop: 4 }}>
                <TextField id="outlined-basic" label="Recherche" />
            </Box>
        </Container>
    );
};

export default Toto;
