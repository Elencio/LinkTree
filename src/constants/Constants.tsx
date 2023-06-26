
export const getSubtitleVariant = (name: string) => {
  if (name === 'Elencio Calado') {
    return 'red';
  }

  if (name === 'Edilson Rogerio') {
    return 'yellow';
  }

  if (name === 'Antonio Uamba') {
    return 'green';
  }

  if (name === 'Gervasio Dombo') {
    return 'yellow';
  }


  return undefined; 
};

export const getLinkedInUrl = (name: string) => {
  // Substitua os URLs de exemplo pelos URLs corretos do LinkedIn de cada pessoa
  if (name === 'Elencio Calado') {
    return 'https://www.linkedin.com/in/elencio-calado-zivane/';
  }

  if (name === 'Edilson Rogerio') {
    return 'https://www.linkedin.com/in/edilson-rogerio-cuambe-b4999b211/';
  }

  if (name === 'Antonio Uamba') {
    return 'https://www.linkedin.com/in/antonio-paulo-uamba-456871212/';
  }

  if (name === 'Gervasio Dombo') {
    return 'https://www.linkedin.com/in/gervasio-artur-dombo/';
  }

  return '#'; // Caso não haja um URL disponível, pode ser definido como '#'
};