import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ linkName="", link="", pageName="Page Name" }) {
    return (
        <nav aria-label="breadcrumb" style={{ maxWidth: "90%", margin: "auto"}}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item text-secondary" style={{margin: "3px 0px"}}>
                    <Link className="m-1" to="/"><i className="bi bi-house m-1"></i>Home</Link>
                </li>
                

                {linkName && (
                 <li className="breadcrumb-item">
                    <p className="m-1 text-info"></p>
                    <Link to={link}>{linkName}</Link>
                </li>
                )
                }

                <li className="breadcrumb-item active" aria-current="page">
                    <p className="m-1 text-info">{pageName}</p>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;