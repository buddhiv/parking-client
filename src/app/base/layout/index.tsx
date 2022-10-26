import React from 'react';
import Content from '../content';
import Footer from '../footer';
import Header from '../header';
import './index.css';

interface Props {

}

function Layout(props: Props) {
    return (
        <div className='layout'>
            <Header />

            <Content />

            <Footer />
        </div>
    );
}

export default Layout;