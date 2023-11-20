// export const CompareShot = (x) => {
//  browser.checkScreen('x', {
//     /* some options */
// })
// }
// export const CaptureShot = (x) =>{{
//     async () =>{
//         saveScreen('x', {
//         })
//     }
// }
// // export const pauseScroll = (time,x_axis,y_axis) => {
// //      () =>{
// //         await browser.pause(time)
// //         await browser.scroll(x_axis,y_axis)
// //         await browser.pause(time)
// //     }
// // }

import { time } from "console";

// // }
export const RandomBedsSelector=(min,max) =>{
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
}
export const CaptureShotElement=(element,name)=>{
    async (element,name) =>{
       await browser.saveElement(element,'%d',name,{})
        return name
    }
}
// export const waitforElementDisplay=(element,Time)={
//     async (element,Time)=>{
//         await browser.waitUntil(async()=> {
//           return (await element.isDisplayed())
//         }, {
//           timeout: time,
//         })}  


  
    
      
