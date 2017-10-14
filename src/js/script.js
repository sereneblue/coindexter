var app = new Vue({
  el: '#app',
  data: {
	crypto_amount: 0,
	cryptoPrices: {},
	currencies: [],
	currentCrypto: "BTC",
	exchangeRates: {
	rates: {}
	},
	fiat: {
		AUD: "$",
		BRL: "R$",
		CAD: "C$",
		CHF: "Fr.",
		CNY: "¥",
		EUR: "€",
		GBP: "£",
		HKD: "HK$",
		IDR: "Rp",
		INR: "₹",
		JPY: "¥",
		KRW: "₩",
		MXN: "M$",
		RUB: "₽",
		USD: "$"
	},
	fiat_amount: 0,
	investment: {
		current_price: 0,
		target: 0,
		amount: 0
	},
	settings: {
		currency: "USD",
		num_display: 100,
		removeUnmineable: false
	},
	shifts: {},
	state: "calculator",
	stats: {},
	topGains: [],
	topLosses: []
  },
  methods: {
	calculate: function (type) {
		var crypto = $('.ui.dropdown').dropdown('get value')[0] ? $('.ui.dropdown').dropdown('get value')[0].toUpperCase() : "BTC";
		var fiat = $('.ui.dropdown').dropdown('get value')[1] ? $('.ui.dropdown').dropdown('get value')[1].toUpperCase() : "USD";
		var rate = (fiat != "USD" ? this.exchangeRates.rates[fiat] : 1);
		if (type == "fiat") {
			this.crypto_amount = Number($('#crypto-amount')[0].value);
			this.fiat_amount = this.crypto_amount * this.cryptoPrices[crypto] * rate;
		} else {
			this.fiat_amount = Number($('#fiat-amount')[0].value);
			this.crypto_amount = ((this.fiat_amount / this.cryptoPrices[crypto]) * rate).toFixed(8);
		}
	},
	changeState: function (state) {
		this.state = state;
	},
	checkMineable: function () {
		if (!app.settings.removeUnmineable) {return this.currencies};
		return this.currencies.filter(function(currency){
		  return (mineable[currency.symbol] == "m" || mineable[currency.symbol] == "p" || mineable[currency.symbol] == "i" || mineable[currency.symbol] == "s");
		});
	},
	current_investment_price: function () {
		var crypto = $('.ui.dropdown').dropdown('get value')[2] ? $('.ui.dropdown').dropdown('get value')[2].toUpperCase() : "BTC";
		var fiat = $('.ui.dropdown').dropdown('get value')[3] ? $('.ui.dropdown').dropdown('get value')[3].toUpperCase() : "USD";
		var rate = (fiat != "USD" ? this.exchangeRates.rates[fiat] : 1);

		this.investment.current_price = this.cryptoPrices[crypto] * rate;
		return (this.investment.current_price * this.investment.amount * rate).toLocaleString();
	},
	format: function (amount) {
		return parseFloat(amount).toLocaleString();
	},
	getMarketcap: function (currency) {
		return app.format(currency['market_cap_' + app.settings.currency.toLowerCase()]);
	},
	getPrice: function (currency) {
		return app.format(currency['price_' + app.settings.currency.toLowerCase()]);
	},
	mineable: function (symbol) {
		return mineable[symbol];
	},
	updateData: function () {
		var _this = this;

		url = 'https://api.coinmarketcap.com/v1/ticker/?limit=' + app.settings.num_display;
		if (app.settings.currency != "BTC" && app.settings.currency != "USD") {
			url += "&convert=" + app.settings.currency;
		};

		this.$http.get(url).then(function (response) {
			_this.currencies = response.body;
			var coins = _this.currencies.slice();
			coins.sort(function (a, b) {
				return Number(a.percent_change_24h) - Number(b.percent_change_24h);
			});
			_this.topLosses = [jQuery.extend({}, coins[0]), jQuery.extend({}, coins[1]), jQuery.extend({}, coins[2])];
			coins.sort(function (a, b) {
				return Number(b.percent_change_24h) - Number(a.percent_change_24h);
			});
			_this.topGains = [jQuery.extend({}, coins[0]), jQuery.extend({}, coins[1]), jQuery.extend({}, coins[2])];

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = _this.currencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var currency = _step.value;

					_this.cryptoPrices[currency.symbol] = Number(currency.price_usd);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			;

			_this.$http.get('https://shapeshift.io/getcoins').then(function (res) {
				app.shifts = res.body;
				_this.currencies.forEach(function (currency, idx) {
					if (app.shifts[currency.symbol] && app.shifts[currency.symbol].status == "available") {
						// using the 'last_updated' property for canShift
						// something about reactivity, so I'll just use a small hack :)
						app.currencies[idx].last_updated = true;
					} else {
						app.currencies[idx].last_updated = false;
					}
				});
			});
			_this.$http.get('https://api.fixer.io/latest?base=USD').then(function (response) {
				_this.exchangeRates = response.body;
				$('#crypto-dropdown').dropdown('setting', 'onChange', function () {
					app.calculate('fiat');
				});
				$('#fiat-dropdown').dropdown('setting', 'onChange', function () {
					app.calculate('crypto');
				});
				$('#investment-crypto').dropdown('setting', 'onChange', function (val) {
					app.current_investment_price();
				});
				$('#target-fiat').dropdown('setting', 'onChange', function () {
					app.current_investment_price();
				});
			});
		});
		this.$http.get('https://api.coinmarketcap.com/v1/global/').then(function (response) {
			_this.stats = response.body;
		});
	},
	wallet: function (symbol) {
		return wallets[symbol];
	}
  },
  computed: {
	current: function () {
		return this.fiat[this.settings.currency];
	},
	currencyList: function () {
		var list = [];
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
				for (var _iterator = this.currencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var currency = _step.value;

						list.push(currency.symbol);
				}
		} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
		} finally {
				try {
						if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
						}
				} finally {
						if (_didIteratorError) {
								throw _iteratorError;
						}
				}
		}

		return list.sort();
	},
	profit: function () {
		return ((Number(app.investment.target) - Number(app.investment.current_price)) * app.investment.amount).toFixed(2).toLocaleString();
	},
	rates: function () {
		var c = Object.keys(this.exchangeRates.rates)
		c.push("USD");
		return c.sort();
	}
  }
})

$(document).ready(function() {
	if (window.location.hash.match(/[A-Z]{3}-\d{2,4}-[tf]/)) {
		var bits = window.location.hash.split('-');
		var arr = Object.keys(app.fiat);
		bits[0] = bits[0].substring(1);
		if (arr.indexOf(bits[0]) || bits[0] == "BTC") {
			app.settings.currency = bits[0];
		}
		if (Number(bits[1]) >= 10) {
			app.settings.num_display = bits[1];
		}
		app.settings.removeUnmineable = (bits[2] == "t" ? true : false);
	}
	app.updateData();
	setInterval(app.updateData, 300 * 1000);
});

function showModal(symbol) {
	app.currentCrypto = symbol;
	$('.ui.modal').modal('show');
};

function generateURL() {
	var base = $("#base-currency")[0].value ? $("#base-currency")[0].value : "USD";
	var num_display = $("#num-display")[0].value;
	var unmineable = $("#unmineable")[0].checked ? "t" : "f";
	window.location.hash = "#" + base + "-" + num_display + "-" + unmineable;
	window.location.reload();
};