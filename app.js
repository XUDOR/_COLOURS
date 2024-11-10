const colors = [
  { name: "Milk", hex: "#FFFFE5" },
  { name: "Roses", hex: "#FDF6F6" },
  { name: "Creamcheese", hex: "#F9F8D4" },
  { name: "d’Affinois", hex: "#F9F8E8" },
  { name: "Eiderdown", hex: "#E0E0D5" },
  { name: "Cardboard", hex: "#F9F9F7" },
  { name: "Chelan", hex: "#57030A" },
  { name: "Fig", hex: "#774D4D" },
  { name: "Robin", hex: "#A32E0A" },
  { name: "Brisbane", hex: "#E8210C" },
  { name: "Melborne", hex: "#BA5109" },
  { name: "Rhubarb I", hex: "#9D4B45" },
  { name: "Canberra", hex: "#903336" },
  { name: "JackLantern", hex: "#ED6407" },
  { name: "Gold Coast", hex: "#E0431E" },
  { name: "Osaka", hex: "#F20C3E" },
  { name: "Tuscany", hex: "#890E0E" },
  { name: "Treasure Island", hex: "#161414" },
  { name: "Valentine I", hex: "#B94000" },
  { name: "Swallow", hex: "#A24035" },
  { name: "Fuscia", hex: "#D12466" },
  { name: "Hemp", hex: "#F2F2E7" },
  { name: "Bone", hex: "#F4F4EA" },
  { name: "Sand Dollar", hex: "#D6D0B4" },
  { name: "Bicycle", hex: "#E0ECED" },
  { name: "Orchid", hex: "#F2EEDD" },
  { name: "Dolphin", hex: "#DFE5EA" },
  { name: "Antler", hex: "#D8D5CB" },
  { name: "Antler II", hex: "#D1CEC5" },
  { name: "Concrete", hex: "#777068" },
  { name: "Designer", hex: "#6B6B5F" },
  { name: "Smokey", hex: "#7A7968" },
  { name: "Shark", hex: "#BDC2C6" },
  { name: "Credit Neutral", hex: "#AAB7C4" },
  { name: "Jumper", hex: "#4F8FBA" },
  { name: "Kelp", hex: "#B2B28E" },
  { name: "Snail", hex: "#AAAA6D" },
  { name: "Valise", hex: "#AFAB7B" },
  { name: "Serpent", hex: "#021B16" },
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
  { name: "Tropica", hex: "#D8C74A" },
  { name: "Tartinade", hex: "#9E742B" },
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
  { name: "Bark", hex: "#35311F" },
  { name: "Turtle", hex: "#9AA200" },
  { name: "TreeLeaf I", hex: "#A79F43" },
  { name: "TreeLeaf III", hex: "#4E491D" },
  { name: "Phloem", hex: "#674C23" },
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
  { name: "Treebark", hex: "#515105" },
  { name: "Lichen I", hex: "#5D631F" },
  { name: "Snail II", hex: "#C7C99D" },
  { name: "Lichen III", hex: "#F1F4EA" },
  { name: "Lichen IV", hex: "#EBEFDF" },
  { name: "Moderno", hex: "#EFEFE6" },
  { name: "Mushroom", hex: "#93914D" },
  { name: "Suitcase", hex: "#676421" },
  { name: "Linen", hex: "#FBFBF4" },
  { name: "proceed", hex: "#5A873D" },
  { name: "Execute", hex: "#55661F" },
  { name: "Pond", hex: "#185451" },
  { name: "Magician", hex: "#14467A" },
  { name: "Grape Soda", hex: "#7458DB" },
  { name: "Tokyo", hex: "#A0139D" },
  { name: "Spellbook", hex: "#A359D8" },
  { name: "Corporate", hex: "#4A4882" },
  { name: "Modern Cape", hex: "#27597C" },
  { name: "Airplanes", hex: "#1D4450" },
  { name: "Tidal", hex: "#E0DEAF" },
  { name: "Nimbus", hex: "#7E8D9B" },
  { name: "Nimbus II", hex: "#637482" },
  { name: "Ship", hex: "#304C5C" },
  { name: "NightSky", hex: "#071D29" },
  { name: "Stealth", hex: "#20232A" },
  { name: "Interstellar", hex: "#083D5E" },
  { name: "Modern Coat", hex: "#0F494C" },
  { name: "Blue Skies", hex: "#065A82" },
  { name: "Darker Focus", hex: "#0F1D38" },
  { name: "Rosicrucian", hex: "#0F1D38" },
  { name: "Meditation", hex: "#283242" },
  { name: "DeepOcean", hex: "#0F1D38" },
  { name: "Buttercup", hex: "#EBC81A" },
  { name: "Goldenberry", hex: "#F2CB0A" },
  { name: "Sunrise", hex: "#F4D30C" },
  { name: "Peach Pie", hex: "#EFAE0C" },
  { name: "Cougar", hex: "#DBB026" },
  { name: "Cake", hex: "#D3B311" },
  { name: "Desert Hat", hex: "#DEE0DA" },
  { name: "Ash", hex: "#C2C4BB" },
  { name: "Smoke", hex: "#D3D3CB" },
  { name: "Elephant", hex: "#E2E2E2" },
  { name: "SilverWitch", hex: "#A0A39F" },
  { name: "SilverWitch 2", hex: "#C9C7C5" },
  { name: "Estate", hex: "#FAFAFA" },
  { name: "Elephant II", hex: "#B7B3A9" },
  { name: "Navvy Jack", hex: "#B5B4B1" },
  { name: "Industrial", hex: "#A09F9A" },
  { name: "Malcolm", hex: "#707069" },
  { name: "Kaolin", hex: "#E1E2DE" },
  { name: "Sharky", hex: "#AAA9A3" },
  { name: "Pompeii", hex: "#87857B" },
  { name: "Krakatoa", hex: "#7D826B" },
  { name: "Castle", hex: "#D8DCD2" },
  { name: "Clay Paint", hex: "#617068" },
  { name: "New Ash", hex: "#92937D" },
  { name: "StoneHouse", hex: "#C5C6B6" },
  { name: "Pebble", hex: "#EDECE2" },
  { name: "Creamcheese II", hex: "#FCFBE3" },
  { name: "Beurre Blanc", hex: "#FCE883" },
  { name: "Parchment", hex: "#FFFADF" },
  { name: "GoatMilk", hex: "#FFFEF5" },
  { name: "Ivory", hex: "#FCFBF2" },
  { name: "Document", hex: "#FFFFFA" },
  { name: "Confident", hex: "#FFFFFD" },
  { name: "Snowdrop", hex: "#F2F3F7" },
  { name: "TreeBranch", hex: "#846613" },
  { name: "60% Cocoa", hex: "#332007" },
  { name: "Shoe", hex: "#7F6009" },
  { name: "Fox", hex: "#7D471E" },
  { name: "Sniper", hex: "#898019" },
  { name: "Khaki", hex: "#7F7F55" },
  { name: "Marshgrass", hex: "#595930" },
  { name: "Recon", hex: "#35342A" },
  { name: "SnakeSkin", hex: "#565035" },
  { name: "SeaStone", hex: "#5A5956" },
  { name: "Ocean Pool", hex: "#58A7AF" },
  { name: "Aquatiq", hex: "#75C4CC" },
  { name: "QuailEgg", hex: "#0AAAC3" },
  { name: "New Teal", hex: "#3AA0A0" },
  { name: "Transmute", hex: "#295250" },
  { name: "Blueprint", hex: "#C4E4E8" },
  { name: "Bonnet", hex: "#E0F7FA" },
  { name: "Vespa", hex: "#CADBDA" },
  { name: "Porpoise", hex: "#C5D8D6" },
  { name: "Placeholder", hex: "#D5E2E0" },
  { name: "Tea Pot", hex: "#D1E4E5" },
  { name: "CandyFloss", hex: "#C1E0E0" },
  { name: "Caladon", hex: "#DAE8E8" },
  { name: "Riverstone", hex: "#CCDADB" },
  { name: "Narwal II", hex: "#2E7E82" },
  { name: "Narwal III", hex: "#2B7F8C" },
  { name: "Narwal IV", hex: "#225F6E" },
  { name: "Narwal V", hex: "#184551" },
  { name: "Tidal Sand", hex: "#D3D2CA" },
  { name: "Math Class", hex: "#59584F" },
  { name: "SeaPebble", hex: "#626154" },
  { name: "Stone", hex: "#444340" },
  { name: "Slate II", hex: "#44423A" },
  { name: "overCoat", hex: "#44423A" },
  { name: "BioChar II", hex: "#211F1D" },
  { name: "Slate", hex: "#1E1E1E" },
  { name: "BioChar", hex: "#020202" },
  { name: "BlackBird", hex: "#190808" },
  { name: "Smokey", hex: "#1F1F1F" },
  { name: "Accent", hex: "#2D2D2D" },
  { name: "Matte Chic", hex: "#2D2C2A" },
  { name: "Bark", hex: "#403D3D" },
  { name: "Stallion", hex: "#211F1F" },
  { name: "Elephant", hex: "#A1A9AD" },
  { name: "Smoke", hex: "#41454D" },
  { name: "Glacier", hex: "#D9D9D9" },
  { name: "Glacier II", hex: "#E3E3E0" },
  { name: "Gimlet", hex: "#F7F7F7" },
  { name: "Champagne", hex: "#32325D" },
  { name: "Frost", hex: "#F7F7F5" },
  { name: "Ice", hex: "#F9F9F7" },
  { name: "Neroli", hex: "#D69421" },
  { name: "Neroli II", hex: "#DB8C2D" },
  { name: "Nectarine", hex: "#B76C00" },
  { name: "Nectarine II", hex: "#A35113" },
  { name: "Oriole", hex: "#D36922" },
  { name: "Mandarin", hex: "#EF8A11" },
  { name: "Citrouille", hex: "#F49B0C" },
  { name: "Cat", hex: "#DDB73E" },
  { name: "DeckShoe", hex: "#E8CC87" },
  { name: "Tangerine", hex: "#D9A41D" },
  { name: "Marmalade", hex: "#D09F3C" },
  { name: "Caramel", hex: "#A16C28" },
  { name: "Apricot", hex: "#BC8A1B" },
  { name: "Sphinx", hex: "#C69A0C" },
  { name: "Temple", hex: "#ECB235" },
  { name: "Leather", hex: "#BAA668" },
  { name: "Nu Boot", hex: "#C9B769" },
  { name: "Fern", hex: "#6B7F7B" },
  { name: "Narwhal", hex: "#446360" },
  { name: "Unicorn", hex: "#94A8A5" },
  { name: "Dolphin 2", hex: "#8BA4A5" },
  { name: "Orca I", hex: "#5A8EA8" },
  { name: "Bluebell", hex: "#8AB7CE" },
  { name: "Raincoat", hex: "#2F82AF" },
  { name: "Bluberry", hex: "#1B55B2" },
  { name: "Prarie Sky", hex: "#0F76BC" },
  { name: "Atlantic", hex: "#1156BA" },
  { name: "Patriot", hex: "#2F40C1" },
  { name: "HeadOffice", hex: "#1F3CB5" },
  { name: "BlueFish", hex: "#0C3BE8" },
  { name: "Unicorn II", hex: "#658E82" },
  { name: "New Shark", hex: "#829D9E" },
  { name: "Book", hex: "#F9F7E8" },
  { name: "Paperback", hex: "#F2EFD1" },
  { name: "Unicorn", hex: "#EADDCA" },
  { name: "Camel", hex: "#E0D6AD" },
  { name: "Sandy", hex: "#C1B99A" },
  { name: "Summer Blush", hex: "#F7F0E7" },
  { name: "Lucian I", hex: "#EDC696" },
  { name: "Lucian II", hex: "#DBAC9D" },
  { name: "SpringRose", hex: "#D39990" },
  { name: "Lucian 3", hex: "#D8B7B0" },
  { name: "Fern III", hex: "#DFEDBC" },
  { name: "New Chartreuse", hex: "#F7FDE1" },
  { name: "Limpet", hex: "#D9F3E5" },
  { name: "Seashell", hex: "#6EBAB4" },
  { name: "Gauguin", hex: "#179FAD" },
  { name: "Balloon", hex: "#17B7FF" },
  { name: "Modulus", hex: "#53A9AD" },
  { name: "a la Mode", hex: "#E6EEEF" },
  { name: "Designer II", hex: "#D1D6C5" },
  { name: "Della Moda", hex: "#C6D1B2" },
  { name: "Fern II", hex: "#9FAF7B" },
  { name: "Lox", hex: "#FFCCCC" },
  { name: "Boot", hex: "#494842" },
  { name: "Cowboy", hex: "#BCAA08" },
  { name: "Shigaraki", hex: "#EFEFE6" },
  { name: "SeaStone", hex: "#E2E0D7" },
  { name: "Gumdrop", hex: "#FEB637" },
  { name: "Iris I", hex: "#606062" },
  { name: "Iris II", hex: "#222827" }
];

