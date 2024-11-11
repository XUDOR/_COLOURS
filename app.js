const organizedColors = {
  whites: [
    { name: "Cardboard", hex: "#F9F9F7" },
    { name: "Estate", hex: "#FAFAFA" },
    { name: "Ice", hex: "#F9F9F7" },
    { name: "Gimlet", hex: "#F7F7F7" },
    { name: "Frost", hex: "#F7F7F5" },
    { name: "Confident", hex: "#FFFFFD" },
  ],
  OffWhite: [
    { name: "GoatMilk", hex: "#FFFEF5" },
    { name: "Ivory", hex: "#FCFBF2" },
    { name: "Book", hex: "#F9F7E8" },
    { name: "Document", hex: "#FFFFFA" },
    { name: "Parchment", hex: "#FFFADF" },
    { name: "Linen", hex: "#FBFBF4" },
    { name: "Milk", hex: "#FFFFE5" },
    { name: "Creamcheese", hex: "#F9F8D4" },
    { name: "Creamcheese II", hex: "#FCFBE3" },
    { name: "d’Affinois", hex: "#F9F8E8" },
    { name: "Hemp", hex: "#F2F2E7" },
    { name: "Bone", hex: "#F4F4EA" },
    { name: "Orchid", hex: "#F2EEDD" },
    { name: "Paperback", hex: "#F2EFD1" },
    { name: "New Chartreuse", hex: "#F7FDE1" },
  ],
  greys: [
    { name: "Eiderdown", hex: "#E0E0D5" },

    { name: "Antler", hex: "#D8D5CB" },
    { name: "Antler II", hex: "#D1CEC5" },
    { name: "Concrete", hex: "#777068" },
    { name: "Designer", hex: "#6B6B5F" },
    { name: "Smokey", hex: "#7A7968" },
    { name: "Shark", hex: "#BDC2C6" },
    { name: "Ash", hex: "#C2C4BB" },
    { name: "Smoke", hex: "#D3D3CB" },
    { name: "Elephant", hex: "#E2E2E2" },
    { name: "SilverWitch", hex: "#A0A39F" },
    { name: "SilverWitch 2", hex: "#C9C7C5" },
    { name: "Elephant II", hex: "#B7B3A9" },
    { name: "Navvy Jack", hex: "#B5B4B1" },
    { name: "Industrial", hex: "#A09F9A" },
    { name: "Malcolm", hex: "#707069" },
    { name: "Kaolin", hex: "#E1E2DE" },
    { name: "Sharky", hex: "#AAA9A3" },
    { name: "Pompeii", hex: "#87857B" },
    { name: "Castle", hex: "#D8DCD2" },
    { name: "Clay Paint", hex: "#617068" },
    { name: "New Ash", hex: "#92937D" },
    { name: "StoneHouse", hex: "#C5C6B6" },
    { name: "Pebble", hex: "#EDECE2" },
    { name: "SeaStone", hex: "#5A5956" },
    { name: "Boot", hex: "#494842" },
    { name: "SeaStone", hex: "#E2E0D7" },
    { name: "Designer II", hex: "#D1D6C5" },
    { name: "Iris I", hex: "#606062" },
    { name: "Iris II", hex: "#222827" },
    { name: "Stone", hex: "#444340" },
    { name: "Slate II", hex: "#44423A" },
    { name: "overCoat", hex: "#44423A" },
    { name: "Tidal Sand", hex: "#D3D2CA" },
    { name: "Math Class", hex: "#59584F" },
    { name: "SeaPebble", hex: "#626154" },
    { name: "Smoke", hex: "#41454D" },
    { name: "Glacier", hex: "#D9D9D9" },
    { name: "Glacier II", hex: "#E3E3E0" },
    { name: "StoneHouse", hex: "#C5C6B6" },
    { name: "Shigaraki", hex: "#EFEFE6" },
    { name: "Moderno", hex: "#EFEFE6" },
  ],
  blacks: [
    { name: "Treasure Island", hex: "#161414" },
    { name: "Serpent", hex: "#021B16" },
    { name: "Stealth", hex: "#20232A" },
    { name: "BioChar", hex: "#020202" },
    { name: "BlackBird", hex: "#190808" },
    { name: "Smokey", hex: "#1F1F1F" },
    { name: "Accent", hex: "#2D2D2D" },
    { name: "Matte Chic", hex: "#2D2C2A" },
    { name: "Stallion", hex: "#211F1F" },
    { name: "BioChar II", hex: "#211F1D" },
    { name: "Slate", hex: "#1E1E1E" },
    { name: "Bark", hex: "#211F1D" },
    { name: "NightSky", hex: "#071D29" },
    { name: "Iris II", hex: "#222827" },
  ],
  EarthTones: [
    { name: "Sand Dollar", hex: "#D6D0B4" },
    { name: "Sandy", hex: "#C1B99A" },
    { name: "Camel", hex: "#E0D6AD" },
    { name: "Tartinade", hex: "#9E742B" },
    { name: "Phloem", hex: "#674C23" },
    { name: "TreeBranch", hex: "#846613" },
    { name: "60% Cocoa", hex: "#332007" },
    { name: "Shoe", hex: "#7F6009" },
    { name: "Fox", hex: "#7D471E" },
    { name: "Caramel", hex: "#A16C28" },
    { name: "Recon", hex: "#35342A" },
    { name: "SnakeSkin", hex: "#565035" },
    { name: "Leather", hex: "#BAA668" },
    { name: "Nu Boot", hex: "#C9B769" },
    { name: "Bark", hex: "#35311F" },
  ],
  reds: [
    { name: "Fig", hex: "#774D4D" },
    { name: "Rhubarb I", hex: "#9D4B45" },
    { name: "Swallow", hex: "#A24035" },
    { name: "Chelan", hex: "#57030A" },
    { name: "Robin", hex: "#A32E0A" },
    { name: "Brisbane", hex: "#E8210C" },
    { name: "Canberra", hex: "#903336" },
    { name: "Osaka", hex: "#F20C3E" },
    { name: "Tuscany", hex: "#890E0E" },
    { name: "Fuscia", hex: "#D12466" },
    { name: "Gold Coast", hex: "#E0431E" },
    { name: "Melborne", hex: "#BA5109" },
    { name: "Valentine I", hex: "#B94000" },
  ],
  oranges: [
    { name: "JackLantern", hex: "#ED6407" },
    { name: "Neroli", hex: "#D69421" },
    { name: "Neroli II", hex: "#DB8C2D" },
    { name: "Nectarine", hex: "#B76C00" },
    { name: "Nectarine II", hex: "#A35113" },
    { name: "Oriole", hex: "#D36922" },
    { name: "Mandarin", hex: "#EF8A11" },
    { name: "Citrouille", hex: "#F49B0C" },
    { name: "Marmalade", hex: "#D09F3C" },
    { name: "Apricot", hex: "#BC8A1B" },
    { name: "Gumdrop", hex: "#FEB637" },
  ],
  yellows: [
    { name: "Buttercup", hex: "#EBC81A" },
    { name: "Goldenberry", hex: "#F2CB0A" },
    { name: "Sunrise", hex: "#F4D30C" },
    { name: "Cougar", hex: "#DBB026" },
    { name: "Cake", hex: "#D3B311" },
    { name: "Cat", hex: "#DDB73E" },
    { name: "DeckShoe", hex: "#E8CC87" },
    { name: "Beurre Blanc", hex: "#FCE883" },
    { name: "Sphinx", hex: "#C69A0C" },
    { name: "Cowboy", hex: "#BCAA08" },
    { name: "Temple", hex: "#ECB235" },
    { name: "Peach Pie", hex: "#EFAE0C" },
  ],
  greens: [
    { name: "Treebark", hex: "#515105" },
    { name: "Suitcase", hex: "#676421" },
    { name: "Marshgrass", hex: "#595930" },
    { name: "Kelp", hex: "#B2B28E" },
    { name: "Snail", hex: "#AAAA6D" },
    { name: "Valise", hex: "#AFAB7B" },
    { name: "Landrover", hex: "#778260" },
    { name: "Sidecar", hex: "#B6BAA4" },
    { name: "SpringLeaf", hex: "#8FA338" },
    { name: "Treefrog", hex: "#B1CC11" },
    { name: "Treefrog II", hex: "#A8C837" },
    { name: "Undergrowth", hex: "#90C10A" },
    { name: "Sherwood", hex: "#56A82F" },
    { name: "CBD", hex: "#A3AF31" },
    { name: "Indaca", hex: "#79A31C" },
    { name: "Mojito", hex: "#97C65C" },
    { name: "Lizard", hex: "#C6D000" },
    { name: "Grenouille", hex: "#A1AD39" },
    { name: "Catepillar", hex: "#B1CC11" },
    { name: "Leaf Two", hex: "#9DAF5E" },
    { name: "Taggiasca", hex: "#7B8F63" },
    { name: "Gigan", hex: "#687751" },
    { name: "Moss Two", hex: "#9DAF5E" },
    { name: "Moss II", hex: "#737F3A" },
    { name: "Modern Bag", hex: "#44491E" },
    { name: "Car Interior", hex: "#27332D" },
    { name: "Lillypad", hex: "#86B700" },
    { name: "Morning Tree", hex: "#629C42" },
    { name: "JungleLeaf Reginula", hex: "#308408" },
    { name: "Reginula II", hex: "#A5A247" },
    { name: "Dragon II", hex: "#54582B" },
    { name: "Turtle", hex: "#9AA200" },
    { name: "TreeLeaf I", hex: "#A79F43" },
    { name: "TreeLeaf III", hex: "#4E491D" },
    { name: "TreeLeaf II", hex: "#60632A" },
    { name: "kermit", hex: "#96A508" },
    { name: "kermit II", hex: "#AEB524" },
    { name: "kermit III", hex: "#A8B571" },
    { name: "Leaf One", hex: "#868C07" },
    { name: "Leaf III", hex: "#93A01C" },
    { name: "Hypnum", hex: "#B3BC6D" },
    { name: "New Olive", hex: "#929672" },
    { name: "Pottery", hex: "#BBBCA7" },
    { name: "Undergrow", hex: "#415728" },
    { name: "Forest", hex: "#778259" },
    { name: "Olive", hex: "#AFAB41" },
    { name: "olive II", hex: "#CCC772" },
    { name: "Lichen I", hex: "#5D631F" },
    { name: "Snail II", hex: "#C7C99D" },
    { name: "proceed", hex: "#5A873D" },
    { name: "Execute", hex: "#55661F" },
    { name: "Fern III", hex: "#DFEDBC" },
    { name: "Della Moda", hex: "#C6D1B2" },
    { name: "Fern II", hex: "#9FAF7B" },
    { name: "Fern", hex: "#6B7F7B" },
    { name: "Unicorn", hex: "#94A8A5" },
    { name: "Unicorn II", hex: "#658E82" },
    { name: "Limpet", hex: "#D9F3E5" },
    { name: "Lichen III", hex: "#F1F4EA" },
    { name: "Lichen IV", hex: "#EBEFDF" },
    { name: "Tidal", hex: "#E0DEAF" },
  ],
  blues: [
    { name: "Darker Focus", hex: "#0F1D38" },
    { name: "Rosicrucian", hex: "#0F1D38" },
    { name: "DeepOcean", hex: "#0F1D38" },
    { name: "Jumper", hex: "#4F8FBA" },
    { name: "Pond", hex: "#185451" },
    { name: "Magician", hex: "#14467A" },
    { name: "Credit Neutral", hex: "#AAB7C4" },
    { name: "Nimbus", hex: "#7E8D9B" },
    { name: "Nimbus II", hex: "#637482" },
    { name: "Modern Cape", hex: "#27597C" },
    { name: "Airplanes", hex: "#1D4450" },
    { name: "Ship", hex: "#304C5C" },
    { name: "Interstellar", hex: "#083D5E" },
    { name: "Modern Coat", hex: "#0F494C" },
    { name: "Blue Skies", hex: "#065A82" },
    { name: "Ocean Pool", hex: "#58A7AF" },
    { name: "Aquatiq", hex: "#75C4CC" },
    { name: "QuailEgg", hex: "#0AAAC3" },
    { name: "New Teal", hex: "#3AA0A0" },
    { name: "Transmute", hex: "#295250" },
    { name: "Blueprint", hex: "#C4E4E8" },
    { name: "Bicycle", hex: "#E0ECED" },
    { name: "Bonnet", hex: "#E0F7FA" },
    { name: "Vespa", hex: "#CADBDA" },
    { name: "Porpoise", hex: "#C5D8D6" },
    { name: "Placeholder", hex: "#D5E2E0" },
    { name: "Tea Pot", hex: "#D1E4E5" },
    { name: "CandyFloss", hex: "#C1E0E0" },
    { name: "Caladon", hex: "#DAE8E8" },
    { name: "Riverstone", hex: "#CCDADB" },
    { name: "a la Mode", hex: "#E6EEEF" },
    { name: "Dolphin", hex: "#DFE5EA" },
    { name: "Snowdrop", hex: "#F2F3F7" },
    { name: "New Shark", hex: "#829D9E" },
    { name: "Narwal II", hex: "#2E7E82" },
    { name: "Narwal III", hex: "#2B7F8C" },
    { name: "Narwal IV", hex: "#225F6E" },
    { name: "Narwal V", hex: "#184551" },
    { name: "Bluberry", hex: "#1B55B2" },
    { name: "Raincoat", hex: "#2F82AF" },
    { name: "Prarie Sky", hex: "#0F76BC" },
    { name: "Atlantic", hex: "#1156BA" },
    { name: "Patriot", hex: "#2F40C1" },
    { name: "HeadOffice", hex: "#1F3CB5" },
    { name: "BlueFish", hex: "#0C3BE8" },
    { name: "Gauguin", hex: "#179FAD" },
    { name: "Seashell", hex: "#6EBAB4" },
    { name: "Balloon", hex: "#17B7FF" },
    { name: "Modulus", hex: "#53A9AD" },
    { name: "Narwhal", hex: "#446360" },
    { name: "Dolphin 2", hex: "#8BA4A5" },
  ],
  purples: [
    { name: "Grape Soda", hex: "#7458DB" },
    { name: "Tokyo", hex: "#A0139D" },
    { name: "Spellbook", hex: "#A359D8" },
    { name: "Corporate", hex: "#4A4882" },
  ],
  FleshTones: [
    { name: "Lucian I", hex: "#EDC696" },
    { name: "Lox", hex: "#FFCCCC" },
    { name: "Lucian II", hex: "#DBAC9D" },
    { name: "SpringRose", hex: "#D39990" },
    { name: "Lucian 3", hex: "#D8B7B0" },
    { name: "Roses", hex: "#FDF6F6" },
    { name: "Summer Blush", hex: "#F7F0E7" },
    { name: "Unicorn", hex: "#EADDCA" },
  ],
};



