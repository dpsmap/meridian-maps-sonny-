// components/StatCounter.tsx
import Script from 'next/script'

export function StatCounter() {
  return (
    <Script id="statcounter" strategy="afterInteractive">
      {`
        var sc_project = 310175;
        var sc_invisible = 0;
        var sc_security = "df515d3d";
        var scJsHost = (("https:" == document.location.protocol) ?
        "https://secure." : "https://www.");
        document.write("<sc" + "ript type='text/javascript' src='" +
        scJsHost +
        "statcounter.com/counter/counter.js'></" + "script>");
      `}
    </Script>
  )
}