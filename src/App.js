import React from "react";
import Header from "./Components/Header";
import Intro from"./Components/Intro";
import Services from "./Components/Services";
import Servicesslider from "./Components/Servicesslider";
import { InnerLayout, OuterLayout } from "./Styles/Layouts";
import Portofolio from "./Components/Portofolio";
import Foots from "./Components/Foots";
import Aboutme from "./Components/Aboutme";
import ServiceHeader from "./Components/ServiceHeader";
function App(){
    return(
        <div className="App">
           
            <OuterLayout>
            <Header/>
            <InnerLayout>
            <Intro/>
            <Aboutme/>
            <ServiceHeader/>
            <Servicesslider/>
           
            <Portofolio/>
           
            </InnerLayout>
            </OuterLayout>
            <Foots/>
        </div>
    );
}


export default App;