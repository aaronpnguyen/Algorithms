function moveElementToEnd(array, toMove) {
    let end = array.length - 1;
    while (array[end] == toMove) end--;
    
    for (let i = 0; i < end; i++) {
      if (array[end] == toMove) end--;
      if (array[i] == toMove) [array[i], array[end]] = [array[end], array[i]];
    }
    return array
  }