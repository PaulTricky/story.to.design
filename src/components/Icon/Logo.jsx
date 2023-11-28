import React from "react";

function LogoIcon({color = '#B00101'}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
    >
      <path
        fill={color}
        d="M24 12.142v-.587-2.278l-.242-.18a3.756 3.756 0 00-.363-.231 9.794 9.794 0 01-.31-.17l-.056-.031-.028-.016c-.14-.083-.756-.44-1.416-.817l-.082-.048-.083-.047a84.02 84.02 0 01-1.65-.957 4.838 4.838 0 00-.521-.277 5.187 5.187 0 01-.492-.284c-.174-.12-1.354-.8-2.618-1.517-2.058-1.165-2.503-1.413-2.728-1.553l-.014-.008a1.197 1.197 0 00-.006-.004l-.016-.01a4.404 4.404 0 01-.052-.033l-.014-.01a7.752 7.752 0 01-.037-.024l-.015-.01c-.106-.06-.378-.217-.605-.336-.227-.128-.553-.3-.72-.397-.102-.06-.278-.157-.46-.256l-.083-.046-.243-.131c-.272-.15-.734-.411-1.021-.583-.295-.18-.893-.524-1.332-.77L8 .075l-2.8-.008H4.79c-.184 0-.368 0-.551-.002h-.137A108.384 108.384 0 011.379.03L.358 0l.265.232c.143.127.333.261.416.299.083.037.28.142.431.231l.403.246.116.07c.656.392 1.295.76 1.66.955.144.075.4.217.567.314.167.097.386.232.492.284a50.838 50.838 0 01.583.337l.061.035c.124.07.243.135.302.167.083.044.234.142.34.209.106.067.34.202.53.299.363.187.665.366.998.59.114.083.235.142.28.142.033 0 .332.156.658.34l.061.036.093.053.061.036c.123.071.242.143.345.208.06.045.235.142.379.224.143.083.37.217.491.292.129.075.356.21.515.299.151.082.408.232.567.321.151.09.386.21.507.27.129.06.28.149.34.201.061.053.303.195.53.314.492.27.938.516 1.248.703.129.075.363.21.53.299.166.09.318.18.34.21.023.022.227.141.454.26.227.12.47.255.53.307.06.045.197.128.302.172.106.053.326.172.492.277.167.097.515.284.772.411.265.135.492.27.522.307.023.037.151.12.28.179.136.06.363.187.507.27.552.336.741.448 1.626.94.5.277.961.54 1.037.584.068.037.393.224.718.404.326.187.606.351.628.373.023.023.227.143.454.262.227.12.47.262.537.314.06.06.167.105.22.105.06 0 .181.074.28.164l.014.013.009.008c.133.116.149.052.15-1.424zm-.076-7.813c.04 0 .066-.834.073-1.763l.001-.091v-.093L24 2.29V1.87c0-.913-.02-1.743-.06-1.796-.03-.044-1.297-.073-3.553-.075h-1.13c-2.745.001-2.787.014-2.645.15l.009.008c.062.062.235.18.423.294l.063.039.126.074c.446.24 1.104.617 1.323.752.054.034.253.148.465.268l.087.049c.25.135.567.323.719.421l.175.1.074.04c.098.055.193.107.257.139.129.06.333.173.454.256.128.075.355.21.514.3.151.084.408.234.567.324.151.09.386.211.507.271.128.06.28.151.34.204.174.135 1.119.64 1.21.64zM12.477 24.813a67.502 67.502 0 002.119-1.238c.174-.105.484-.276.696-.373.492-.232.544-.396.174-.56-.265-.12-.795-.396-1.105-.582-.207-.123-.745-.436-1.306-.759l-.109-.062-.054-.032-.109-.062c-.433-.249-.85-.486-1.108-.63l-.074-.042-.074-.042-.074-.043c-.32-.183-.616-.358-.708-.425a8.883 8.883 0 00-.764-.455c-1.514-.821-1.877-1.037-1.915-1.142-.053-.127.22-.373.659-.59.143-.074.348-.186.454-.26.105-.068.348-.202.53-.306.188-.101.931-.516 1.703-.95l.193-.108.88-.495c.129-.074.378-.216.545-.32.166-.112.34-.194.378-.194.038 0 .106-.045.151-.105.053-.06.235-.179.409-.268.174-.083.386-.202.469-.247.083-.052.416-.239.741-.418.318-.171.583-.343.583-.365-.008-.12-.151-.224-.681-.485-.31-.157-.87-.463-1.248-.694-.371-.224-.848-.508-1.06-.62-.149-.08-.75-.42-1.376-.773l-.105-.06-.133-.075-.089-.05c-.53-.3-1.022-.58-1.21-.69-.06-.038-.688-.396-1.4-.792-.703-.395-1.702-.97-2.208-1.268-.515-.306-.954-.552-.984-.552a.404.404 0 01-.166-.105 7.251 7.251 0 00-.636-.373 88.166 88.166 0 01-1.316-.724c-.16-.09-.477-.261-.704-.38a5.43 5.43 0 01-.53-.321c-.075-.061-.446-.274-.836-.488l-.081-.044-.064-.035c-.424-.23-.831-.44-.872-.44-.038 0-.06 1.031-.062 2.892v.411l.001.74c.007 2.12.021 3.998.023 4.327v.039c0 .373.068.396.446.142.216-.14.957-.571 1.76-1.029l.096-.055.049-.027.146-.083.053-.03c.203-.11.555-.297.832-.44.605-.306.5-.321 1.384.179.144.082.454.254.681.388l.029.016.057.032.056.032c.178.101.34.196.388.226.06.037.477.276.923.522.446.246.847.508.878.582.075.142.037.314-.061.314-.051 0-.48.23-.894.472l-.063.037c-.116.068-.228.136-.33.2-.108.067-.942.547-1.86 1.073l-.09.052-.09.052-.186.106-.062.035-.123.07-.047.028-.094.054c-.892.51-1.711.974-1.873 1.06-.083.044-.34.2-.568.35-.227.142-.59.343-.81.448-.582.268-.552.395.205.798.394.209.969.53 1.581.888.152.082.356.209.462.261a51.23 51.23 0 01.713.412l.096.055c.095.055.188.107.258.145.151.09.514.291.794.448l.142.08.108.061c.216.122.424.238.522.292.128.074.37.209.53.298l.373.207.04.023.018.009c.083.052.43.254.779.455.62.366 1.006.597 1.377.799l.492.283c.166.097.423.239.567.314.144.074.401.223.568.32.166.097.408.232.53.291.226.12.347.194.733.44.295.195.522.18.938-.052zm8.408-4.824l.416-.243.095-.055c.27-.155.528-.3.68-.387.25-.141.743-.424 1.092-.617.349-.194.682-.402.743-.454.063-.062.087-.326.089-1.198v-.206c0-.245-.003-.531-.006-.865-.02-1.971-.022-2.141-.14-2.087l-.008.004a.53.53 0 00-.026.015c-.083.052-.341.208-.569.35-.227.14-1.154.671-2.111 1.214l-.267.151c-.584.332-1.157.654-1.566.881a21.28 21.28 0 00-.606.342c-.486.298-1.6.93-1.972 1.124-.66.335-.63.387.569.982.25.126.599.32.773.439.175.111.35.208.387.208.038 0 .152.06.25.141.099.075.364.231.584.343.22.111.417.23.44.267.091.157.463.045 1.153-.35z"
      ></path>
    </svg>
  );
}

export default LogoIcon;
