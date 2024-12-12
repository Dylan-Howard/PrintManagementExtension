console.log('This is a printer popup!');

async function getPrinters() {
  const printers = await chrome.printing.getPrinters();

  for (let i = 0; i < printers.length; i += 1) {
    console.log(
      `Printer: ${printers[i].name}, ${printers[i].description} (${printers[i].source}; ${printers[i].recentlyUsedRank}; ${printers[i].isDefault})`,
    );
  }
}

void (async () => {
  await getPrinters();
})();
