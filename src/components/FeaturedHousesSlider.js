import React, {Component} from "react"
import {houses_data} from "../dataFiles/houses-data"

class FeaturedHousesSlider extends Component{
    constructor(){
        super()
        this.state = {
            houses: houses_data,
            num_houses: 0,
            property_listing_width: 0,
            slider_wrapper_width: 0,
            index: 0,
            num_properties_visible: 0
        }
    }

    setFeaturedSliderWidth = () => {

        var num_properties_visible = 0
        var browser_width = window.innerWidth
        if(browser_width > 992){
            num_properties_visible = 3
        }
        else if(browser_width > 768){
            num_properties_visible = 2
        }
        else{
            num_properties_visible = 1
        }
        const {houses} = this.state

        const slider_container_width = document.querySelector(".slider-container").clientWidth
        const property_listing_width1 = slider_container_width / num_properties_visible

        const num_houses = houses.length
        const slider_wrapper_width = property_listing_width1 * houses.length

        this.setState((prevState) => {
            return {
                ...prevState,
                property_listing_width: property_listing_width1,
                num_houses: num_houses,
                slider_wrapper_width: slider_wrapper_width,
                num_properties_visible: num_properties_visible
            }
        })
    }

    prevProperty = () => {
        if(this.state.index > 0){
            this.setState((prevState) => {
                return {
                    ...prevState,
                    index: prevState.index-1
                }
            })
        }
    }

    nextProperty = () => {
        const {
            index,
            num_properties_visible,
            num_houses
        } = this.state;
        if(this.state.index + this.state.num_properties_visible < num_houses){
            this.setState((prevState) => {
                return {
                    ...prevState,
                    index: prevState.index+1
                }
            })
        }
    }

    componentDidMount(){
        this.setFeaturedSliderWidth()
        window.addEventListener("resize", this.setFeaturedSliderWidth)
    }

    render(){
        
        const slider_wrapper_left = this.state.index * this.state.property_listing_width * -1

        const render_houses = this.state.houses.map((house) => {
            console.log("ID: " + house.id)
            return (
                <div key={house.id}  style={{width: this.state.property_listing_width}} class="property-listing-container">
                    <div class="property-listing">
                        <a href="">
                            <div class="property-image-container">
                                <img class="property-image" src={house.image} />
                            </div>
                            <div class="property-info">
                                <h4 class="property-title">{house.title}</h4>
                                <h4 class="property-price">${house.price}</h4>
                                <p class="property-excerpt">{house.excerpt}</p>
                                <hr />
                                <div class="bottom-info">
                                    <span class="bed-info">{house.beds}</span>
                                    <span class="bath-info">{house.baths}</span>
                                    <span class="area-info">{house.area}m<sup>2</sup></span>
                                    <span class="property-full-info">Full Info</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            )
        })

        return (
            <React.Fragment>
                <div class="container property-listings">
                    <h2 >Latest Properties</h2>
                    <div class="row">
                        <div class="slider-container col-12">
                            <div class="featured-slider-buttons-container">
                                <span class="featured-prev-button" onClick={this.prevProperty}></span>
                                <span class="featured-next-button" onClick={this.nextProperty}></span>
                            </div>
                            <div class="slider-wrapper" style={{left: slider_wrapper_left}}>
                                {render_houses}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default FeaturedHousesSlider