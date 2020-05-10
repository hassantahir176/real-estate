import React from "react"
import Carousel from "./Carousel"
import FeaturedHousesSlider from "./FeaturedHousesSlider"
class Content extends React.Component{

    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <React.Fragment>
                <Carousel />
                <FeaturedHousesSlider />
                <div class="background-image-block-container">
                    <svg class="svg-hide-background-image-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M0 0V0h1000v100L0 0z"></path>
                    </svg>
                    <div class="section-with-background-container">
                        <div class="section-with-background">
                            <h3>Looking to Buy a new property or Sell an existing one?<br />
                                RealHomes provide an awesome solution!
                            </h3>
                            <button class="home-submit-property">Submit Property</button>
                            <button class="home-browse-properties">Browse Properties</button>
                        </div>
                    </div>
                    <svg class="svg-hide-background-image-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path class="elementor-shape-fill" d="M0 0V0h1000v100L0 0z"></path>
                    </svg>
                </div>
            </React.Fragment>
        )
    }
}

export default Content