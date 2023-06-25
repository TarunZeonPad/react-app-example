import React from "react";
import { Link } from "react-router-dom";

function Header()
{
    return(
        <React.Fragment>
             <nav className="navbar">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h5 className="mt-0">Menu</h5>                    
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link to="/userdata" className="nav-link">Add New Version</Link></li>
                            <li className="nav-item"><Link to="/exportcsv" className="nav-link">View Version</Link></li>
                        </ul>
                    </div>
                </div>
                </div>

            </nav>
        </React.Fragment>
    );
}

export default Header;