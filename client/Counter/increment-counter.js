const incrementCounter = ({originalArray, index}) => {
  const copyArray = [...originalArray];
  copyArray[index] += 1;

  return copyArray;
}

export default incrementCounter;