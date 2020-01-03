import React from 'react';
import Navbar from './navbar';
import Jumbotron from './jumbotron';
import Cards from './cards';
import Footer from './footer';
import './../index.css';





const App = (props) => {
    return (
        <>
            <Navbar nav1="Start Booststrap" nav2="Home" nav3="About" nav4="Services" nav5="Contact" />
            <div className="Container">
                <div className="row mt-4 mb-4">
                    <div className="col-md-12">
                        <Jumbotron jtitle="A Warm Welcome!" jbutton="Call to Action" jtext="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat." />
                        <Cards />
                    </div>
                </div>
            </div>
            <Footer textFooter="Copyright © Your Website 2019" />

        </>
    );
}


export default App;