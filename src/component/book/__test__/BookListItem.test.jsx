import { render } from '@testing-library/react';
import React from 'react';
import BookListItem from '../BookListItem';

describe('BookListItem', () => {
    it('should render booklistitem with error', () => {
        const book = {
            id: 1,
            title: 'test title',
            description: 'desc',
            releaseYear: 2018
        }
        const { getAllByText } = render(<BookListItem book={book}/>);
        expect(getAllByText('test title')).toBeInTheDocument();
        expect(getAllByText('desc')).toBeInTheDocument();
        expect(getAllByText(2018)).toBeInTheDocument();

    })
})
