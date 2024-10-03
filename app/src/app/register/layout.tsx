import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Inscription',
    description: 'Page inscription du site',
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
