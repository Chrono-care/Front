import { useQuery } from '@tanstack/react-query';

export const useFetchData = <T,>(
    fetchData: () => Promise<T>,
    initialData: T | undefined,
    page: number,
    size: number,
) => {
    const { status, data, error } = useQuery({
        queryKey: ['data'],
        queryFn: fetchData,
        initialData,
    });

    return { status, data, error };
};
