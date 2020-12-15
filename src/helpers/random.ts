export const generateRandomColors = (numColors: number) => {
  const randomColors = Array(numColors).fill('').reduce((acc: string[]) => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    return [
      ...acc,
      `rgba(${red},${green},${blue})`,
    ];
  }, []);

  return randomColors;
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const getRandomRouletteDuration = () => {
  // return (Math.floor(Math.random() * 2) + 4) * 1000; 
  return 0;
};

export const shuffleOrder = (input: any[]) => {
  const shuffledArray = input.slice();

  for (var i = shuffledArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = shuffledArray[i];
    shuffledArray[i] = shuffledArray[j];
    shuffledArray[j] = temp;
  }

  return shuffledArray;
};
