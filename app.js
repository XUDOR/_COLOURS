document.addEventListener('DOMContentLoaded', () => {
  const colorGrid = document.getElementById('colorGrid');
  
  // Function to convert hex to HSL
  function hexToHSL(hex) {
      // Remove the # if present
      hex = hex.replace('#', '');
      
      // Convert hex to RGB
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

  // Create color cards
  for (const [group, colors] of Object.entries(rdxColors)) {
      for (const [name, data] of Object.entries(colors)) {
          const hsl = hexToHSL(data.hex);
          
          const colorCard = document.createElement('div');
          colorCard.className = 'color-card';
          colorCard.innerHTML = `
              <div class="color-display" style="background-color: ${data.hex}" 
                   data-hex="${data.hex}" data-rgb="${data.rgb}" data-hsl="hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)">
              </div>
              <div class="color-info">
                  <p class="category-label">${data.category}</p>
                  <h3 class="color-name">${name}</h3>
                  <div class="color-values">
                      <div class="color-value">
                          <span>HEX</span>
                          <span>${data.hex}</span>
                      </div>
                      <div class="color-value">
                          <span>RGB</span>
                          <span>${data.rgb}</span>
                      </div>
                      <div class="color-value">
                          <span>HSL</span>
                          <span>${hsl.h}, ${hsl.s}%, ${hsl.l}%</span>
                      </div>
                  </div>
              </div>
          `;
          colorGrid.appendChild(colorCard);
      }
  }

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