import React, {Component} from "react"

class Header extends Component{

    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return (
            <div className="header container-fluid">
                <div className="row">
                    <div className="header-logo col-md-3 col-sm-4 col-12">
                        <h3>LOGO</h3>
                    </div>
                    <div className="header-main-menu col-md-9 col-sm-8 col-12">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li className="menu-item-has-children">
                                <a href="">Properties</a>
                                <ul className="sub-menu">
                                    <li className="menu-item-has-children"><a href="">Main Demo</a>
                                        <ul className="sub-menu">
                                            <li><a href="">Main Demo</a></li>
                                            <li><a href="">London Demo</a></li>
                                            <li><a href="">Paris Demo</a></li>
                                            <li><a href="">Manchester Demo</a></li>
                                            <li><a href="">New York Demo</a></li>
                                            <li><a href="">London Demo</a></li>
                                            <li><a href="">Paris Demo</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="">London Demo</a></li>
                                    <li><a href="">Paris Demo</a></li>
                                    <li><a href="">Manchester Demo</a></li>
                                    <li><a href="">New York Demo</a></li>
                                    <li><a href="">London Demo</a></li>
                                    <li><a href="">Paris Demo</a></li>
                                </ul>
                            </li>
                            <li><a href="">Agents</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header