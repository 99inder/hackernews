import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import PostPage from './pages/PostPage';

const App = () => {

    return (
        <div className='min-w-sreen min-h-screen overflow-x-hidden'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/postId/:id' element={<PostPage />} />
            </Routes>
        </div>
    )
}

export default App