import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import PostId from './pages/PostId';

const App = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/postId/:id' element={<PostId />} />
            </Routes>
        </>
    )
}

export default App