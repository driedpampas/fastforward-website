browserSelect = document.querySelector("select.btn");
browserSelect.value = browser();

formPages = document.querySelectorAll(".pageBackground");

for (var i = 1; i < formPages.length; i++) {
  formPages[i].classList.add("hidden");
}

function nextPage(currentPage) {
  loadEndPageContent();

  document.querySelectorAll(".pageBackground")[currentPage].classList.add("leaving");
  document.querySelectorAll(".pageBackground")[currentPage + 1].classList.add("arriving");
  document.querySelectorAll(".pageBackground")[currentPage + 1].classList.remove("hidden");

  setTimeout(function() {
    document.querySelectorAll(".pageBackground")[currentPage].classList.add("hidden");
    document.querySelectorAll(".pageBackground")[currentPage].classList.remove("leaving");
    document.querySelectorAll(".pageBackground")[currentPage + 1].classList.remove("arriving");
  }, 0.375 * 1000);
}

function loadEndPageContent() {
  instructions = {
    "Firefox" : `<p>FastForward is available on addons.mozilla.org!</p>
    <a href="https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/">Install FastForward</a><br>
    <p>You can also click the Direct Install button to skip visiting addons.mozilla.org!</p>
    <a href="https://addons.mozilla.org/firefox/downloads/file/4171126/fastforwardteam-0.2310.xpi">Direct Install</a>`,

    "Edge" : `<p>FastForward is available on the Microsoft Edge Addons Store!</p>
    <a href="https://microsoftedge.microsoft.com/addons/detail/FastForward/ldcclmkclhomnpcnccgbgleikchbnecl/">Install FastForward</a>`,

    "Chrome" : `<p>FastForward is available on the Chrome Web Store!</p>
    <a href="https://chrome.google.com/webstore/detail/fastforward/icallnadddjmdinamnolclfjanhfoafe">Install FastForward</a>`,

    "Safari" : `<p>Unfortunately, FastForward is not currently supported on Safari.</p>
    We recommend that you download Mozilla Firefox or Google Chrome instead.<br>
    <a href="https://www.mozilla.org/en-US/firefox/new/">Download Firefox</a><br>
    <a href="https://www.google.com/chrome/">Download Chrome</a>`,

    "Other": `<p>You can download FastForward builds with the following links:</p>
    <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_chromium.zip">Download FastForward for Chromium Based Browsers</a><br>
    <a href="https://nightly.link/FastForwardTeam/FastForward/workflows/main/main/FastForward_firefox.zip">Download FastForward for Firefox Based Browsers</a><br>
    <br>
    <a href="https://github.com/FastForwardTeam/FastForward/blob/main/INSTALLING.md">Installation Instructions</a><br>
    <p>If your browser isn't one of these, please contact us on our <a href="https://discord.com/invite/RSAf7b5njt">Discord server</a></p>`
  }

  document.querySelector("#endPage").innerHTML = `
  <span>${browserSelect.options[browserSelect.selectedIndex].innerText}</span><br><br>
  ${instructions[browserSelect.value] + "<br><br><p>Not working? Check our <a href='https://github.com/FastForwardTeam/FastForward/blob/main/INSTALLING.md#troubleshooting'>Troubleshooting Page</a>.</p>"}`;
}

function fixHeight() {
  width = document.querySelector("section h2").offsetWidth;
  for (var i = 0; i < formPages.length; i++) {
    formPages[i].style.width = width + "px";
  }

  document.querySelector("#form").style.marginBottom = document.querySelector(".pageBackground:not(.hidden):not(.leaving)").offsetHeight + "px"

  setTimeout(function() {
    fixHeight();
  }, 50)
}

fixHeight();
