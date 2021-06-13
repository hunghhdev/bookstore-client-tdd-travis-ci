import { Box, Paper } from "@material-ui/core";
import styles from './BookStyles';

const BookFilter = () => {
    const classes = styles();
    return(
        <Box className={classes.bookFilter}>
            <Paper className={classes.bookFilterPapper}>
                book filter
            </Paper>
        </Box>
    );
}

export default BookFilter;
