import * as React from 'react';
import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material';
import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import { FilterModal } from '@/app/components/elements/FilterModal/FilterModal';

//TODO : Replace this with your data and connect with custom hook
const createData = (
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) => {
    return { name, calories, fat, carbs, protein };
};

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

type DataGridPaginatedProps = {
    title: string;
};

export const DataGridPaginated: FC<DataGridPaginatedProps> = ({ title }) => {
    const [age, setAge] = React.useState('');
    const [openFilterModal, setFilterModal] = React.useState(false);
    const [filter, setFilter] = React.useState('filter=');

    const handleOpenFilterModal = () => setFilterModal(true);
    const handleCloseFilterModal = () => setFilterModal(false);

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant={'h3'}>{title}</Typography>
            <Box marginBottom={1} display={'flex'} justifyContent={'flex-end'}>
                <Box margin={1}>
                    <Button
                        variant={'outlined'}
                        onClick={handleOpenFilterModal}
                    >
                        Filtres
                    </Button>
                </Box>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="rangées">Rangées</InputLabel>
                    <Select
                        variant={'outlined'}
                        labelId="rangées"
                        value={age}
                        label="Rangées"
                        onChange={handleChange}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={15}>15</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <TableContainer component={Paper}>
                <Table
                    sx={{ minWidth: 650, borderRadius: 20 }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">
                                Protein&nbsp;(g)
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    {row.calories}
                                </TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">
                                    {row.protein}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display={'flex'} justifyContent={'space-between'}>
                <ButtonGroup sx={{ mt: 2 }}>
                    <Button size={'small'} startIcon={<ArrowLeft />}>
                        Précédent
                    </Button>
                    <Button size={'small'} endIcon={<ArrowRight />}>
                        Suivant
                    </Button>
                </ButtonGroup>
                {/*//TODO : Replace [x] with current page and total page (e.g. total items / size of
                page)*/}
                <Typography margin={2}>Page [x]/[x]</Typography>
            </Box>
            <FilterModal
                open={openFilterModal}
                handleClose={handleCloseFilterModal}
                filter={filter}
                setFilter={setFilter}
            />
        </Container>
    );
};