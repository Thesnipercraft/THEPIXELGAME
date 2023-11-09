const numberPixel = (
    number
 ) => {
    const colors = ["#ff0000", "#a52a2a", "#ffa500", "#ffff00", "#00ff00", "#008000", "#00ffff", "#0000ff", "#800080", "#ffc0cb", "#000000", "#ffffff"] //red, brown, orange, yellow, lime, green, cyan, blue, purple, pink, black, white 
    return colors[parseInt(number) - 1]
  }


export default numberPixel;
