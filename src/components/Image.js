import React, {Component} from "react"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import Style from "../style.css"

class Image extends Component{

    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
 
                <TransitionGroup>
                    <CSSTransition
                        key={this.props.state_passed.images[this.props.state_passed.current_carousel_image_index].id}
                        timeout={300}
                        classNames="fade"
                    >
                        {this.props.render_images[this.props.state_passed.current_carousel_image_index]}
                    </CSSTransition>
                </TransitionGroup>

        )
    }

}

export default Image