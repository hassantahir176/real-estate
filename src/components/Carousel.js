import React, {Component} from "react"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import {carousel_images} from "../dataFiles/carousel-images"

class Carousel extends Component{

    constructor(){
        super()
        this.state = {
            images: carousel_images,
            current_carousel_image_index: 0,
            carousel_num_images: 3,
            carousel_loaded: true,
        }
        this.changeImage = this.changeImage.bind(this)
        this.carouselContainerHeight = this.carouselContainerHeight.bind(this)
    }

    componentDidMount(){
        
        setInterval(() => {
            this.changeImage()
        }, 5000);
        
        const image = document.querySelector(".carousel img")
        image.addEventListener("load", this.carouselContainerHeight)
        window.addEventListener("resize", this.carouselContainerHeight)
    }

    componentWillUnmount(){
        
    }

    changeImage() {
        this.setState(function(prevState){
            const newIndex = prevState.current_carousel_image_index === (prevState.carousel_num_images - 1) ? 0 : (prevState.current_carousel_image_index + 1)
            return {
                ...prevState,
                current_carousel_image_index: newIndex,
                carousel_loaded: !this.state.carousel_loaded
            }
        })
    }
    /* Give height to carousel container equal to the images inside it */
    carouselContainerHeight() {
        const image_height = document.querySelector(".carousel img").clientHeight
        var carousel_container = document.querySelector(".carousel > div")
        carousel_container.setAttribute("style", "height: "+ image_height + "px")
    }

    render(){
        var render_images = this.state.images.map(
            function(current_image_object){
                return (
                    <img src={current_image_object.image} />
                )
            }
        )
        return(
            <div className="carousel">
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.current_carousel_image_index}
                        in={this.state.carousel_loaded}
                        appear={true}
                        timeout={300}
                        classNames="fade"
                    >
                        {render_images[this.state.current_carousel_image_index]}
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }

}

export default Carousel