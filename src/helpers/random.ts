export const generateRandomColor = () => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

export const generateRandomColors = (numColors: number) => {
  const randomColors = Array(numColors).fill('').reduce((acc: string[]) => {
    return [
      ...acc,
      `#${Math.floor(Math.random()*16777215).toString(16)}`,
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
