import { useEffect } from 'react';

export function StatCounter() {
  useEffect(() => {
    // Create the counter configuration
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      var sc_project = 310175;
      var sc_invisible = 0;
      var sc_security = "df515d3d";
    `;
    document.head.appendChild(configScript);

    // Load the StatCounter script
    const counterScript = document.createElement('script');
    counterScript.type = 'text/javascript';
    counterScript.src = 'https://secure.statcounter.com/counter/counter.js';
    counterScript.async = true;
    document.head.appendChild(counterScript);

    return () => {
      // Cleanup on unmount
      if (configScript.parentNode) {
        configScript.parentNode.removeChild(configScript);
      }
      if (counterScript.parentNode) {
        counterScript.parentNode.removeChild(counterScript);
      }
    };
  }, []);

  return null;
}
