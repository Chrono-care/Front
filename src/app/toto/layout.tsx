import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Toto',
    description: 'Toto of the app',
};

export default function TotoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
