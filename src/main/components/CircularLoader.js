import React from "react";
import {CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProvider from "./AnimatedProvider";

export const LoaderHtml = () => (
    <>
        <AnimatedProvider valueStart={0} valueEnd={97} duration={1.4} easingFunction={easeQuadInOut}>
            {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbarWithChildren
                        value={value}
                        strokeWidth = {3}
                        trailWidth = {1}
                        styles={buildStyles({ 
                            textColor: "Black",
                            trailColor: "#eee",
                            pathColor: "#FEAE01",
                            textSize: "14px",
                            pathTransition: "none" 
                        })}>
                        <div className="persentasi">
                            <h2>{`${roundedValue}%`}</h2>
                            <h6 className="progress-title">HTML5 & CSS</h6>
                        </div>        
                    </CircularProgressbarWithChildren>
                );
            }}
        </AnimatedProvider>
    </>
);

export const LoaderJava = () => (
    <>
        <AnimatedProvider valueStart={0} valueEnd={90} duration={1.4} easingFunction={easeQuadInOut}>
            {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbarWithChildren
                        value={value}
                        strokeWidth = {3}
                        trailWidth = {1}
                        styles={buildStyles({ 
                            textColor: "Black",
                            trailColor: "#eee",
                            pathColor: "#FEAE01",
                            textSize: "14px",
                            pathTransition: "none" 
                        })}>
                        <div className="persentasi">
                            <h2>{`${roundedValue}%`}</h2>
                            <h6 className="progress-title">JAVA</h6>
                        </div>        
                    </CircularProgressbarWithChildren>
                );
            }}
        </AnimatedProvider>
    </>
);

export const LoaderJavaScript = () => (
    <>
        <AnimatedProvider valueStart={0} valueEnd={78} duration={1.4} easingFunction={easeQuadInOut}>
            {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbarWithChildren
                        value={value}
                        strokeWidth = {3}
                        trailWidth = {1}
                        styles={buildStyles({ 
                            textColor: "Black",
                            trailColor: "#eee",
                            pathColor: "#FEAE01",
                            textSize: "14px",
                            pathTransition: "none" 
                        })}>
                        <div className="persentasi">
                            <h2>{`${roundedValue}%`}</h2>
                            <h6 className="progress-title">JAVASCRIPT</h6>
                        </div>        
                    </CircularProgressbarWithChildren>
                );
            }}
        </AnimatedProvider>
    </>
);

export const LoaderPhp = () => (
    <>
        <AnimatedProvider valueStart={0} valueEnd={85} duration={1.4} easingFunction={easeQuadInOut}>
            {value => {
                const roundedValue = Math.round(value);
                return (
                    <CircularProgressbarWithChildren
                        value={value}
                        strokeWidth = {3}
                        trailWidth = {1}
                        styles={buildStyles({ 
                            textColor: "Black",
                            trailColor: "#eee",
                            pathColor: "#FEAE01",
                            textSize: "14px",
                            pathTransition: "none" 
                        })}>
                        <div className="persentasi">
                            <h2>{`${roundedValue}%`}</h2>
                            <h6 className="progress-title">PHP</h6>
                        </div>        
                    </CircularProgressbarWithChildren>
                );
            }}
        </AnimatedProvider>
    </>
);