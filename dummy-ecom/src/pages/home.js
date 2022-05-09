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
                <ImageCard1 props={{name : "Glasses 1", price : "£25", id : 1}}/>
            </div>
            <div className='col'>
                <ImageCard2 props={{name : "Glasses 2", price : "£45", id : 2}}/>
            </div>
            <div className='col'>
                <ImageCard3 props={{name : "Glasses 3", price : "£50", id : 3}}/>
            </div>
        </div>
        <br/>
        <br/>
        <div className='row'>
            <div className='col'>
                <ImageCard1 props={{name : "Glasses 4", price : "£5", id : 4}}/>
            </div>
            <div className='col'>
                <ImageCard2 props={{name : "Glasses 5", price : "£45", id : 5}}/>
            </div>
            <div className='col'>
                <ImageCard3 props={{name : "Glasses 6", price : "£500", id : 6}}/>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home;