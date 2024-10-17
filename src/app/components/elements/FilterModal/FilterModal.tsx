import * as React from 'react';
import { Dispatch, FC, SetStateAction } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
} from '@mui/material';
import { filterFormSchema } from '@/app/components/elements/FilterModal/filterModal.constant';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';

type FilterModalProps = {
    open: boolean;
    handleClose: () => void;
    setFilter: Dispatch<SetStateAction<string>>;
    filter: string;
};

export const FilterModal: FC<FilterModalProps> = ({
    handleClose,
    open,
    setFilter,
    filter,
}) => {
    const form = useFormik({
        initialValues: {
            value: '',
            selectedFilter: '',
            method: '',
        },
        onSubmit: (values) => {
            console.log(values);
            // setFilter(filter + values.selectedFilter);
        },
        validationSchema: filterFormSchema,
    });

    const handleSubmit = () => {
        form.handleSubmit();
        handleClose();
    };

    return (
        <>
            <form>
                <Dialog
                    fullWidth
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {'Choix du filtre'}
                    </DialogTitle>
                    <DialogContent>
                        <Stack marginTop={2} spacing={4}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="selectedFilter">
                                    Filtre sélectionné
                                </InputLabel>
                                <Select
                                    name={'selectedFilter'}
                                    variant={'outlined'}
                                    labelId="selectedFilter"
                                    value={form.values.selectedFilter}
                                    label="Filtre sélectionné"
                                    onChange={form.handleChange}
                                >
                                    <MenuItem value="email">Email</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="method">Méthode</InputLabel>
                                <Select
                                    name={'method'}
                                    variant={'outlined'}
                                    labelId="method"
                                    value={form.values.method}
                                    label="Méthode"
                                    onChange={form.handleChange}
                                >
                                    <MenuItem value="like">Like</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                fullWidth
                                error={
                                    !!(form.errors.value && form.touched.value)
                                }
                                helperText={
                                    !!(form.errors.value && form.touched.value)
                                        ? form.errors.value
                                        : ''
                                }
                                name={'value'}
                                value={form.values.value || ''}
                                onChange={form.handleChange}
                                label={'Value'}
                            />
                        </Stack>
                        {/*<SnackbarAlert
                            error={ mutation.error }
                            open={ open }
                            setOpen={ setOpen }
                            message={ message }
                            setMessage={ setMessage }
                        />*/}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            size={'small'}
                            variant={'outlined'}
                            onClick={handleClose}
                        >
                            Cancel
                        </Button>
                        <Button size={'small'} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </form>
        </>
    );
};
