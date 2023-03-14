import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ linkName="", link="", pageName="Page Name" }) {
    return (
        <nav aria-label="breadcrumb" style={{ maxWidth: "90%", margin: "auto"}}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item text-secondary" style={{margin: "3px 0px"}}>
                    <Link to="/"><i className="bi bi-house"></i>Home</Link>
                </li>
                

                {linkName && (
                 <li className="breadcrumb-item">
                    <p className="text-info"></p>
                    <Link to={link}>{linkName}</Link>
                </li>
                )
                }

                <li className="breadcrumb-item active" aria-current="page">
                    <p className="text-info">{pageName}</p>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumb;