function addressMaker(address) {
  const newAddress = {
    newCity: address.city,
    newState: address.state,
    contry: 'United State'
  };

}

addressMaker(city: 'Austin', state: 'Texas');
//than we change to something like this

function addressMaker(address) {
  const { city, state } = addres;

  const newAddress = {
    city,
    state,
    contry: 'United State'
  };
  console.log(`${newAddress.city}`, ${ newAddress.state }, `${newAddress.contry}`);
}
