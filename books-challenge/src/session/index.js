export const sessionSet = dados => {
  localStorage.setItem('bookData', JSON.stringify(dados));
}

export const sessionGet = dado => {
  const dados = JSON.parse(localStorage.getItem('bookData'));

  return (dados) ? dados[dado] : 'Sessão não gravada!';
}

export const isLogged = () => ((localStorage.getItem('bookData')) ? true : false);

export const clearSession = async () => {
  localStorage.clear();
  window.location = '/';
};
