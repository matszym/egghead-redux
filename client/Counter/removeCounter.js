const removeCounter = ({originalArray, index}) => (
  originalArray.filter((counter, i) => i !== index)
);

export default removeCounter;