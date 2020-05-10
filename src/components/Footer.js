import React, {Component} from "react"

class Footer extends Component{

    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div id="footer" class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-12">
                        <h4>About Us</h4>
                        <p>This is dummy text. This is dummy text. This is dummy text. This is dummy text.
                        This is dummy text. This is dummy text.This is dummy text. This is dummy text.
                        This is dummy text. This is dummy text.This is dummy text. This is dummy text.
                        This is dummy text. This is dummy text.This is dummy text. This is dummy text.
                        </p>
                    </div>
                    <div class="col-md-3 col-sm-6 col-12">
                        <h4>Navigation</h4>
                        <ul className="sub-menu">
                            <li><a href="">Main Demo</a></li>
                            <li><a href="">London Demo</a></li>
                            <li><a href="">Paris Demo</a></li>
                            <li><a href="">Manchester Demo</a></li>
                            <li><a href="">New York Demo</a></li>
                            <li><a href="">London Demo</a></li>
                            <li><a href="">Paris Demo</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 col-12">
                        <h4>Demos</h4>
                        <ul className="sub-menu">
                            <li><a href="">Main Demo</a></li>
                            <li><a href="">London Demo</a></li>
                            <li><a href="">Paris Demo</a></li>
                            <li><a href="">Manchester Demo</a></li>
                            <li><a href="">New York Demo</a></li>
                            <li><a href="">London Demo</a></li>
                            <li><a href="">Paris Demo</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 col-12">
                        <h4>Newsletter</h4>
                        <p>Subscribe to our newsletter to get the latest updates</p>
                        <form>
                            <input type="text" name="subscription-email" placeholder="Email" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer