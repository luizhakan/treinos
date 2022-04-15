palindromo = (palavra) => {
  const palindrome = palavra.split("").reverse().join("");
  return palindrome === palavra
    ? `"${palavra}" é um palíndromo`
    : `"${palavra}" não é um palíndromo`;
};

console.log(palindromo("amor a roma"));
