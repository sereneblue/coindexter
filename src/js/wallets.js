// wallet format
// name, site, is_online, is_desktop, is_mobile, is_hardware

var common = {
	coinbase: ["Coinbase", "https://coinbase.com", true, false, false, false],
	coinomi: ["Coinomi", "https://coinomi.com/", false, false, true, false],
	exodus: ["Exodus", "https://www.exodus.io/", false, true, false, false],
	jaxx: ["Jaxx", "https://jaxx.io/", false, true, true, false],
	keepkey: ["KeepKey", "https://www.keepkey.com/", false, false, false, true],
	ledger: ["Ledger", "https://www.ledgerwallet.com/products", false, false, false, true],
	omnicore: ["OmniCore", "http://www.omnilayer.org/download.html", false, true, false, false],
	omniwallet: ["OmniWallet", "https://www.omniwallet.org/", true, false, false, false],
	trezor: ["Trezor", "https://trezor.io/", false, false, false, true]
}

var erc = [
	common.ledger
	["MyEtherWallet", "https://www.myetherwallet.com/", true, false, false, false],
	["Parity", "https://github.com/paritytech/parity/releases", false, true, false, false],
	common.trezor
]

var wallets = {
	ADT: erc,
	ADX: erc,
	ANT: erc,
	ARDR: [
		["MyNXT", "https://wallet.mynxt.info/", true, false, false, false],
		["NXT Wallet", "https://nxt.org/download/", false, true, false, false]
	],
	ARK: [
		["Ark Wallet", "https://github.com/ArkEcosystem/ark-desktop/releases", false, true, false, false]
	],
	BAT: erc,
	BCC: [
		["Bitconnect Wallet", "https://bitconnectcoin.co/download", false, true, false, false],
		["Bitconnect Web Wallet", "http://www.bitconnect.co/", true, false, false, false]
	],
	BCH: [
		common.coinomi,
		["Electron Cash", "http://www.electroncash.org/", false, true, false, false],
		common.ledger,
		common.trezor
	],
	BCN: [
		["Bytecoin Wallet", "https://bytecoin.org/downloads/", false, true, false, false]
	],
	BTCD: [
		["BitcoinDark", "http://bitcoindark.com/#slide-00", false, true, false, false]
	],
	BDL: [
		["Bitdeal", "https://bitdeal.co.in/", false, true, true, false]
	],
	BLOCK: [
		["Blocknet", "http://blocknet.co/#downloads", false, true, false, false]
	],
	BNB: erc,
	BNT: erc,
	BQX: erc,
	BTC: [
		["Armory", "https://www.bitcoinarmory.com/", false, true, false, false],
		["BitcoinCore", "https://bitcoin.org/en/download", false, true, false, false],
		["BitGo", "https://www.bitgo.com/", true, false, false, false],
		["Blockchain.info", "https://blockchain.info", true, false, false, false],
		["breadwallet", "https://breadwallet.com/", false, false, true, false],
		common.coinbase,
		common.coinomi,
		["Copay", "https://copay.io/", true, true, true, false],
		["Electrum", "https://electrum.org", false, true, false, false],
		common.exodus,
		["Freewallet", "https://freewallet.io/updates/", false, false, true, false],
		["Green Address", "https://greenaddress.it/en/", true, true, true, false],
		common.jaxx,
		common.keepkey,
		common.ledger,
		["MyCelium", "https://wallet.mycelium.com/", false, false, true, false],
		common.trezor,
		["Xapo", "https://www.xapo.com/", true, false, false, false]
	],
	BTM: erc,
	BTS: [
		["BitShares Wallet", "https://bitshares.org/wallet/", true, false, false, false],
		["OpenLedger", "https://bitshares.openledger.info/", true, false, false, false],
		["SmartWallet", "https://play.google.com/store/apps/details?id=de.bitsharesmunich.smartcoinswallet", false, false, true, false]
	],
	CFI: erc,
	CVC: erc,
	DASH: [
		common.coinbase,
		["DASH Core", "https://www.dash.org/wallets/", false, true, false, false],
		["DASH Wallet", "https://play.google.com/store/apps/details?id=hashengineering.darkcoin.wallet", false, false, true, false],
		common.exodus,
		common.jaxx,
		common.keepkey,
		common.ledger,
		common.trezor
	],
	DICE: erc,
	DCR: [
		["dcrwallet", "https://github.com/decred/dcrwallet", false, true, false, false],
		["Decred Web Wallet", "https://wallet.decred.org/", true, false, false, false]
	],
	DCT: [
		["Decent", "https://decent.ch/en/download/", false, true, false, false]
	],
	DGB: [
		["DigiByte Wallet", "https://digibyte.co/digibyte-wallets", false, true, true, false]
	],
	DGD: erc,
	DNT: erc,
	DOGE: [
		common.coinomi,
		["Dogecoini Core", "http://dogecoin.com/", false, true, false, false],
		["DoughWallet", "https://www.doughwallet.net/", false, false, true, false],
		common.jaxx,
		["MultiDoge", "http://multidoge.org/", false, true, false, false],
		common.ledger
	],
	EB3: [
		["EB3 Wallet", "http://www.eb3coin.com/", false, false, true, false]
	],
	EDG: erc,
	EMC: [
		["Emercoin Wallet", "https://emercoin.com/#download", false, true, false, false]
	],
	EOS: erc,
	ETH: [
		common.coinbase,
		common.coinomi,
		common.exodus,
		common.jaxx,
		common.keepkey,
		common.ledger,
		["MetaMask", "https://metamask.io/", false, true, false, false],
		["Mist", "https://github.com/ethereum/mist/releases", false, true, false, false],
		["MyEtherWallet", "https://www.myetherwallet.com/", true, false, false, false],
		["Parity", "https://github.com/paritytech/parity/releases", false, true, false, false],
		common.trezor,
		["XETH", "http://www.xeth.org/", false, true, false, false]
	],
	ETC: [
		["ClassicEtherWallet CX", "https://chrome.google.com/webstore/detail/classicetherwallet-cx/opggclcfcbfbchcienjdaohghcamjfhf", false, true, false, false],
		common.coinomi,
		["Ethereum Classic Wallet", "https://github.com/ethereumproject/mist/releases", false, true, false, false],
		common.jaxx,
		common.ledger,
		common.trezor
	],
	ETP: [
		["Metaverse ETP Wallet", "https://mvs.org/#download", false, true, false, false]
	],
	FCT: [
		["Factom Wallet", "https://docs.factom.com/", false, true, false, false]
	],
	FUN: erc,
	GAME: [
		["GameCredits Android Wallet", "https://play.google.com/store/apps/details?id=wallet.gamecredits", false, false, true, false],
		["GameCredits Web Wallet", "https://wallet.gamecredits.com/", true, false, false, false]
	],
	GAS: [
		["CoZ Neon Wallet", "https://github.com/CityOfZion/neon-wallet/releases", false, true, false, false]
	],
	GBYTE: [
		["Byteball Wallet", "https://byteball.org/#download", false, true, true, false]
	],
	GNO: erc,
	GNT: erc,
	HMQ: erc,
	ICN: erc,
	ICO: erc,
	IOC: [
		["I/O Coin Wallet", "https://www.iocoin.io/", false, true, false, false]
	],
	ION: [
		["ION Wallet", "https://ionomy.com/download", false, true, false, false]
	],
	KMD: [
		["Komodo Wallet", "https://github.com/ca333/komodoGUI/releases", false, true, false, false],
		["Ledger", "https://www.ledgerwallet.com/products", false, false, false, true]
	],
	LBC: [
		common.coinomi,
		["lbrycrd", "https://github.com/lbryio/lbrycrd/releases", false, true, false, false]
	],
	LEO: [
		["LEOCoin Wallet", "http://www.leocoin.org/", false, true, false, false]
	],
	LKK: [
		["Lykke Wallet", "https://www.lykke.com/", false, false, true, false]
	],
	LSK: [
		["Lisk Nano", "https://lisk.io/download", false, true, false, false],
		["Lisk Web Wallets", "https://lisktools.io/pNodes.php", true, false, false, false]
	],
	LTC: [
		common.coinbase,
		common.coinomi,
		["Electrum-LTC", "https://electrum-ltc.org/", false, true, false, false],
		common.exodus,
		common.jaxx,
		common.keepkey,
		common.ledger,
		["Litecoin Core", "https://litecoin.org/", false, true, false, false],
		["LiteVault", "https://www.litevault.net/", true, false, false, false],
		common.trezor
	],
	LUN: erc,
	MAID: [
		common.omnicore,
		common.omniwallet
	],
	MCAP: erc,
	MCO: erc,
	MGO: erc,
	MIOTA: [
		["IOTA GUI Wallet", "https://github.com/iotaledger/wallet/releases", false, true, false, false],
		["IOTA Web Wallet", "https://iota-wallet.org/", true, false, false, false],
		["IOTA Wallet (BETA)", "https://play.google.com/store/apps/details?id=org.iota.wallet", false, false, true, false],
		["IOTAmobile", "https://iota.tools/wallet", false, false, true, false]
	],
	MLN: erc,
	MTL: erc,
	MYST: erc,
	NEO: [
		["CoZ Neon Wallet", "https://github.com/CityOfZion/neon-wallet/releases", false, true, false, false],
		["NEO Desktop Client", "https://github.com/neo-project/neo-gui/releases/", false, true, false, false],
		["NEO Web Wallet", "https://neowallet.cn/", true, false, false, false],
		["NEO Web Wallet by OnChain dev", "http://neowallet.net/", true, false, false, false]
	],
	NLC2: [
		["NoLimitCoin Wallet", "https://www.nolimitcoin.org/", true, true, false, false]
	],
	NLG: [
		common.coinomi,
		["Gulden Wallet", "https://gulden.com/download", false, true, true, false]
	],
	NMC: [
		common.coinomi,
		["Namecoin Core Wallet", "https://namecoin.org/download/", false, true, false, false]
	],
	NMR: erc,
	NXS: [
		["LLD Wallet", "http://www.nexusearth.com/#", false, true, false, false],
		["Oracle Wallet", "http://www.nexusearth.com/#", false, true, false, false]
	],
	NXT: [
		["MyNXT", "https://wallet.mynxt.info/", true, false, false, false],
		["NXT Wallet", "https://nxt.org/download/", false, true, false, false]
	],
	OMG: erc,
	PART: [
		["Particl Core", "https://github.com/particl/particl-core/releases/", false, true, false, false]
	],
	PAY: erc,
	PIVX: [
		common.coinomi,
		["PIVX Mobile Wallet", "https://play.google.com/store/apps/details?id=pivx.tech.furszy", false, false, true, false],
		["PIVX Wallet", "https://pivx.org/get-pivx/wallet/", false, true, false, false]
	],
	PLR: erc,
	PPC: [
		common.coinomi,
		["Peercoin Wallet", "https://peercoin.net/wallet", false, true, true, false]
	],
	PPT: erc,
	PPY: [
		["Peerplay Core", "https://github.com/PBSA/peerplays-core-gui/releases", false, true, false, false]
	],
	QTUM: null,
	RDD: [
		common.coinomi,
		["ReddCoin Core", "https://www.reddcoin.com/", false, true, false, false]
	],
	REP: erc,
	RLC: erc,
	ROUND: erc,
	SAFEX: [
		["Safe Exchange Wallet", "https://safex.io/", false, true, false, false],
	],
	SC: [
		["Siacoin Wallet", "http://sia.tech/apps/", false, true, false, false],
	],
	SNGLS: erc,
	SNT: erc,
	STEEM: [
		["Steemit wallet", "https://steemit.com", true, false, false, false]
	],
	STORJ: erc,
	STRAT: [
		["Electrum-Stratis", "https://github.com/stratisproject/electrum-stratis/releases/", false, true, false, false],
		["Ledger", "https://www.ledgerwallet.com/products", false, false, false, true],
		["stratisX", "https://github.com/stratisproject/stratisX/releases/", false, true, false, false]
	],
	STX: erc,
	SYS: [
		common.coinomi,
		["Syscoin Wallet", "https://github.com/syscoin/syscoin/releases", false, true, false, false]
	],
	TAAS: erc,
	TKN: erc,
	UBQ: [
		["Pyrus", "https://pyrus.ubiqsmart.com/", true, false, false, false]
	],
	USDT: [
		common.omnicore,
		common.omniwallet
	],
	VERI: erc,
	VSL: erc,
	WAVES: [
		["WavesLiteApp", "https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm", false, true, false, false],
		["Waves Lite Client", "https://github.com/wavesplatform/WavesGUI/releases", false, true, false, false],
		["Waves Wallet (Android)", "https://play.google.com/store/apps/details?id=com.wavesplatform.wallet", false, false, true, false],
		["Waves Wallet (iOS)", "https://itunes.apple.com/us/app/waves-wallet/id1233158971?mt=8", false, false, true, false]
	],
	WINGS: erc,
	XAS: [
		["Asch Lite Client", "https://www.asch.so/", false, true, false, false]
	],
	XCP: [
		["Counterwallet", "https://counterwallet.io/", true, false, false, false],
		["Freewallet", "https://freewallet.io/updates/", false, false, true, false],
		["Indiesquare", "https://wallet.indiesquare.me/", false, false, true, false]
	],
	XEM: [
		["Nano Wallet", "https://www.nem.io/install.html", false, true, false, false],
		["NEM Wallet", "https://www.nem.io/install.html", false, false, true, false]
	],
	XEL: [
		["Elastic Explorer Wallet", "https://wallet.elasticexplorer.org/index.html", true, false, false,false],
		["Elastic Wallet", "https://wallet.elastic.pw/index.html", true, false, false, false],
	],
	XLM: [
		["Centaurus", "https://github.com/TbLtzk/Centaurus", false, false, true, false],
		["Ecliptic", "https://www.ecliptic.co/", true, false, false, false],
		["go-StellarWallet", "https://github.com/jojopoper/go-StellarWallet", false, true, false, false],
		["LedgerCN", "http://ledgercn.com/", true, false, false, false],
		["Saza", "https://saza.io/", true, false, false, false],
		["Stargazer", "https://getstargazer.com/", false, true, true, false],
		["Starwallet", "https://github.com/Proxiweb/starwallet", false, false, true, false],
		["Stellar Desktop Client", "https://github.com/stellarchat/desktop-client/releases", false, true, false, false],
		["Stellar Portal", "https://portal.willet.io/", true, false, false, false]
	],
	XMR: [
		["MyMonero", "https://mymonero.com/", true, false, false, false],
		["Official Monero Wallet", "https://getmonero.org/downloads/", false, true, false, false]
	],
	XRL: erc,
	XRP: [
		common.ledger,
		["Rippex", "https://rippex.net/carteira-ripple.php", false, true, false, false]
	],
	XVG: [
		common.coinomi,
		["Verge Electrum Wallet", "http://vergecurrency.com/#wallets", false, true, false, false],
		["Verge Wallet", "http://vergecurrency.com/#wallets", true, true, true, false]
	],
	XZC: [
		common.coinomi,
		["Zcoin Wallet", "https://zcoin.io/get-zcoin/", false, true, false, false]
	],
	ZEC: [
		common.coinomi,
		common.jaxx,
		common.ledger,
		common.trezor,
		["Zcash Wallet", "https://github.com/vaklinov/zcash-swing-wallet-ui", false, true, false, false]
	],
	ZRX: erc
}

wallets["1ST"] = erc;