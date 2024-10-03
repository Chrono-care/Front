import { keepPreviousData, useQuery } from '@tanstack/react-query';

interface UseSearchDataParams<T> {
    fetchData: (
        // eslint-disable-next-line no-unused-vars
        params: Record<string, number | string | undefined>,
    ) => Promise<T>;
    page: number;
    size: number;
    sort: string | undefined;
    filter: string | undefined;
}

export const useSearchData = <T,>({
    fetchData,
    page,
    size,
    sort,
    filter,
}: UseSearchDataParams<T>) => {
    const { status, data, error } = useQuery({
        queryKey: ['data', { page: page || 0, size: size || 15, filter, sort }],
        queryFn: () => fetchData({ page, size, sort, filter }),
        placeholderData: keepPreviousData,
    });

    return { status, data, error };
};
