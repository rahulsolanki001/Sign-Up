import plane from "../plane.jpg";
import "./ImageContainer.css";

const ImageContainer=()=>{

    return (
        <div className="img-container">
            <img src={plane} alt="airplane in sky"/>
            <div className="text-container">
                <h1>Altitude Air</h1>
                <hr id="title-underline"></hr>
                <p>We promise to ensure that your well-being is taken care of while travelling with us.Boasting top in  class 
                    fleet inventory and a 5 star approval for our in-flight experience,you know you're getting the best from
                    Altitude with no attitude.
                </p>
            </div>
        </div>
    )
};

export default ImageContainer;