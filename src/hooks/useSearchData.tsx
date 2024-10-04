import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useSearchData = <T,>(
    // eslint-disable-next-line no-unused-vars
    fetchData: (params: {
        page?: number;
        size?: number;
        sort?: string;
        filter?: string;
    }) => Promise<T>,
    {
        page,
        size,
        filter,
        sort,
    }: { page?: number; size?: number; filter?: string; sort?: string },
) => {
    const { status, data, error } = useQuery({
        queryKey: ['data', { page: page || 0, size: size || 15, filter, sort }],
        queryFn: () => fetchData({ page, size, sort, filter }),
        placeholderData: keepPreviousData,
    });

    return { status, data, error };
};