document.addEventListener('DOMContentLoaded', () => {
    const colorGrid = document.getElementById('colorGrid');
  
    // Function to convert hex to HSL
    function hexToHSL(hex) {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0,2), 16) / 255;
        let g = parseInt(hex.substring(2,4), 16) / 255;
        let b = parseInt(hex.substring(4,6), 16) / 255;
        
        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }

        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }

    // Function to convert hex to RGB
    function hexToRGB(hex) {
        hex = hex.replace('#', '');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Create color cards
    colors.forEach(color => {
        const hsl = hexToHSL(color.hex);
        const rgb = hexToRGB(color.hex);

        const colorCard = document.createElement('div');
        colorCard.className = 'color-card';
        colorCard.innerHTML = `
            <div class="color-display" style="background-color: ${color.hex}" 
                 data-hex="${color.hex}">
            </div>
            <div class="color-info">
                <h3 class="color-name">${color.name}</h3>
                <div class="color-values">
                    <div class="color-value">
                        ${color.hex}
                    </div>
                </div>
            </div>
        `;
        colorGrid.appendChild(colorCard);
    });

    // Add click-to-copy functionality
    document.querySelectorAll('.color-display').forEach(display => {
        display.addEventListener('click', function() {
            const hex = this.dataset.hex;
            navigator.clipboard.writeText(hex).then(() => {
                const notification = document.createElement('div');
                notification.className = 'copied-notification';
                notification.textContent = `Copied ${hex}`;
                document.body.appendChild(notification);
                
                // Show notification
                notification.style.display = 'block';
                
                // Remove notification after 2 seconds
                setTimeout(() => {
                    notification.style.display = 'none';
                    notification.remove();
                }, 2000);
            });
        });
    });
});
