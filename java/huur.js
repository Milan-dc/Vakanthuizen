fetch('jason/huur.json')
  .then(response => response.json())
  .then(data => {
    // Get the container elements for each house
    const huur1Container = document.getElementById('huur1-container');
    const huur2Container = document.getElementById('huur2-container');

    // Get the data for House 1 and populate the container
    const huur1 = data.huur[0];
    huur1Container.innerHTML = `
      <p><span style="font-size: larger; font-weight: bold;">Prijs</span>: ${huur1.price}</p>
      <p><span style="font-size: larger; font-weight: bold;">Locatie</span>: ${huur1.location}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal personen</span>: ${huur1.persons}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal kamers</span>: ${huur1.rooms}</p>
      <p><span style="font-size: larger; font-weight: bold;">Speciale voorzieningen</span>: ${huur1.special_features}</p>
    `;

    // Get the data for House 2 and populate the container
    const huur2 = data.huur[1];
    huur2Container.innerHTML = `
      <p><span style="font-size: larger; font-weight: bold;">Prijs</span>: ${huur2.price}</p>
      <p><span style="font-size: larger; font-weight: bold;">Locatie</span>: ${huur2.location}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal personen</span>: ${huur2.persons}</p>
      <p><span style="font-size: larger; font-weight: bold;">Aantal kamers</span>: ${huur2.rooms}</p>
      <p><span style="font-size: larger; font-weight: bold;">Speciale voorzieningen</span>: ${huur2.special_features}</p>
    `;
  });
