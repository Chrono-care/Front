import { Container } from '@mui/material';
import { PublicHomePage } from '@/app/components/modules/PublicHomePage/PublicHomePage';

export default function Home() {
    return (
        <Container maxWidth={'lg'}>
            <PublicHomePage />
        </Container>
    );
}
