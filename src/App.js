import React from "react";
import Header from "./Components/Header";
import Intro from"./Components/Intro";
import Services from "./Components/Services";
import { InnerLayout } from "./Styles/Layouts";
import Portofolio from "./Components/Portofolio";
import Foots from "./Components/Foots";
function App(){
    return(
        <div className="App">
            <Header/>
            <InnerLayout>
            <Intro/>
            <Services />
            <Portofolio/>
           
            </InnerLayout>
            <Foots/>
        </div>
    );
}


export default App;