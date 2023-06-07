import React from "react";
import Header from "./Components/Header";
import Intro from"./Components/Intro";
import Services from "./Components/Services";
import { InnerLayout } from "./Styles/Layouts";
import Portofolio from "./Components/Portofolio";
function App(){
    return(
        <div className="App">
            <Header/>
            <InnerLayout>
            <Intro/>
            <Services />
            <Portofolio/>
           
            </InnerLayout>
            
        </div>
    );
}


export default App;