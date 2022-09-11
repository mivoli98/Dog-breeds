import React from 'react';
import { Search, Header, Navbar, Footer } from './component';
import './Styles/global.css';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <Search />
            <Footer />
        </div>
    );
}

export default App;