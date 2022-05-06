import React from 'react'
import ImageCard1 from '../components/imageCard1';
import ImageCard2 from '../components/imageCard2';
import ImageCard3 from '../components/imageCard3';
import MyNavbar from '../components/navbar';

function Home () {
    return (
        <React.Fragment>
        <MyNavbar/>
        <br/>
        <br/>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Dummy Ecommerce Site</h1>
                <p class="lead">Placeholder.</p>
            </div>
        </div>
        <br/>
        <br/>
        <div className='row'>
            <div className='col'>
                <ImageCard1/>
            </div>
            <div className='col'>
                <ImageCard2/>
            </div>
            <div className='col'>
                <ImageCard3/>
            </div>
        </div>
        <br/>
        <br/>
        <div className='row'>
            <div className='col'>
                <ImageCard1/>
            </div>
            <div className='col'>
                <ImageCard2/>
            </div>
            <div className='col'>
                <ImageCard3/>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home;