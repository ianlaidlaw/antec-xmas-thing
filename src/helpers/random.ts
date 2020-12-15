



export const generateRandomColors = (numColors: number) => {
  const randomColors = Array(numColors).fill('').reduce((acc: string[]) => {
    return [
      ...acc,
      `#${Math.floor(Math.random()*16777215).toString(16)}`,
    ];
  }, []);

  return randomColors;
};
