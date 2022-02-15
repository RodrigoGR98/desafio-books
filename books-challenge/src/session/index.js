export const sessionSet = dados => {
  localStorage.setItem('dadosUser', JSON.stringify(dados));
}

export const sessionGet = dado => {
  const dados = JSON.parse(localStorage.getItem('dadosUser'));

  return (dados) ? dados[dado] : 'Sessão não gravada!';
}

export const isLogged = () => ((localStorage.getItem('dadosUser')) ? true : false);

export const clearSession = async () => {
  localStorage.clear();
  window.location = '/';
};
