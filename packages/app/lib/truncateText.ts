import React from "react";

function truncate(string: string, numberOfWords: number) {
  return string.split(" ").splice(0, numberOfWords).join(" ");
}

function calculateText(string: string) {
  return string.split(" ").length;

  // Get and return the screen dimensions
  // Based on screen dimensions , Define the breakpoints and RETURN the number of words correlated (a)
  /* switch case screenSize = 375 -> return numberOfWords = 50  
      case screenSize = 465 -> return numberOfWords = 80 
    */

  // Calculate and return  the total of words from the data (b)

  // calculate and return the total of pages = (b) / (a)

  //ProgressBar
  // 1. (current page / total page) * 100 = Page Progress Percentage

  //Bookmark
  // 1. Get the total of page
  // 2. Get the current page
  // 3. Append a bookmark is true to JSON data structure with the current page structure (page)
}

console.log(
  calculateText(
    "The quick brown fox jumps over the lazy dog I just think this is waht I am looking for adisadisad ioasudi asudasi duasduasio dusaidu asoidua ouo uadu sdis sudiu oaudisa au d aiu aidus uas uasoiu odasodua asoduaoiudaso iuasoi uasoidu o"
  )
);

console.log(
  truncate(
    "The quick brown fox jumps over the lazy dog I just think this is waht I am looking for adisadisad ioasudi asudasi duasduasio dusaidu asoidua ouo uadu sdis sudiu oaudisa au d aiu aidus uas uasoiu odasodua asoduaoiudaso iuasoi uasoidu o",
    30
  )
);

// import { TouchableOpacity } from "react-native"

// export const TouchableOpacityOnPressOptimized = ({ children, onPress, index }) => {
//   return (
//     <TouchableOpacity onPress={() => onPress(index)}>
//       {children}
//     </TouchableOpacity>
//   )
// }

// const touchMe = (index) => {
//     switch(index) {
//        case 1: alert('index is' + index)
//        case 2: alert('index is' + index)
//     }
// }

// <TouchableOpacityOnPressOptimized index={1} onPress={touchMe}> touch me 1 </TouchableOpacityOnPressOptimized>

// <TouchableOpacityOnPressOptimized index={2} onPress={touchMe}> touch me 2 </TouchableOpacityOnPressOptimized>

// <TouchableOpacityOnPressOptimized index={3} onPress={touchMe}> touch me 3 </TouchableOpacityOnPressOptimized>

// import { useRef, useEffect } from 'react';

// function AccessingElement() {
//   const elementRef = useRef();

//    useEffect(() => {
//     const divElement = elementRef.current;
//   }, []);

//   return (
//     <div ref={elementRef}>
//       I'm an element
//     </div>
//   );
// }
