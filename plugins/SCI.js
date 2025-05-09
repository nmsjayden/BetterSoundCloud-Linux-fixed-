// SCI.js - Custom UI Enhancement Script for Web App

(function () {
  console.log("SCI.js: Starting the UI Enhancement Script...");

  // Utility: Create SVG Button
  function createButton(classNames, svgContent, onclickHandler) {
    console.log("SCI.js: Creating button with classes:", classNames);
    const btn = document.createElement("li");
    classNames.forEach(cls => {
      console.log(`SCI.js: Adding class ${cls}`);
      btn.classList.add(cls);
    });
    btn.setAttribute("onclick", onclickHandler);
    btn.innerHTML = svgContent;
    console.log("SCI.js: Button created:", btn);
    return btn;
  }

  // Clean up existing header elements
  console.log("SCI.js: Removing all existing header links...");
  document.querySelectorAll(".header__right .header__link").forEach(el => {
    console.log("SCI.js: Removing link element:", el);
    el.remove();
  });

  const rightNavBar = document.querySelector(".header__right .header__navMenu");
  console.log("SCI.js: Right navbar found:", rightNavBar);

  if (!rightNavBar) {
    console.error("SCI.js: Failed to find the right navbar element!");
    return;
  }

  // Create and append window control buttons
  const closeBtn = createButton(
    ["header__appclosebtn", "header__app__custombtns"],
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>`,
    "console.log('BSCReceive|UISettingCloseApp')"
  );

  const maximizeBtn = createButton(
    ["header__appmaximizebtn", "header__app__custombtns"],
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>`,
    "maximize()"
  );

  const minimizeBtn = createButton(
    ["header__appminimizebtn", "header__app__custombtns"],
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-120v-80h480v80H240Z"/></svg>`,
    "console.log('BSCReceive|UISettingMinimizeApp')"
  );

  console.log("SCI.js: App buttons created");

  // Maximize Toggle Logic
  function toggleMenuIcons() {
    console.log("SCI.js: Toggling maximize button icons...");
    const isAlt = maximizeBtn.classList.toggle("header__appmaximizebtn__alt");
    console.log("SCI.js: Maximize button is now", isAlt ? "alternative" : "default");

    if (isAlt) {
      maximizeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z"/></svg>`;
      minimizeBtn.style.display = "none";
      closeBtn.style.display = "none";
    } else {
      maximizeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M240-120v-120H120v-80h200v200h-80Zm400 0v-200h200v80H720v120h-80ZM120-640v-80h120v-120h80v200H120Zm520 0v-200h80v120h120v80H640Z"/></svg>`;
      minimizeBtn.style.display = "flex";
      closeBtn.style.display = "flex";
    }
  }

  function maximize() {
    console.log("SCI.js: Maximize button clicked.");
    toggleMenuIcons();
    console.log('BSCReceive|UISettingMaximizeApp');
  }

  toggleMenuIcons();
  console.log("SCI.js: Window control buttons appended to the right navbar.");
  rightNavBar.append(minimizeBtn, maximizeBtn, closeBtn);

  // Previous/Next Navigation
  const leftHeaderBar = document.querySelector(".header__left .header__navMenu");
  console.log("SCI.js: Left navbar found:", leftHeaderBar);

  if (!leftHeaderBar) {
    console.error("SCI.js: Failed to find the left navbar element!");
    return;
  }

  const prevBtn = createButton(
    ["header__apppreviousbtn", "header__app__custombtns"],
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/></svg>`,
    "console.log('BSCReceive|UISettingPreviousFrame')"
  );

  const nextBtn = createButton(
    ["header__appnextbtn", "header__app__custombtns"],
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`,
    "console.log('BSCReceive|UISettingNextFrame')"
  );

  leftHeaderBar.prepend(nextBtn);
  leftHeaderBar.prepend(prevBtn);
  console.log("SCI.js: Previous and next navigation buttons added to the left navbar.");

  // Replace Header Text with Icons
  const navItems = document.querySelectorAll(".header__navMenu li .header__navMenuItem");
  console.log("SCI.js: Replacing header menu items with icons. Found items:", navItems);

  const icons = [
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73v.61c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-.61c0-1.18.68-2.26 1.76-2.73 1.17-.51 2.61-.9 4.24-.9z"/></svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`
  ];

  navItems.forEach((item, i) => {
    console.log("SCI.js: Replacing item with icon:", item);
    item.innerHTML = icons[i] || "";
  });

  // Icon compatibility fix for themes
  document.querySelectorAll(".header__navMenuItem svg").forEach(svg => {
    console.log("SCI.js: Fixing icon compatibility for themes...");
    svg.setAttribute("style", "overflow: visible !important; opacity: 1 !important; filter: invert(0) !important;");
  });

  // Audio Bar Buttons
  const controls = document.querySelector(".playControls__elements");
  console.log("SCI.js: Audio control buttons found:", controls);

  if (!controls) {
    console.error("SCI.js: Failed to find the audio controls elements!");
    return;
  }

  const buttons = [
    ["playControls__pluginbtn", "BSCReceive|UISettingShowRequest|1"],
    ["playControls__themebtn", "BSCReceive|UISettingShowRequest|2"],
    ["playControls__lyricbtn", "BSCReceive|UIActivateLyricShowCase"],
    ["playControls__showcasebtn", "BSCReceive|UIActivateShowCase"]
  ];

  const svgs = [
    "<path d='M352-120H120v-232q48 0 84-30.5t36-77.5q0-47-36-77.5T120-568v-232h240q0-42 29-71t71-29q42 0 71 29t29 71h240v240q42 0 71 29t29 71q0 42-29 71t-71 29v240H568q0-50-31.5-85T460-240q-45 0-76.5 35T352-120Z'/>",
    "<path d='M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Z'/>",
    "<path d='M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Z'/>",
    "<path d='m380-300 280-180-280-180v360ZM80-160v-640h800v640H80Z'/>"
  ];

  buttons.forEach(([cls, log], i) => {
    const btn = document.createElement(i === 0 ? "a" : "div");
    btn.classList.add(cls);
    btn.setAttribute("onclick", `console.log('${log}')`);
    btn.innerHTML = `<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px'>${svgs[i]}</svg>`;
    controls.appendChild(btn);
    console.log(`SCI.js: Audio button added: ${cls}`);
  });

  console.log("SCI.js: Script completed successfully.");
})();
