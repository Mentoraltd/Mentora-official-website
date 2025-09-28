import React from "react";
import Footer from "../../../footer";
import Navigation from "../navigation";
import { ErrorPage } from "../../Resources/updatesLog";
import errorImage from "./../../assets/undefined-removebg-preview.png";
import CustomCursor from "./customcursor";
import './error.css';

export default function Error () {
    return (
        <>
            <Navigation/>
            <CustomCursor/>
            <section className="errorCont">
                <img src={errorImage} alt="" style={{width: '200px', height: '200px'}}/>
                <ErrorPage/>
            </section>
        <Footer/>
        </>
    );
};