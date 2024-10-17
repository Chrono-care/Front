import * as Yup from 'yup';

export const filterFormSchema = Yup.object().shape({
    selectedFilter: Yup.string(),
    method: Yup.string(),
    value: Yup.string(),
});
