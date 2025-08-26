import gsap from 'gsap';
import React from 'react';
import {ScrollTrigger,SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
    return (
        <div className='flex-center h-'>
            <h1 className="text-3xl text-indigo-300 flex-center">Hello,GSAP!</h1>
        </div>
    )
}
export default App

