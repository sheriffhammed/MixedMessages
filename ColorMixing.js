//Array for the two Colors Mixtures
  let firstColor = ["Yellow", "Red", "Blue"];
  let secondColor = ["Yellow", "Red", "Blue"];
  

  // Color Mixing Function
  function colorMixing() {
    //Genearting Random value to represent each Index
    let firstColorIndex = Math.floor(Math.random() * firstColor.length);
    let secondColorIndex = Math.floor(Math.random() * secondColor.length);
    
    //These Variables are used to test the code
    //let firstColorIndex = 2;
    //let secondColorIndex = 2;
    
    if (firstColor[firstColorIndex] === 'Yellow' && secondColor[secondColorIndex] === 'Yellow')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Yellow`;
    else if (firstColor[firstColorIndex] === 'Yellow' && secondColor[secondColorIndex] === 'Red')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Orange`;
    else if (firstColor[firstColorIndex] === 'Yellow' && secondColor[secondColorIndex] === 'Blue')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Green`;
    else if (firstColor[firstColorIndex] === 'Red' && secondColor[secondColorIndex] === 'Yellow')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Orange`;
    else if (firstColor[firstColorIndex] === 'Red' && secondColor[secondColorIndex] === 'Red')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Red`;
    else if (firstColor[firstColorIndex] === 'Red' && secondColor[secondColorIndex] === 'Blue')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Purple`;
    else if (firstColor[firstColorIndex] === 'Blue' && secondColor[secondColorIndex] === 'Yellow')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Green`;
    else if (firstColor[firstColorIndex] === 'Blue' && secondColor[secondColorIndex] === 'Red')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Purple`;
    else if (firstColor[firstColorIndex] === 'Blue' && secondColor[secondColorIndex] === 'Blue')
        return `${firstColor[firstColorIndex]} + ${secondColor[secondColorIndex]} = Blue`;
    
    
  };
  
  //Calling of the Color Mixing Function
  console.log(colorMixing());