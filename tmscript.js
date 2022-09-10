// ==UserScript==
// @name         ECHARTS
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://echarts.apache.org/examples/zh/editor.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=apache.org
// @grant        none
// @require      https://html2canvas.hertzen.com/dist/html2canvas.min.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.src = "https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js";
    document.documentElement.appendChild(script);

    document.addEventListener("keydown", function (e) {
        window.jsPDF = window.jspdf.jsPDF;
        if (e.key === "m" && e.metaKey) {
            var iframe = document.getElementById("chart-panel").firstElementChild;
            var container = iframe.contentWindow.document.getElementById("chart-container");
            var downPdf = container.firstElementChild.firstElementChild;
            console.log(downPdf);
            html2canvas(downPdf, {
                background: "#ffffff",
                useCORS: true,
                allowTaint: true
            }).then(function(canvas) {
                    let contentWidth = canvas.width;
                    let contentHeight = canvas.height;
                    let imgWidth = 595.28;
                    let imgHeight = 592.28 / contentWidth * contentHeight;
                    let pageData = canvas.toDataURL('image/jpeg', 1.0);
                    let pdf = new jsPDF('p', 'pt', 'a4');
                    pdf.addImage(pageData, 'PDF', 0, 0, imgWidth, imgHeight)
                    pdf.save('content.pdf');
                });
        }
    });

})();
