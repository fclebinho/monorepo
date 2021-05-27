export const accountTypeToString = (type: number): string => {
  switch (type) {
    case 1:
      return 'Bancária';

    default:
      return 'Carteira';
  }
};

export default accountTypeToString;
