# coindexter

An open source reskinned version of coinmarketcap.com with a few essential features.-

![coindexter screenshot](https://raw.githubusercontent.com/sereneblue/coindexter/master/coindexter.png)

If you'd like to see coindexter in action, click [here](https://sereneblue.github.io/coindexter/). You can also save coindexter for local usage. Use the index.html file located in the `src` folder.

## Features

#### Biggest Gainers/Losers

This only looks at the currencies that are loaded from the api request, not quite the same as coinmarketcap's version but still useful nonetheless.

#### Color coded markers

Color coded markers indicate if a coin is not mineable, premined, significantly premined, instamined, or mineable (fair launch).

	Green - Fair launch, mineable
	Olive - Premined
	Yellow - Instamined
	Orange - Significantly Premined
	Red - Not mineable
	Gray - Unknown

If you disagree with the color of a coin, please check the file [here](https://raw.githubusercontent.com/sereneblue/coindexter/master/src/js/mineable.js) with the justification first.

#### Cryptocurrency Wallets

Get direct links to wallets for your favorite currency! The data is stored in wallet.js. Please contribute and help maintain this; it's a very tedious process.

#### Custom settings

Change default currency to display, number of coins to display (min 100), and filter coins that can not be mined.

#### Fresh data

coindexter automatically refreshes data from coinmarketcap every 5 minutes (how often coinmarketcap caches data).

#### Investment Calculator

Set a target price and calculate profit/loss for your investment.

#### Price Calculator

Calculate price between cryptocurrency and fiat currency.

#### Shapeshift.io integration

Somewhat limited, however, you get a quick view of the coins that can be shifted.

## Special Thanks

* coinmarketcap.com for the API
* fixer.io for the exchange rate API
* shapeshift.io for the API
