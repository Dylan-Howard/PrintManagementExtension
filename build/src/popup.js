"use strict";
console.log('This is a printer popup!');
async function getPrinters() {
    const printers = await chrome.printing.getPrinters();
    for (let i = 0; i < printers.length; i += 1) {
        console.log(`Printer: ${printers[i].name}, ${printers[i].description} (${printers[i].source}; ${printers[i].recentlyUsedRank}; ${printers[i].isDefault})`);
    }
}
function reportPrint() {
    chrome.printing.onJobStatusChanged.addListener((jobId, status) => {
        console.log(`Detected print: ${jobId}: ${status}`);
        // const cancelButton = document.getElementById("cancelButton");
        // if (!cancelButton) {
        //   return;
        // }
        // cancelButton.addEventListener('click', () => {
        //   chrome.printing.cancelJob(jobId).then((response) => {
        //     if (response !== undefined) {
        //       console.log(response.status);
        //     }
        //     if (chrome.runtime.lastError !== undefined) {
        //       console.log(chrome.runtime.lastError.message);
        //     }
        //   });
        // });
        // if (status !== "PENDING" && status !== "IN_PROGRESS") {
        //   cancelButton.style.visibility = 'hidden';
        // } else {
        //   cancelButton.style.visibility = 'visible';
        // }
    });
}
void (async () => {
    reportPrint();
    await getPrinters();
})();
//# sourceMappingURL=popup.js.map