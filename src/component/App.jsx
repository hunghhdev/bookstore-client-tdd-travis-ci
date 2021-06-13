import axios from 'axios';
import React from 'react';
import baseUrl from '../config';
import Layout from './layout/Layout';

const App = () => {

    axios(`${baseUrl}/api/v1/books`).then(books => {
        console.log(books);
    })

    return (
        <Layout>
            <div>My first component updated</div>
        </Layout>
    )
}

export default App;
