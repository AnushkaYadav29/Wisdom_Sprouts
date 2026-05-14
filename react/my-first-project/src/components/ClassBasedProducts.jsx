import React from "react";
import IPhone17 from './assets/IPhone.jpg'





class ClassBasedProduct extends React.Component{
    render(){
        return(
             <section>
                  <h2 className='productHeading'>iPhone 17 Pro Max</h2>
                  <p className='paraDef'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores inventore rem voluptatem fuga. Facere maxime porro impedit neque enim, necessitatibus fugiat omnis reiciendis ipsum commodi eos quos ea illum sequi.</p>
                  <img src={IPhone17} alt="17Image" className='phoneImg'/>
                </section>
        )
    }
}




export default ClassBasedProduct