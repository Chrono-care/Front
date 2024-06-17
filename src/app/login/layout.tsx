import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Connexion',
    description: 'Page connexion du site',
};

export default function LoginLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
