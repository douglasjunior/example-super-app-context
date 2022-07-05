/**
 * Função de exemplo de um "format".
 * Aplica máscara a um número de CPF, parcial ou completo.
 *
 * @param value CPF puro ou já com máscara
 * @returns CPF com máscara
 */
function maskCpf(value: string) {
  console.log({value});
  const cleaned = value.replace(/\D/g, '');

  if (!cleaned) {
    return cleaned;
  }

  const group1 = cleaned.substring(0, 3);
  const group2 = cleaned.substring(3, 6);
  const group3 = cleaned.substring(6, 9);
  const group4 = cleaned.substring(9, 11);

  let masked = group1;

  if (group2) {
    masked += '.' + group2;
  }

  if (group3) {
    masked += '.' + group3;
  }

  if (group4) {
    masked += '-' + group4;
  }

  return masked;
}

export default maskCpf;
