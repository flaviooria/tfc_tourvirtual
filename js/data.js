var APP_DATA = {
  scenes: [
    {
      id: '0-entrada',
      name: 'ENTRADA PRINCIPAL',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.42417626466136404,
          pitch: 0.19576963550870374,
          rotation: 0.7853981633974483,
          target: '1-entrada_escaleras',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '1-entrada_escaleras',
      name: 'acceso instituto',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.11168194091668937,
          pitch: 0.20382298924673847,
          rotation: 0,
          target: '2-entrada_pabellon',
        },
        {
          yaw: 1.2228777576615393,
          pitch: 0.24267285568369346,
          rotation: 11.780972450961727,
          target: '26-pasillo_losa',
        },
        {
          yaw: -1.9832364468869095,
          pitch: 0.19906589458468282,
          rotation: 5.497787143782138,
          target: '0-entrada',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '2-entrada_pabellon',
      name: 'patio inferior',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.8972675748009884,
          pitch: 0.18017174067414743,
          rotation: 0.7853981633974483,
          target: '1-entrada_escaleras',
        },
        {
          yaw: 0.0009417314430422152,
          pitch: 0.09823119852130446,
          rotation: 13.351768777756625,
          target: '3-escaleras_administracion',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '3-escaleras_administracion',
      name: 'Acceso Patio Superior',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.06044388525986122,
          pitch: 0.045111689151198675,
          rotation: 0,
          target: '4-pabellon',
        },
        {
          yaw: 2.8423703930133533,
          pitch: 0.19351131764830498,
          rotation: 6.283185307179586,
          target: '2-entrada_pabellon',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '4-pabellon',
      name: 'Patio Superior',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.3516871569652604,
          pitch: 0.3966783216341163,
          rotation: 0.7853981633974483,
          target: '3-escaleras_administracion',
        },
        {
          yaw: -0.5776773198482452,
          pitch: 0.2689234465181478,
          rotation: 6.283185307179586,
          target: '5-pabellon_daw_admin',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '5-pabellon_daw_admin',
      name: 'Administración - Patio 2 Superior',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.3315247688646181,
          pitch: 0.1267125299383718,
          rotation: 5.497787143782138,
          target: '6-direccion_administracion',
        },
        {
          yaw: -2.070961632724014,
          pitch: 0.27566326701860433,
          rotation: 12.566370614359176,
          target: '7-cafeteria',
        },
        {
          yaw: -1.1037314556493065,
          pitch: 0.27775122426321985,
          rotation: 0,
          target: '4-pabellon',
        },
        {
          yaw: 2.9750708602253866,
          pitch: 0.1515672494320981,
          rotation: 0,
          target: '30-pabellon_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '6-direccion_administracion',
      name: 'Administración',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.9225019541768056,
          pitch: 0.14824947639862174,
          rotation: 7.853981633974483,
          target: '4-pabellon',
        },
        {
          yaw: 0.019607503864344622,
          pitch: 0.27803543255279983,
          rotation: 0,
          target: '8-administracion',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '7-cafeteria',
      name: 'Cafetería',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.011003560104411392,
          pitch: 0.4225288585440712,
          rotation: 0,
          target: '5-pabellon_daw_admin',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '8-administracion',
      name: 'administración',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.9879256693921548,
          pitch: 0.29813963225393536,
          rotation: 5.497787143782138,
          target: '6-direccion_administracion',
        },
        {
          yaw: 0.38866254098111774,
          pitch: 0.22293336812304965,
          rotation: 5.497787143782138,
          target: '9-admin_escalera',
        },
        {
          yaw: -2.8244009493585747,
          pitch: 0.20340260135722943,
          rotation: 0.7853981633974483,
          target: '49-pasillo_1_direccion',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '9-admin_escalera',
      name: 'Acceso Daw Biblioteca',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.0814995186588074,
          pitch: 0.3102598701400776,
          rotation: 0.7853981633974483,
          target: '6-direccion_administracion',
        },
        {
          yaw: -0.18400890303234796,
          pitch: 0.24964453376058415,
          rotation: 0,
          target: '24-pasillo_biblioteca',
        },
        {
          yaw: -1.3243447668663642,
          pitch: 0.08232969260360257,
          rotation: 0,
          target: '10-1_escalera_a_daw',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '10-1_escalera_a_daw',
      name: 'Escalera Daw',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.409348615192549,
          pitch: 0.44428036217167666,
          rotation: 0,
          target: '9-admin_escalera',
        },
        {
          yaw: -2.9503372675578046,
          pitch: 0.04899280760069047,
          rotation: 0,
          target: '11-2_pasillo_daw_plasticos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '11-2_pasillo_daw_plasticos',
      name: 'Pasillo plasticos daw',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.2632775416853512,
          pitch: 0.7311187381535156,
          rotation: 0.7853981633974483,
          target: '10-1_escalera_a_daw',
        },
        {
          yaw: -2.705994076506551,
          pitch: 0.2138228602103318,
          rotation: 0,
          target: '12-3_aula_daw',
        },
        {
          yaw: 2.5578022192038166,
          pitch: 0.15349359614449654,
          rotation: 0,
          target: '13-41_aula_plasticos',
        },
        {
          yaw: -0.6531775258582737,
          pitch: 0.19426131939581914,
          rotation: 0,
          target: '44-pasillo_izquierdo_a_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '12-3_aula_daw',
      name: 'Aula Daw',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.559325385069327,
          pitch: 0.05456296691036222,
          rotation: 1.5707963267948966,
          target: '11-2_pasillo_daw_plasticos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '13-41_aula_plasticos',
      name: 'Pasillo',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.574122995714383,
          pitch: 0.13775857734884767,
          rotation: 0,
          target: '14-42_aula_plasticos',
        },
        {
          yaw: -0.8029842344055496,
          pitch: 0.18327384997845897,
          rotation: 0,
          target: '11-2_pasillo_daw_plasticos',
        },
        {
          yaw: 2.2561130634837587,
          pitch: 0.19135800868173547,
          rotation: 0,
          target: '15-51_pasillo_2_eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '14-42_aula_plasticos',
      name: 'Aula Plasticos',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.8245391247011948,
          pitch: 0.043800444670576866,
          rotation: 1.5707963267948966,
          target: '13-41_aula_plasticos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '15-51_pasillo_2_eso',
      name: 'Pasillo 2ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.41081407584010243,
          pitch: 0.11680895259770274,
          rotation: 0,
          target: '13-41_aula_plasticos',
        },
        {
          yaw: -2.65883618068192,
          pitch: 0.30060799574418695,
          rotation: 5.497787143782138,
          target: '16-52_pasillo_2_eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '16-52_pasillo_2_eso',
      name: 'Pasillo 2ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.11493745839295144,
          pitch: 0.22680649212173165,
          rotation: 7.853981633974483,
          target: '15-51_pasillo_2_eso',
        },
        {
          yaw: 1.303797595013684,
          pitch: 0.473144897704735,
          rotation: 0,
          target: '17-6_escalera_1eso',
        },
        {
          yaw: 2.7495397480738646,
          pitch: 0.22133756783620662,
          rotation: 0,
          target: '18-71_pasillo_3_eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '17-6_escalera_1eso',
      name: 'Escalera 1ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.4551372283083257,
          pitch: 0.08895339856371187,
          rotation: 0.7853981633974483,
          target: '16-52_pasillo_2_eso',
        },
        {
          yaw: 1.0876256287349353,
          pitch: 0.6816731874960809,
          rotation: 0,
          target: '42-escalera-3eso-biblioteca',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '18-71_pasillo_3_eso',
      name: 'Pasillo 3ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.6058151828849887,
          pitch: 0.20676004657237712,
          rotation: 0,
          target: '16-52_pasillo_2_eso',
        },
        {
          yaw: -1.6011016752420293,
          pitch: 0.15315391554039692,
          rotation: 0,
          target: '19-72_pasillo_3_eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '19-72_pasillo_3_eso',
      name: 'Pasillo 3ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.0214765040621252,
          pitch: 0.29432967123035425,
          rotation: 0,
          target: '18-71_pasillo_3_eso',
        },
        {
          yaw: -3.119730434171668,
          pitch: 0.19520122234626847,
          rotation: 0,
          target: '20-8_pasillo_bachiller',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '20-8_pasillo_bachiller',
      name: 'Pasillo Bachiller',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.8753528474728132,
          pitch: 0.1736287446786129,
          rotation: 0.7853981633974483,
          target: '19-72_pasillo_3_eso',
        },
        {
          yaw: -0.027540643873747328,
          pitch: 0.239692982983005,
          rotation: 0,
          target: '22-9_bachiller',
        },
        {
          yaw: 3.000090259931408,
          pitch: 0.508092766325996,
          rotation: 0,
          target: '21-escalera_pasillo_2-sactos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '21-escalera_pasillo_2-sactos',
      name: 'Escalera Salón Actos',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.086359387505091,
          pitch: -0.010179398157578845,
          rotation: 0,
          target: '20-8_pasillo_bachiller',
        },
        {
          yaw: 2.5022086911486827,
          pitch: 0.6295629619186691,
          rotation: 0,
          target: '35-pasillo_2_s-actos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '22-9_bachiller',
      name: 'Bachiller',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.049043571786262,
          pitch: 0.25552125064661446,
          rotation: 0,
          target: '20-8_pasillo_bachiller',
        },
        {
          yaw: -0.8025442153638309,
          pitch: 0.30165980486193433,
          rotation: 5.497787143782138,
          target: '23-escalera_a_s-actos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '23-escalera_a_s-actos',
      name: 'Escalera Salón Actos',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.0328411858366398,
          pitch: -0.2100520459411186,
          rotation: 1.5707963267948966,
          target: '22-9_bachiller',
        },
        {
          yaw: -2.8169980399113825,
          pitch: 0.6602922281195518,
          rotation: 0,
          target: '33-pasillo_salon_actos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '24-pasillo_biblioteca',
      name: 'Pasillo Biblioteca',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.43903235631064774,
          pitch: 0.4104465477479309,
          rotation: 0,
          target: '25-biblioteca',
        },
        {
          yaw: -2.1751119663023193,
          pitch: 0.2569359126283395,
          rotation: 0,
          target: '9-admin_escalera',
        },
        {
          yaw: 0.9313033467592149,
          pitch: 0.2691220403902612,
          rotation: 0,
          target: '43-pasillo_2_biblioteca',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '25-biblioteca',
      name: 'biblioteca',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.7798105148926879,
          pitch: 0.4260314221569921,
          rotation: 0,
          target: '24-pasillo_biblioteca',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '26-pasillo_losa',
      name: 'Pasaje a Campo Deportivo',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.0992773329774312,
          pitch: 0.2202830228123034,
          rotation: 0,
          target: '1-entrada_escaleras',
        },
        {
          yaw: 2.186781218957087,
          pitch: 0.7236230291642762,
          rotation: 0,
          target: '27-losa',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '27-losa',
      name: 'Campo Deportivo',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.155632172923033,
          pitch: 0.14566408803438158,
          rotation: 0,
          target: '28-pasillo_gimansio',
        },
        {
          yaw: -1.1894474927886485,
          pitch: 0.0371160750068249,
          rotation: 0,
          target: '26-pasillo_losa',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '28-pasillo_gimansio',
      name: 'pasillo gimnasio',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.3037923199712118,
          pitch: 0.39905068076268435,
          rotation: 0,
          target: '29-gimnasio',
        },
        {
          yaw: -1.041990697584712,
          pitch: 0.30190784534363146,
          rotation: 0,
          target: '27-losa',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '29-gimnasio',
      name: 'gimnasio',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.4229779373245,
          pitch: 0.1770073178046374,
          rotation: 0,
          target: '28-pasillo_gimansio',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '30-pabellon_dam',
      name: 'Patio2 Superior',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.7069437291811216,
          pitch: 0.2718750212584915,
          rotation: 0,
          target: '33-pasillo_salon_actos',
        },
        {
          yaw: -0.26195908342640806,
          pitch: 0.17949386214829133,
          rotation: 0,
          target: '5-pabellon_daw_admin',
        },
        {
          yaw: 1.1399803499996768,
          pitch: 0.2086926187497813,
          rotation: 0,
          target: '31-pasillo_1_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '31-pasillo_1_dam',
      name: 'pasillo dam',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.2056467189420719,
          pitch: 0.41834360644371493,
          rotation: 0,
          target: '37-pasillo_salida2',
        },
        {
          yaw: 0.13627180036976227,
          pitch: 0.21360885118667028,
          rotation: 0,
          target: '32-pasillo_2_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '32-pasillo_2_dam',
      name: 'pasillo dam',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.0186328518814243,
          pitch: 0.24365381551132081,
          rotation: 5.497787143782138,
          target: '31-pasillo_1_dam',
        },
        {
          yaw: 0.4701380756474496,
          pitch: 0.1537836224070528,
          rotation: 5.497787143782138,
          target: '36-aula_1dam',
        },
        {
          yaw: -0.8738924374168864,
          pitch: 0.011027002290955323,
          rotation: 0,
          target: '47-escaleras_a_dam',
        },
        {
          yaw: -2.3188850476903493,
          pitch: 0.23248330581341037,
          rotation: 0,
          target: '48-pasillo_direccion',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '33-pasillo_salon_actos',
      name: 'pasillo salón actos',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.5449492003524128,
          pitch: 0.2277448248376821,
          rotation: 0,
          target: '30-pabellon_dam',
        },
        {
          yaw: 2.4231110749837237,
          pitch: 0.3422211528112804,
          rotation: 0,
          target: '34-salon_actons',
        },
        {
          yaw: -0.6642305224837841,
          pitch: 0.03343982749761665,
          rotation: 5.497787143782138,
          target: '23-escalera_a_s-actos',
        },
        {
          yaw: -2.443150758856266,
          pitch: 0.2896379492670249,
          rotation: 0,
          target: '35-pasillo_2_s-actos',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '34-salon_actons',
      name: 'Salón Actos',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.8911905580113721,
          pitch: 0.21268176636405833,
          rotation: 5.497787143782138,
          target: '33-pasillo_salon_actos',
        },
      ],
      infoHotspots: [],
    },
    {
      //todo aqui me he quedado!!!
      id: '35-pasillo_2_s-actos',
      name: 'Pasillo Salón Actos',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.7040865527517672,
          pitch: -0.01147408559525509,
          rotation: 0,
          target: '21-escalera_pasillo_2-sactos',
        },
        {
          yaw: -0.47036405337528997,
          pitch: 0.24835799580372608,
          rotation: 0,
          target: '33-pasillo_salon_actos',
        },
        {
          yaw: -2.8799109213989045,
          pitch: 0.27105662952020637,
          rotation: 1.5707963267948966,
          target: '39-pasillo_1-eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '36-aula_1dam',
      name: 'Aula 1DAM',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.775025934811098,
          pitch: 0.10675702191841197,
          rotation: 0,
          target: '32-pasillo_2_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '37-pasillo_salida2',
      name: 'Pasaje a Salida',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.0495489368041824,
          pitch: 0.16652294736467255,
          rotation: 5.497787143782138,
          target: '30-pabellon_dam',
        },
        {
          yaw: 0.21921655322725364,
          pitch: 0.17771382271647163,
          rotation: 10.995574287564278,
          target: '38-salida',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '38-salida',
      name: 'Salida',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.4852679850854287,
          pitch: 0.1449230049300425,
          rotation: 0,
          target: '37-pasillo_salida2',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '39-pasillo_1-eso',
      name: 'Pasillo 1ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.9087372270080163,
          pitch: 0.27809812042042026,
          rotation: 0,
          target: '35-pasillo_2_s-actos',
        },
        {
          yaw: 0.3186897615903561,
          pitch: 0.2563153670322311,
          rotation: 0,
          target: '40-pasillo_12-eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '40-pasillo_12-eso',
      name: 'Pasillo 1 y 2 ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.136797021980863,
          pitch: 0.2519534682231246,
          rotation: 0,
          target: '39-pasillo_1-eso',
        },
        {
          yaw: -0.08934179575216028,
          pitch: 0.18139838978653344,
          rotation: 0,
          target: '41-pasillo_4_eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '41-pasillo_4_eso',
      name: 'pasillo 4ESO',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.011811511522916263,
          pitch: 0.3750404997299466,
          rotation: 0,
          target: '40-pasillo_12-eso',
        },
        {
          yaw: -3.0864964678287876,
          pitch: 0.1619555961912198,
          rotation: 1.5707963267948966,
          target: '42-escalera-3eso-biblioteca',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '42-escalera-3eso-biblioteca',
      name: 'Escalera 3ESO - Biblioteca',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.3656333460533876,
          pitch: 0.31879513717983876,
          rotation: 0.7853981633974483,
          target: '43-pasillo_2_biblioteca',
        },
        {
          yaw: 2.9527047067527317,
          pitch: 0.12763342663753008,
          rotation: 5.497787143782138,
          target: '17-6_escalera_1eso',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '43-pasillo_2_biblioteca',
      name: 'Pasillo2 Biblioteca',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -3.1022373235214395,
          pitch: 0.2580955628171928,
          rotation: 5.497787143782138,
          target: '42-escalera-3eso-biblioteca',
        },
        {
          yaw: 0.04947754241484503,
          pitch: 0.3465109677424856,
          rotation: 0,
          target: '24-pasillo_biblioteca',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '44-pasillo_izquierdo_a_dam',
      name: 'Pasillo a Dam',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.4450663906507675,
          pitch: 0.2631264387473955,
          rotation: 0,
          target: '11-2_pasillo_daw_plasticos',
        },
        {
          yaw: -2.988496027646889,
          pitch: 0.1627359348726074,
          rotation: 0,
          target: '45-pasillo_1_izquierdo_a_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '45-pasillo_1_izquierdo_a_dam',
      name: 'Pasillo a dam',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -0.37750877331933097,
          pitch: 0.27459830496368376,
          rotation: 5.497787143782138,
          target: '44-pasillo_izquierdo_a_dam',
        },
        {
          yaw: 2.7490069754019606,
          pitch: 0.14580536270796784,
          rotation: 0,
          target: '46-baos_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '46-baos_dam',
      name: 'baños dam',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.104157435613386,
          pitch: 0.2740929866199622,
          rotation: 0,
          target: '45-pasillo_1_izquierdo_a_dam',
        },
        {
          yaw: -2.558611962152874,
          pitch: 0.5038026589189712,
          rotation: 0,
          target: '47-escaleras_a_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '47-escaleras_a_dam',
      name: 'Escaleras a Dam',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.4342452216292614,
          pitch: 0.5290468493367566,
          rotation: 5.497787143782138,
          target: '32-pasillo_2_dam',
        },
        {
          yaw: -0.22955044772933597,
          pitch: -0.12997510076807473,
          rotation: 0.7853981633974483,
          target: '46-baos_dam',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '48-pasillo_direccion',
      name: 'Pasillo a Administración',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.967310412723233,
          pitch: 0.1505613988023775,
          rotation: 0,
          target: '32-pasillo_2_dam',
        },
        {
          yaw: 0.17164529793568484,
          pitch: 0.2672908240153493,
          rotation: 5.497787143782138,
          target: '49-pasillo_1_direccion',
        },
      ],
      infoHotspots: [],
    },
    {
      id: '49-pasillo_1_direccion',
      name: 'Pasillo a Administración',
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1728,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.11936285294609839,
          pitch: 0.27596345892309415,
          rotation: 0,
          target: '48-pasillo_direccion',
        },
        {
          yaw: 2.1022723490588673,
          pitch: 0.4446905759730697,
          rotation: 0,
          target: '8-administracion',
        },
      ],
      infoHotspots: [],
    },
  ],
  name: 'IES FERNANDO III - TOUR VIRTUAL',
  settings: {
    mouseViewMode: 'drag',
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: false,
  },
};
