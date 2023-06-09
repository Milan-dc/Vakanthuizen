fetch('jason/house.json')
  .then(response => response.json())
  .then(data => {
    // Get the container elements for each house
    const house1Container = document.getElementById('house1-container');
    const house2Container = document.getElementById('house2-container');

    // Get the data for House 1 and populate the container
    const house1 = data.houses[0];
    house1Container.innerHTML = `
      <h2>${house1.name}</h2>
      <p><span style="font-size: larger; font-weight: bold;">Prijs</span>: ${house1.price}</p>
      <p><span style="font-size: larger; font-weight: bold;">Locatie</span>: ${house1.location}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal personen</span>: ${house1.persons}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal kamers</span>: ${house1.rooms}</p>
      <a href="huur.html" class="read-more">
        Meer info <span class="sr-only"></span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    `;

    // Get the data for House 2 and populate the container
    const house2 = data.houses[1];
    house2Container.innerHTML = `
      <h2>${house2.name}</h2>
      <p><span style="font-size: larger; font-weight: bold;">Prijs</span>: ${house2.price}</p>
      <p><span style="font-size: larger; font-weight: bold;">Locatie</span>: ${house2.location}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal personen</span>: ${house2.persons}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal kamers</span>: ${house2.rooms}</p>
      <a href="huur.html" class="read-more">
        Meer info <span class="sr-only"></span>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
    `;
  });
