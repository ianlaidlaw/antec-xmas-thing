export const generateRandomColor = () => {
  const red = Math.random();
  const green = Math.random();
  const blue = Math.random();

  return `rgba(${red},${green},${blue})`;
};

export const generateRandomColors = (numColors: number) => {
  const randomColors = Array(numColors+1).fill('').reduce((acc: string[]) => {
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
  return (Math.floor(Math.random() * 2) + 4) * 1000; 
}
