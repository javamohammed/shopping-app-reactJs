import React from 'react'
import CardLogin from "../components/ui/CardLogin";
import CardRegister from "../components/ui/CardRegister";
export default function Auth(props) {
    const  url  = props.match.url
    let card = <CardLogin/>
    if(url =='/register'){
        card = <CardRegister/> 
    }
    
    return (
        <div className="container d-flex flex-column justify-content-between vh-100">
            <div className="row justify-content-center mt-5">
                <div className="col-xl-5 col-lg-6 col-md-10">
                    {card}
                </div>
            </div>
            <div className="copyright pl-0">
                <p class="text-center">&copy; 2021  Copyright Shopping-App By Mohammed Aoulad Bouchta.</p>
            </div>
        </div>
    )
}
