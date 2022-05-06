import React from 'react'
import ImageCard from '../components/imageCard1';
import MyNavbar from '../components/navbar';

function Home () {
    return (
        <React.Fragment>
        <MyNavbar/>
        <br/>
        <br/>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <ImageCard/>
            </div>
            <div className='col'></div>
            <div className='col'></div>
        </div>
        </React.Fragment>
    )
}

export default Home;