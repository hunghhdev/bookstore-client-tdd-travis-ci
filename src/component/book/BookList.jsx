import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import BookListItem from './BookListItem';
import makeStyles from './BookStyles';

const propTypes = {
    books: PropTypes.arrayOf({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        releaseYear: PropTypes.number.isRequired
    }).isRequired
}

const BookList = ({ books }) => {
    const classes = makeStyles();
    return (
        <Box className={classes.bookList} ml={5}>
            {books.map((book) => (
                <BookListItem book={book} key={book.id} />
            ))}
        </Box>
    )
};

BookList.propTypes = propTypes;
export default BookList;
