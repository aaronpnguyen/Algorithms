function classPhotos(redShirtHeights, blueShirtHeights) {
    let red = redShirtHeights.sort((a, b) => b - a), blue = blueShirtHeights.sort((a, b) => b - a);
    let top = null, bottom = null;
  
    if (red[0] > blue[0]) [top, bottom] = [red, blue];
    else [top, bottom] = [blue, red];
  
    for (let i = 0; i < red.length; i++) {
      if (bottom[i] >= top[i]) return false;
    }
    
    return true;
  }