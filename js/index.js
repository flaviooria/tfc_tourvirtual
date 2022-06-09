/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function () {
  const Marzipano = window.Marzipano;
  const bowser = window.bowser;
  const screenfull = window.screenfull;
  const data = window.APP_DATA;

  // Grab elements from DOM.
  const panoElement = document.querySelector('#pano');
  const sceneNameElement = document.querySelector('#titleBar .sceneName');
  const autorotateToggleElement = document.querySelector('#autorotateToggle');
  const fullscreenToggleElement = document.querySelector('#fullscreenToggle');
  const historyToggleElement = document.querySelector('#historyToggle');
  const historyElement = document.querySelector('#history');
  const mapToggleElement = document.querySelector('#mapToggle');
  const mapElement = document.querySelector('#contentMap');
  const closeToggleElement = document.querySelector('#closeToggle');
  const arrowUpToggleElement = document.querySelector('.arrow_up');
  const arrowDownToggleElement = document.querySelector('.arrow_down');
  // Array of map names scenes of floor down
  const anchorsForFloorDown = mapElement.querySelectorAll('.mapDown a');
  // Array of map names scenes of floor up
  const anchorsForFloorUp = mapElement.querySelectorAll('.mapUp a');

  // Array of scenes history
  let scenesHistory = [];

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    let setMode = function () {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    let mql = matchMedia('(max-width: 500px), (max-height: 500px)');
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function () {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  const viewerOpts = {
    controls: {
      mouseViewMode: data.settings.mouseViewMode,
    },
  };

  // Initialize viewer.
  const viewer = new Marzipano.Viewer(panoElement, viewerOpts);

  // Create scenes.
  const scenes = data.scenes.map(function (data) {
    let urlPrefix = 'assets/tiles';
    let source = Marzipano.ImageUrlSource.fromString(
      urlPrefix + '/' + data.id + '/{z}/{f}/{y}/{x}.jpg',
      { cubeMapPreviewUrl: urlPrefix + '/' + data.id + '/preview.jpg' }
    );
    let geometry = new Marzipano.CubeGeometry(data.levels);

    let limiter = Marzipano.RectilinearView.limit.traditional(
      data.faceSize,
      (100 * Math.PI) / 180,
      (120 * Math.PI) / 180
    );
    let view = new Marzipano.RectilinearView(
      data.initialViewParameters,
      limiter
    );

    let scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true,
    });

    // Create link hotspots.
    data.linkHotspots.forEach(function (hotspot) {
      const element = createLinkHotspotElement(hotspot);
      scene
        .hotspotContainer()
        .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots.
    data.infoHotspots.forEach(function (hotspot) {
      const element = createInfoHotspotElement(hotspot);
      scene
        .hotspotContainer()
        .createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    return {
      data: data,
      scene: scene,
      view: view,
    };
  });

  // Create a card element by history of visited scenes.
  function createCardSceneElement(scene) {
    const { id, name } = scene.data;

    let a = document.createElement('a');
    a.classList.add('card');
    a.setAttribute('data-id', id);

    let img = document.createElement('img');
    img.src = './assets/tiles/' + id + '/preview.jpg';
    img.classList.add('image');
    img.setAttribute('loading', 'lazy');

    let p = document.createElement('p');
    p.classList.add('text');
    p.textContent = convertStringToSentence(name);

    a.appendChild(img);
    a.appendChild(p);

    historyElement.appendChild(a);
  }

  // Create a scene of history.
  function createSceneHistory() {
    if (scenesHistory.length == 1) {
      const scene = scenesHistory[0];
      createCardSceneElement(scene);
    } else {
      const scene = scenesHistory[scenesHistory.length - 1];
      createCardSceneElement(scene);
    }

    // We add your event to each link so that you can make the scene change.
    scenes.forEach(function (scene) {
      const anchor = document.querySelector(
        `#history .card[data-id='${scene.data.id}']`
      );

      if (anchor != null) {
        anchor.addEventListener('click', () => {
          switchScene(scene);
          // Hide history scenes
          historyElement.classList.remove('enabled');
          historyElement.classList.add('disabled');
        });
      }
    });
  }

  //Set show and hide history scenes
  historyToggleElement.addEventListener('click', () => {
    if (scenesHistory.length != 0) {
      if (!historyElement.classList.contains('historyList')) {
        historyElement.removeAttribute('style');
        historyElement.classList.add('historyList');
      }

      if (historyElement.classList.contains('historyList')) {
        if (historyElement.classList.contains('enabled')) {
          historyElement.classList.remove('enabled');
          historyElement.classList.add('disabled');
        } else {
          historyElement.classList.remove('disabled');
          historyElement.classList.add('enabled');
        }
      }
    }
  });

  //Event to show and hide map scenes
  mapToggleElement.addEventListener('click', () => {
    let showIconMap = 'show-icon-map';
    if (mapToggleElement.classList.contains(showIconMap)) {
      mapElement.classList.add('show-content-map');
      mapToggleElement.classList.remove(showIconMap);
      closeToggleElement.classList.add(showIconMap);
    }

    anchorsForFloorDown.forEach((element) => {
      // Get id of element and get scene by id to switch scene
      element.addEventListener('click', () => {
        //Event to switch scene
        const sceneId = element.getAttribute('id');
        const scene = findSceneById(sceneId);
        switchScene(scene);
        mapElement.classList.remove('show-content-map');
        closeToggleElement.classList.remove(showIconMap);
        mapToggleElement.classList.add(showIconMap);
      });
    });

    anchorsForFloorUp.forEach((element) => {
      // Get id of element and get scene by id to switch scene
      element.addEventListener('click', () => {
        //Event to switch scene
        const sceneId = element.getAttribute('id');
        const scene = findSceneById(sceneId);
        switchScene(scene);
        mapElement.classList.remove('show-content-map');
        closeToggleElement.classList.remove(showIconMap);
        mapToggleElement.classList.add(showIconMap);
      });
    });
  });

  closeToggleElement.addEventListener('click', () => {
    let showIconMap = 'show-icon-map';
    if (closeToggleElement.classList.contains(showIconMap)) {
      mapElement.classList.remove('show-content-map');
      closeToggleElement.classList.remove(showIconMap);
      mapToggleElement.classList.add(showIconMap);
    }
  });

  arrowDownToggleElement.addEventListener('click',() => {
    let mapDown = mapElement.querySelector('.mapDown');
    let mapUp = mapElement.querySelector('.mapUp');

    if (mapDown.classList.contains('show-map')) {
      mapDown.classList.remove('show-map');
      mapUp.classList.add('show-map')
    }
  })

  arrowUpToggleElement.addEventListener('click',() => {
    let mapDown = mapElement.querySelector('.mapDown');
    let mapUp = mapElement.querySelector('.mapUp');

    if (mapUp.classList.contains('show-map')) {
      mapUp.classList.remove('show-map');
      mapDown.classList.add('show-map')
    }
  })

  // Set up autorotate, if enabled.
  const autorotate = Marzipano.autorotate({
    yawSpeed: 0.03,
    targetPitch: 0,
    targetFov: Math.PI / 2,
  });
  if (data.settings.autorotateEnabled) {
    autorotateToggleElement.classList.add('enabled');
  }

  // Set handler for autorotate toggle.
  autorotateToggleElement.addEventListener('click', toggleAutorotate);

  // Set up fullscreen mode, if supported.
  if (screenfull.enabled && data.settings.fullscreenButton) {
    document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', function () {
      screenfull.toggle();
    });
    screenfull.on('change', function () {
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    });
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

  function switchScene(scene) {
    stopAutorotate();
    scene.view.setParameters(scene.data.initialViewParameters);
    scene.scene.switchTo();
    startAutorotate();
    updateSceneName(scene);

    // remove class point all elements
    anchorsForFloorDown.forEach((element) => element.classList.remove('point'));

    anchorsForFloorUp.forEach((element) => element.classList.remove('point'));

    anchorsForFloorDown.forEach((element) => {
      const sceneId = element.getAttribute('id');

      if (sceneId === scene.data.id) {
        // Add to animation pulse in element of scene current
        element.classList.add('point');
      }
    });

    anchorsForFloorUp.forEach((element) => {
      const sceneId = element.getAttribute('id');

      if (sceneId === scene.data.id) {
        // Add to animation pulse in element of scene current
        element.classList.add('point');
      }
    });
  }

  function updateSceneName(scene) {
    sceneNameElement.innerHTML = convertStringToSentence(
      sanitize(scene.data.name)
    );
  }

  function convertStringToSentence(value) {
    const stringArray = value.trim().toLowerCase().split(' ');
    let stringAux = '';
    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] != '') {
        stringAux +=
          stringArray[i][0].toUpperCase() + stringArray[i].substring(1) + ' ';
      }
    }
    return stringAux;
  }

  function startAutorotate() {
    if (!autorotateToggleElement.classList.contains('enabled')) {
      return;
    }
    viewer.startMovement(autorotate);
    viewer.setIdleMovement(3000, autorotate);
  }

  function stopAutorotate() {
    viewer.stopMovement();
    viewer.setIdleMovement(Infinity);
  }

  function toggleAutorotate() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      stopAutorotate();
    } else {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();
    }
  }

  function createLinkHotspotElement(hotspot) {
    // Create wrapper element to hold icon and tooltip.
    let wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    let icon = document.createElement('img');
    icon.src = 'assets/icons/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    let transformProperties = [
      '-ms-transform',
      '-webkit-transform',
      'transform',
    ];
    for (let i = 0; i < transformProperties.length; i++) {
      const property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function () {
      const scene = findSceneById(hotspot.target);
      addSceneToHistoryIfNotExist(scene);
      switchScene(scene);
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    let tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    let name = findSceneDataById(hotspot.target).name;
    tooltip.innerHTML = convertStringToSentence(name);

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {
    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = 'img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function () {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
    };

    // Show content when hotspot is clicked.
    wrapper
      .querySelector('.info-hotspot-header')
      .addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal
      .querySelector('.info-hotspot-close-wrapper')
      .addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

  function addSceneToHistoryIfNotExist(scene) {
    if (!scenesHistory.find((element) => element.data.id === scene.data.id)) {
      scenesHistory.push(scene);
      createSceneHistory();
    }
  }

  // Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    eventList = [
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'wheel',
      'mousewheel',
    ];
    for (let i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function (event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (let i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (let i = 0; i < data.scenes.length; i++) {
      if (data.scenes[i].id === id) {
        return data.scenes[i];
      }
    }
    return null;
  }

  // Display the initial scene.
  switchScene(scenes[0]);
})();