document.addEventListener('DOMContentLoaded', () => {
  const colorGrid = document.getElementById('colorGrid');
  const titleElement = document.querySelector('.title'); // Define the title element
  let displayFormat = 'hex'; // Default format
  let applyToBody = false; // Boolean to track "Body" toggle state
  let applyToText = false; // Boolean to track "Text" toggle state
  let applyToCard = false; // Boolean to track "Card" toggle state
  const defaultBackgroundColor = '#f9f9f9'; // Default background color
  const defaultTextColor = '#333'; // Default text color
  const defaultCardColor = '#fff'; // Default color-card background color

  // Function to log toggle states for visibility
  function logToggleStates() {
    console.log(`Body toggle is ${applyToBody ? 'ON' : 'OFF'}`);
    console.log(`Text toggle is ${applyToText ? 'ON' : 'OFF'}`);
    console.log(`Card toggle is ${applyToCard ? 'ON' : 'OFF'}`);
  }

  // Dark mode toggle
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Body toggle to control background update behavior
  document.getElementById('bodyToggle').addEventListener('click', () => {
    applyToBody = !applyToBody;
    document.getElementById('bodyToggle').classList.toggle('active', applyToBody);
    document.getElementById('bodyToggle').style.borderColor = applyToBody ? 'olive' : 'lightblue';
    logToggleStates();
  });

  // Text toggle to control text color update behavior
  document.getElementById('textToggle').addEventListener('click', () => {
    applyToText = !applyToText;
    document.getElementById('textToggle').classList.toggle('active', applyToText);
    document.getElementById('textToggle').style.borderColor = applyToText ? 'olive' : 'lightblue';
    logToggleStates();
  });

  // Card toggle to control color-card background update behavior
  document.getElementById('cardToggle').addEventListener('click', () => {
    applyToCard = !applyToCard;
    const cardToggleButton = document.getElementById('cardToggle');
    cardToggleButton.classList.toggle('active', applyToCard);

    // Set the border color based on the toggle state
    if (applyToCard) {
      cardToggleButton.style.borderColor = 'olive';
      console.log("Card toggle is ON");
    } else {
      cardToggleButton.style.borderColor = 'lightblue';
      console.log("Card toggle is OFF");
    }

    logToggleStates(); // Log all toggle states
  });


  // Reset button to return to default background, text, and color-card colors
  document.getElementById('resetButton').addEventListener('click', () => {
    document.body.style.backgroundColor = defaultBackgroundColor;
    titleElement.style.color = defaultTextColor; // Reset title color
    document.body.style.color = defaultTextColor; // Reset body text color

    // Reset category heading text color to default
    document.querySelectorAll('.category-heading summary').forEach(heading => {
      heading.style.color = defaultTextColor;
    });

    // Reset all color-card background colors to default
    document.querySelectorAll('.color-card').forEach(card => {
      card.style.backgroundColor = defaultCardColor;
    });

    console.log('Background, title, category heading, and color-card colors reset to default.');
  });


  // Helper function to convert RGB to HEX
function rgbToHex(rgb) {
  const rgbValues = rgb.match(/\d+/g);
  if (!rgbValues) return rgb; // If not in RGB format, return the original value
  return `#${rgbValues.map(x => {
    const hex = parseInt(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('')}`;
}

document.getElementById('jsonButton').addEventListener('click', () => {
  // Get the current hex values for body, text, and the first color-card element
  const bodyColor = rgbToHex(document.body.style.backgroundColor || '#f9f9f9');
  const textColor = rgbToHex(document.body.style.color || '#333');
  
  // Capture the hex value of only the first color-card
  const firstCard = document.querySelector('.color-card');
  const cardColor = firstCard ? rgbToHex(firstCard.style.backgroundColor || '#fff') : '#fff';

  // Create an object with the color data
  const colorSnapshot = {
    bodyColor: bodyColor,
    textColor: textColor,
    cardColor: cardColor // Store only the first card's color in hex
  };

  // Convert the object to a JSON string
  const jsonContent = JSON.stringify(colorSnapshot, null, 2);

  // Create a Blob from the JSON string and create a downloadable link
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'color-palette-snapshot.json';

  // Programmatically click the link to trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up by removing the link and revoking the URL
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  console.log('Downloaded color palette snapshot as JSON');
});



  // Function to handle copying of the hex value and updating background, text, and color-card colors independently
  function copyToClipboardInput(hex) {
    const clipboardInput = document.getElementById('clipboardInput');
    clipboardInput.value = hex;

    navigator.clipboard.writeText(hex).then(() => {
      console.log(`Copied ${hex} to clipboard`);
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });

    // Update background color if "Body" toggle is active
    if (applyToBody) {
      document.body.style.backgroundColor = hex;
    }

    // Update text color if "Text" toggle is active
    if (applyToText) {
      titleElement.style.color = hex;
      document.body.style.color = hex;
      document.querySelectorAll('.category-heading summary').forEach(heading => {
        heading.style.color = hex;
      });
    }

    // Update color-card background color if "Card" toggle is active
    if (applyToCard) {
      document.querySelectorAll('.color-card').forEach(card => {
        card.style.backgroundColor = hex;
      });
    }
  }


  // Event listener for clipboard input changes (manual updates)
  document.getElementById('clipboardInput').addEventListener('input', (event) => {
    const hex = event.target.value;
    // Update background if "Body" toggle is active
    if (applyToBody) {
      document.body.style.backgroundColor = hex;
    }
    // Update text color if "Text" toggle is active
    if (applyToText) {
      titleElement.style.color = hex;
      document.body.style.color = hex;
      // Update category heading text color
      document.querySelectorAll('.category-heading summary').forEach(heading => {
        heading.style.color = hex;
      });
    }
    // Update color-card background color if "Card" toggle is active
    if (applyToCard) {
      document.querySelectorAll('.color-card').forEach(card => {
        card.style.backgroundColor = hex;
      });
    }
  });

  // Function to convert hex to HSL
  function hexToHSL(hex) {
    hex = hex.replace('#', '');
    const red = parseInt(hex.substring(0, 2), 16) / 255;
    const green = parseInt(hex.substring(2, 4), 16) / 255;
    const blue = parseInt(hex.substring(4, 6), 16) / 255;

    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    let hue, saturation, lightness = (max + min) / 2;

    if (max === min) {
      hue = saturation = 0;
    } else {
      const delta = max - min;
      saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      switch (max) {
        case red: hue = (green - blue) / delta + (green < blue ? 6 : 0); break;
        case green: hue = (blue - red) / delta + 2; break;
        case blue: hue = (red - green) / delta + 4; break;
      }
      hue /= 6;
    }

    return {
      h: Math.round(hue * 360),
      s: Math.round(saturation * 100),
      l: Math.round(lightness * 100)
    };
  }

  // Function to convert hex to RGB
  function hexToRGB(hex) {
    hex = hex.replace('#', '');
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);
    return `rgb(${red}, ${green}, ${blue})`;
  }

  // Function to update display format for color values
  function updateDisplayFormat(format) {
    displayFormat = format;
    document.querySelectorAll('.color-card').forEach(card => {
      const hex = card.querySelector('.color-display').dataset.hex;
      const valueElement = card.querySelector('.color-value');

      switch (displayFormat) {
        case 'rgb':
          valueElement.textContent = hexToRGB(hex);
          break;
        case 'hsl':
          const hsl = hexToHSL(hex);
          valueElement.textContent = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
          break;
        default:
          valueElement.textContent = hex;
          break;
      }
    });
  }

  // Event listener for toggling display format
  document.querySelectorAll('.toggle-nav button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.toggle-nav button').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      updateDisplayFormat(button.dataset.format);
    });
  });

  // Render colors by category
  for (const category in organizedColors) {
    if (organizedColors.hasOwnProperty(category)) {
      const detailsElement = document.createElement('details');
      const summaryElement = document.createElement('summary');
      summaryElement.textContent = category.charAt(0).toUpperCase() + category.slice(1);

      // Create a random color square for the category heading
      const randomColor = organizedColors[category][Math.floor(Math.random() * organizedColors[category].length)].hex;
      const colorSquare = document.createElement('div');
      colorSquare.style.width = '40px';
      colorSquare.style.height = '40px';
      colorSquare.style.backgroundColor = randomColor;
      colorSquare.style.marginRight = '10px';
      colorSquare.className = 'color-square';

      summaryElement.prepend(colorSquare);
      detailsElement.appendChild(summaryElement);
      detailsElement.classList.add('category-heading');

      const categoryContainer = document.createElement('div');
      categoryContainer.className = 'category-container';

      organizedColors[category].forEach(color => {
        const colorCard = document.createElement('div');
        colorCard.className = 'color-card';
        colorCard.innerHTML = `
          <div class="color-display" style="background-color: ${color.hex}" data-hex="${color.hex}"></div>
          <div class="color-info">
            <h3 class="color-name">${color.name}</h3>
            <div class="color-value">${color.hex}</div>
          </div>
        `;
        categoryContainer.appendChild(colorCard);
      });

      detailsElement.appendChild(categoryContainer);
      colorGrid.appendChild(detailsElement);
    }
  }

  // Click-to-copy functionality that uses copyToClipboardInput
  document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('color-display')) {
      const hex = event.target.dataset.hex;
      copyToClipboardInput(hex); // Call the function to handle clipboard and color updates
      const notification = document.createElement('div');
      notification.className = 'copied-notification';
      notification.textContent = `Copied ${hex}`;
      document.body.appendChild(notification);

      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
        notification.remove();
      }, 2000);
    }
  });
});





