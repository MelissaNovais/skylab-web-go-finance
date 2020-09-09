const formatValue = (value: number): string => {
  if (value) {
    return value.toLocaleString('pt-BR', {
      style: 'decimal',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  }
  return '0,00';
};

export default formatValue;
