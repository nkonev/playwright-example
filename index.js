const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} 

async function main() {

	const browser = await chromium.launch({ headless: false });
	const context = await browser.newContext();

	// Create a page.
	const page = await context.newPage();

	// Navigate explicitly, similar to entering a URL in the browser.
	await page.goto('https://nkonev.name');
	// Fill an input.
	await page.fill('.search-input', 'postgres');
	await sleep(2000);

	console.log(page.url());


	await browser.close();

}

(async() => {
  console.log('before start');

  await main();
  
  console.log('after start');
})();
