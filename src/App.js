import React from "react";
import Header from "./Components/Header";
import Intro from"./Components/Intro";
import Services from "./Components/Services";
import { InnerLayout, OuterLayout } from "./Styles/Layouts";
import Portofolio from "./Components/Portofolio";
import Foots from "./Components/Foots";
function App(){
    return(
        <div className="App">
           
            <OuterLayout>
            <Header/>
            <InnerLayout>
            <Intro/>
            <Services />
            <Portofolio/>
           
            </InnerLayout>
            </OuterLayout>
            <Foots/>
        </div>
    );
}


export default App;