export const isOptionMatchSearchFilter = (
  optionLabel: string,
  inputValue: string,
) => optionLabel.toLowerCase().includes(inputValue.toLowerCase());
