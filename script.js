const pets = [
  {
    name: "Bella",
    breed: "Golden Retriever",
    age: "2 years",
    image: "https://placedog.net/400/300?id=1"
  },
  {
    name: "Milo",
    breed: "Tabby Cat",
    age: "1 year",
    image: "https://placekitten.com/400/300"
  },
  {
    name: "Rocky",
    breed: "German Shepherd",
    age: "3 years",
    image: "https://placedog.net/400/300?id=2"
  },
  {
    name: "Luna",
    breed: "Siamese Cat",
    age: "2.5 years",
    image: "https://placekitten.com/401/301"
  }
];

function generatePetCard() {
  const container = document.getElementById('cardContainer');
  container.innerHTML = ''; // clear old cards if needed

  pets.forEach(pet => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}">
      <h2>${pet.name}</h2>
      <p>Breed: ${pet.breed}</p>
      <p>Age: ${pet.age}</p>
    `;

    container.appendChild(card);
  });
}
