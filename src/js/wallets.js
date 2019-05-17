// wallet format
// name, site, is_online, is_desktop, is_mobile, is_hardware

var common = {
	bitcoin: ["Bitcoin.com Wallet", "https://www.bitcoin.com/choose-your-wallet/bitcoin-com-wallet", true, true, true, false],
	bither: ["Bither Wallet", "https://bither.net", false, true, true, false],
	bitpie: ["BitPie", "http://bitpie.com", false, false, true, false],
	blockchain: ["Blockchain.info Wallet", "https://blockchain.info/wallet/#/", true, false, false, false],
	breadwallet: ["breadwallet", "https://breadwallet.com/", false, false, true, false],
	coinbase: ["Coinbase", "https://coinbase.com", true, false, false, false],
	coinomi: ["Coinomi", "https://coinomi.com/", false, false, true, false],
	edge: ["Edge", "https://edgesecure.co/", false, false, true, false],
	exodus: ["Exodus", "https://www.exodus.io/", false, true, false, false],
	jaxx: ["Jaxx", "https://jaxx.io/", false, true, true, false],
	ledger: ["Ledger", "https://www.ledgerwallet.com/products", false, false, false, true],
	mobi: ["Mobi", "https://www.mobi.me/", true, false, true, false],
	trezor: ["Trezor", "https://trezor.io/", false, false, false, true],
	wetez: ["Wetez", "http://www.wetez.io/", false, false, true, false]
}

var erc = [
	common.ledger,
	["MetaMask", "https://metamask.io/", false, true, false, false],
	["MyEtherWallet", "https://www.myetherwallet.com/", true, false, false, false],
	["Parity", "https://github.com/paritytech/parity/releases", false, true, false, false],
	common.trezor
]

var neo = [
	["Neon Wallet", "https://github.com/CityOfZion/neon-wallet/releases", false, true, false, false],
	["NEO Desktop Client", "https://github.com/neo-project/neo-gui/releases/", false, true, false, false],
	["NEO Web Wallet", "https://neowallet.cn/", true, false, false, false]
]

var nxt = [
	["MyNXT", "https://wallet.mynxt.info/", true, false, false, false],
	["NXT Wallet", "https://nxt.org/download/", false, true, false, false]
]

var omni = [
	["OmniCore", "http://www.omnilayer.org/download.html", false, true, false, false],
	["OmniWallet", "https://www.omniwallet.org/", true, false, false, false]
]

var qtum = [
	["Qtum-Qt", "https://github.com/qtumproject/qtum/releases/", false, true, false, false]
]

var trc = [
	["TRX Wallet (iOS)", "https://github.com/NewHorizonLabs/TRX-Wallet", false, false, true, false],
	["Tron Wallet (Android)", "https://play.google.com/store/apps/details?id=com.eletac.tronwallet", false, false, true, false],
	["TronPay", "https://chrome.google.com/webstore/detail/tronpay/gjdneabihbmcpobmfhcnljaojmgoihfk", false, true, false, false],
	["TronLink", "https://www.tronlink.org/#/", false, true, true, false]
]

var xcp = [
	["Counterwallet", "https://wallet.counterwallet.io/", true, false, false, false],
	["IndieSquare", "https://wallet.indiesquare.me/", false, false, true, false]
]

var wallets = {
	ABBC: [
		["ABBC Multi-Crypto Wallet (Android)", "https://play.google.com/store/apps/details?id=jld.reactivespace.com.abbcmcwallet", false, false, true, false],
	],
	ACT: [
		["Achain Wallet", "https://www.achain.com/", false, true, false, false],
		["Kcash", "https://kcash.com/", false, false, true, false]
	],
	ADA: [
		["Daedalus Wallet", "https://daedaluswallet.io/", false, true, false, false],
		common.trezor
	],
	ADK: [
		["Aidos Wallet", "https://github.com/AidosKuneen/aidos-wallet/releases", false, true, false, false]
	],
	ADT: erc,
	ADX: erc,
	AE: erc,
	AGI: erc,
	AGRS: omni,
	AION: erc,
	AMP: omni,
	ANT: erc,
	AOA: erc,
	ARDR: nxt,
	ARK: [
		["Ark Wallet", "https://github.com/ArkEcosystem/ark-desktop/releases", false, true, false, false]
	],
	AST: erc,
	ATB: [
		["ATBCoin Wallet", "https://atbcoin.com/download-en/", false, true, false, false]
	],
	ATM: [
		erc
	],
	ATOM: [
		["Lunie", "https://lunie.io/", true, false, false, false],
		common.wetez,
		common.ledger
	],
	B3: [
		["B3 Wallet", "http://b3coin.net/#features", false, true, false, false]
	],
	BAT: erc,
	BAY: [
		["BitBay Client", "http://bitbay.market/getstarted/", false, true, false, false],
		["BitBay Lite Wallet", "http://bitbay.market/getstarted/", false, true, false, false]
	],
	BCC: [
		["Bitconnect Wallet", "https://bitconnectcoin.co/download", false, true, false, false],
		["Bitconnect Web Wallet", "http://www.bitconnect.co/", true, false, false, false]
	],
	BCD: [
		common.bitpie
	],
	BCH: [
		common.bitcoin,
		common.blockchain,
		common.breadwallet,
		common.coinomi,
		common.edge,
		["Electron Cash", "http://www.electroncash.org/", false, true, false, false],
		common.exodus,
		common.ledger,
		common.mobi,
		common.trezor
	],
	BCN: [
		["Bytecoin Wallet", "https://bytecoin.org/downloads/", false, true, false, false]
	],
	BCZERO: erc,
	BDL: [
		["Bitdeal", "https://bitdeal.co.in/", false, true, true, false]
	],
	BFT: erc,
	BIX: erc,
	BLOCK: [
		["Blocknet", "http://blocknet.co/#downloads", false, true, false, false]
	],
	BNB: erc,
	BNT: erc,
	BOS: [
		["BOSCoin Wallet", "https://wallet.boscoin.io/", true, false, false, false],
		["BOSCoin Tokennet Wallet", "https://play.google.com/store/apps/details?id=io.boscoin.toknenet.wallet", false, false, true, false]
	],
	BQ: erc,
	BQX: erc,
	BSV: [
		["Bitcoin SV Wallet", "https://github.com/bitcoin-sv/bitcoin-sv/releases", false, true, false, false]
	],
	BTC: [
		["Armory", "https://www.bitcoinarmory.com/", false, true, false, false],
		common.bitcoin,
		["BitcoinCore", "https://bitcoin.org/en/download", false, true, false, false],
		["BitGo", "https://www.bitgo.com/", true, false, false, false],
		common.bither,
		common.bitpie,
		common.blockchain,
		common.breadwallet,
		common.coinbase,
		common.coinomi,
		["Copay", "https://copay.io/", true, true, true, false],
		["Eclair Wallet", "https://play.google.com/store/apps/details?id=fr.acinq.eclair.wallet.mainnet2", false, true, false, false],
		common.edge,
		["Electrum", "https://electrum.org", false, true, false, false],
		common.exodus,
		["Green Address", "https://greenaddress.it/en/", true, true, true, false],
		common.jaxx,
		common.ledger,
		common.mobi,
		["MyCelium", "https://wallet.mycelium.com/", false, false, true, false],
		["Samourai Wallet", "https://samouraiwallet.com/", false, false, true, false],
		common.trezor,
		["Xapo", "https://www.xapo.com/", true, false, false, false]
	],
	BTCD: [],  // https://archive.fo/FMv0K Project looks dead?
	BTCP: [
		common.coinomi
	],
	BTG: [
		common.bitpie,
		["BTGWallet", "https://btgwallet.online/", true, false, false, false],
		common.coinomi,
		common.ledger,
		common.trezor,
	],
	BTM: erc,
	BTS: [
		["BitShares Wallet", "https://bitshares.org/wallet/", true, false, false, false],
		["OpenLedger", "https://bitshares.openledger.info/", true, false, false, false],
		["SmartWallet", "https://play.google.com/store/apps/details?id=de.bitsharesmunich.smartcoinswallet", false, false, true, false]
	],
	BTT: trc,
	BTX: [
		["BitCore Wallet", "https://github.com/LIMXTEC/BitCore/releases", false, true, false, false],
		common.coinomi
	],
	BURST: [
		["BURST Wallet", "https://wallet1.burstnation.com:8125/index.html", true, false, false, false],
		["Burst-Team Wallet", "https://wallet1.burst-team.us:2083/index.html", true, false, false, false],
		["Consortium Online Wallet", "https://wallet.burst.cryptoguru.org:8125/index.html", true, false, false, false],
		["BURST Core Wallet", "https://github.com/PoC-Consortium/burstcoin/releases", false, true, false, false],
		["Consortium Android Wallet", "https://play.google.com/store/apps/details?id=org.icewave.burstcoinwallet", false, false, true, false],
		["BurstNation Android Wallet", "https://play.google.com/store/apps/details?id=com.official.bnwallet", false, false, true, false]
	],
	CCCX: erc,
	CDT: erc,
	CENNZ: erc,
	CFI: erc,
	CLAM: [
		common.coinomi
	],
	CLOAK: [
		["Cloak Wallet", "https://play.google.com/store/apps/details?id=com.cloakcoin.wallet&hl=en", true, false, false, false]
		["CloakCoin Wallet", "https://www.cloakcoin.com/en/downloads.html", false, true, false, false],
	],
	CMT: erc,
	CND: erc,
	CNX: [
		["Cryptonex Wallet", "https://cryptonex.org/#5", false, true, false, false]
	],
	COB: erc,
	CRO: erc,
	CTR: erc,
	CTXC: erc,
	CVC: erc,
	DAI: erc,
	DASH: [
		common.coinbase,
		["DASH Core", "https://www.dash.org/wallets/", false, true, false, false],
		["DASH Wallet", "https://play.google.com/store/apps/details?id=hashengineering.darkcoin.wallet", false, false, true, false],
		common.exodus,
		common.jaxx,
		common.ledger,
		common.trezor
	],
	DATA: erc,
	DCN: erc,
	DCR: [
		["dcrwallet", "https://github.com/decred/dcrwallet", false, true, false, false],
		["Decred Web Wallet", "https://wallet.decred.org/", true, false, false, false],
		["Decrediton", "https://github.com/decred/decrediton/releases", false, true, false, false],
		common.exodus,
		common.trezor
	],
	DCT: [
		["Decent", "https://decent.ch/en/download/", false, true, false, false]
	],
	DDD: erc,
	DENT: erc,
	DEX: erc,
	DGB: [
		["DigiByte Wallet", "https://digibyte.co/digibyte-wallets", false, true, true, false]
	],
	DGD: erc,
	DGTX: erc,
	DICE: erc,
	DLT: erc,
	DNT: erc,
	DOGE: [
		common.coinomi,
		["Dogecoini Core", "http://dogecoin.com/", false, true, false, false],
		["DoughWallet", "https://www.doughwallet.net/", false, false, true, false],
		common.jaxx,
		["MultiDoge", "http://multidoge.org/", false, true, false, false],
		common.ledger
	],
	DRGN: erc,
	DROP: erc,
	EB3: [
		["EB3 Wallet", "http://www.eb3coin.com/", false, false, true, false]
	],
	EDG: erc,
	ELA: [
		["Elastos Wallet", "https://wallet.elastos.org/", true, false, false, false]
	],
	ELF: erc,
	EMC: [
		["Emercoin Wallet", "https://emercoin.com/#download", false, true, false, false]
	],
	EMC2: [
		common.coinomi,
		["Einsteinium Wallet", "https://www.emc2.foundation/wallets", false, true, false, false]
	],
	ENG: erc,
	ENJ: erc,
	EOS: erc,
	ETC: [
		["ClassicEtherWallet CX", "https://chrome.google.com/webstore/detail/classicetherwallet-cx/opggclcfcbfbchcienjdaohghcamjfhf", false, true, false, false],
		common.coinomi,
		["Ethereum Classic Wallet", "https://github.com/ethereumproject/mist/releases", false, true, false, false],
		common.jaxx,
		common.ledger,
		common.trezor
	],
	ETH: [
		common.coinbase,
		common.coinomi,
		common.edge,
		common.exodus,
		common.jaxx,
		common.ledger,
		["Mist", "https://github.com/ethereum/mist/releases", false, true, false, false],
		common.mobi,
		["MyEtherWallet", "https://www.myetherwallet.com/", true, false, false, false],
		["Parity", "https://github.com/paritytech/parity/releases", false, true, false, false],
		common.trezor,
		["XETH", "http://www.xeth.org/", false, true, false, false]
	],
	ETHOS: erc,
	ETN: [
		["Electroneum Wallet", "https://downloads.electroneum.com/", true, false, false, false]
	],
	ETP: [
		["Metaverse ETP Wallet", "https://mvs.org/#download", false, true, false, false]
	],
	EURS: erc,
	FAIR: [
		["FairCoin Wallet", "https://download.faircoin.world/", false, true, true, false]
	],
	FCT: [
		["Factom Wallet", "https://docs.factom.com/", false, true, false, false]
	],
	FRST: [
		["Firstcoin Wallet", "http://firstcoinproject.com/", false, true, true, false]
	],
	FSN: erc,
	FTC: [
		["Feathercoin Wallet", "https://www.feathercoin.com/", false, true, true, false]
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
	GNX: erc,
	GRS: [
		["Groestlcoin Core", "https://www.groestlcoin.org/downloads/", false, true, false, false],
		["Groestlpay", "https://groestlpay.groestlcoin.org/", true, false, false, false],
		["Groestlcoin Wallet", "https://www.groestlcoin.org/downloads/", false, false, true, false],
		common.trezor
	],
	GTO: erc,
	GUSD: erc,
	GVT: erc,
	GXC: [
		["GXB Wallet", "https://www.gxb.io/#downLoad", false, true, false, false]
	],
	HC: [
		["hcGUI", "https://github.com/HcashOrg/hcGUI/releases", false, true, false, false]
	],
	HMQ: erc,
	HOT: erc,
	HSR: [
		["Hcash Wallet", "https://h.cash/", false, true, false, false]
	],
	HT: [
		["Huobi Pro", "https://www.huobi.pro/", true, false, false, false]
	],
	ICN: erc,
	ICX: erc,
	ICO: erc,
	IGNIS: nxt,
	INB: erc,
	IOC: [
		["I/O Coin Wallet", "https://www.iocoin.io/", false, true, false, false]
	],
	ION: [
		["ION Wallet", "https://ionomy.com/download", false, true, false, false]
	],
	IOST: erc,
	JINN: nxt,
	KCS: erc,
	KICK: erc,
	KIN: erc,
	KMD: [
		["Komodo Wallet", "https://github.com/ca333/komodoGUI/releases", false, true, false, false],
		common.ledger
	],
	KNC: erc,
	LA: erc,
	LBC: [
		common.coinomi,
		["lbrycrd", "https://github.com/lbryio/lbrycrd/releases", false, true, false, false]
	],
	LEO: [
		["LEOCoin Wallet", "http://www.leocoin.org/", false, true, false, false]
	],
	LINK: erc,
	LKK: [
		["Lykke Wallet", "https://www.lykke.com/", false, false, true, false]
	],
	LKY: erc,
	LOOM: erc,
	LRC: erc,
	LSK: [
		["Lisk Nano", "https://lisk.io/download", false, true, false, false],
		["Lisk Web Wallets", "https://lisktools.io/pNodes.php", true, false, false, false]
	],
	LTC: [
		common.coinbase,
		common.coinomi,
		common.edge,
		["Electrum-LTC", "https://electrum-ltc.org/", false, true, false, false],
		common.exodus,
		common.jaxx,
		common.ledger,
		["Litecoin Core", "https://litecoin.org/", false, true, false, false],
		["LiteVault", "https://www.litevault.net/", true, false, false, false],
		["LoafWallet", "https://loafwallet.org/", false, false, true, false],
		common.mobi,
		common.trezor
	],
	LUN: erc,
	MAID: omni,
	MANA: erc,
	MCAP: erc,
	MCO: erc,
	MDA: erc,
	MED: qtum,
	MGO: erc,
	MIOTA: [
		["IOTA GUI Wallet", "https://github.com/iotaledger/wallet/releases", false, true, false, false],
		["IOTA Web Wallet", "https://iota-wallet.org/", true, false, false, false],
		["IOTA Wallet (BETA)", "https://play.google.com/store/apps/details?id=org.iota.wallet", false, false, true, false],
		["IOTAmobile", "https://iota.tools/wallet", false, false, true, false]
	],
	MITH: erc,
	MKR: erc,
	MLN: erc,
	MNX: [
		["MinexWallet", "https://minexcoin.com/", false, true, false, false],
	],
	MOAC: [
		["Pangu Mainnet Client", "https://github.com/MOACChain/moac-core/releases", false, true, false, false]
	],
	MONA: [
		["Monacoin Wallet", "https://monacoin.org/#download", false, true, false, false]
	],
	MTC: erc,
	MTH: erc,
	MTL: erc,
	MXM: erc,
	MYST: erc,
	NANO: [
		["Rai Wallet", "https://github.com/clemahieu/raiblocks/releases", false, true, false, false]
	],
	NAS: erc,
	NAV: [
		["NAV Wallet", "https://navcoin.org/downloads/", false, true, true, false]
	],
	NCASH: erc,
	NEBL: [
		["Neblio Wallet", "https://nebl.io/wallets/", false, true, true, false]
	],
	NEO: neo,
	NEXO: erc,
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
	NPXS: erc,
	NULS: erc,
	NXS: [
		["LLD Wallet", "http://www.nexusearth.com/#", false, true, false, false],
		["Oracle Wallet", "http://www.nexusearth.com/#", false, true, false, false]
	],
	NXT: nxt,
	OAX: erc,
	ODE: erc,
	OK: [
		["OKCash Wallet", "http://okcash.co/#download", false, true, false, false]
	],
	OMG: erc,
	ONT: neo,
	OTN: erc,
	PAC: [
		["Paccoin", "https://github.com/PaccoinCommunity/Paccoin/releases", false, true, false, false]
	],
	PAI: [
		["paiup", "https://www.paiup.com/", false, false, true, false]
	],
	PART: [
		["Particl Core", "https://github.com/particl/particl-core/releases/", false, true, false, false]
	],
	PAX: erc,
	PAY: erc,
	PIVX: [
		common.coinomi,
		common.ledger,
		["PIVX Mobile Wallet", "https://play.google.com/store/apps/details?id=pivx.tech.furszy", false, false, true, false],
		["PIVX Wallet", "https://pivx.org/get-pivx/wallet/", false, true, false, false]
	],
	PLR: erc,
	POE: erc,
	POLY: erc,
	POT: [
		["PotCoin Wallet", "http://www.potcoin.com/wallets", false, true, false, false],
		["PotWallet", "https://potwallet.com/", true, false, false, false]
	],
	POWR: erc,
	PPC: [
		common.coinomi,
		["Peercoin Wallet", "https://peercoin.net/wallet", false, true, true, false]
	],
	PPP: erc,
	PPT: erc,
	PPY: [
		["Peerplay Core", "https://github.com/PBSA/peerplays-core-gui/releases", false, true, false, false]
	],
	PTOY: erc,
	PURA: [
		["Pura Core", "https://github.com/PURAcore/PURA/releases", false, true, false, false]
	],
	QASH: erc,
	QBIT: erc,
	QKC: erc,
	QNT: erc,
	QRL: erc,
	QSP: erc,
	QTUM: qtum,
	R: erc,
	RBY: [
		common.coinomi,
		["Rubycoin Wallet", "https://www.rubycoin.org/download", false, true, false, false]
	],
	RCN: erc,
	RDD: [
		common.coinomi,
		["ReddCoin Core", "https://www.reddcoin.com/", false, true, false, false]
	],
	RDN: erc,
	REC: [
		["Regalcoin", "https://wallet.regalcoin.info/", false, true, false, false]
	],
	REP: erc,
	REPO: [
		["REPO Wallet", "https://www.repocoin.io/repowallettutorial/index", true, false, false, false]
	],
	REQ: erc,
	RHOC: erc,
	RISE: [
		["RISE Wallet", "https://rise.vision/", true, true, false, false]
	],
	RLC: erc,
	ROUND: erc,
	RVN: [
		["Ravencoin Wallet", "https://ravencoin.org/developers-repository/", false, true, false, false]
	],
	S4F: erc,
	SAFEX: [
		["Safe Exchange Wallet", "https://safex.io/", false, true, false, false],
	],
	SALT: erc,
	SAN: erc,
	SC: [
		["Siacoin Wallet", "http://sia.tech/apps/", false, true, false, false],
	],
	SKY: [
		["Skycoin Wallet", "https://www.skycoin.net/downloads/", false, true, false, false]
	],
	SMART: [
		["SmartCash Qt", "https://smartcash.cc/", false, true, false, false],
		["SmartCash Web Wallet", "https://wallet.smartcash.cc", true, false, false, false]
	],
	SNGLS: erc,
	SNM: erc,
	SNT: erc,
	SOC: erc,
	SPRTS: [
		["Sprouts Wallet", "https://sproutscommunity.wordpress.com/", false, true, false, false]
	],
	SRN: erc,
	STEEM: [
		["Steemit wallet", "https://steemit.com", true, false, false, false]
	],
	STORJ: erc,
	STORM: erc,
	STRAT: [
		["Electrum-Stratis", "https://github.com/stratisproject/electrum-stratis/releases/", false, true, false, false],
		common.ledger,
		["stratisX", "https://github.com/stratisproject/stratisX/releases/", false, true, false, false]
	],
	STX: erc,
	SUB: erc,
	SYS: [
		common.coinomi,
		["Syscoin Wallet", "https://github.com/syscoin/syscoin/releases", false, true, false, false]
	],
	TAAS: erc,
	THETA: erc,
	THR: erc,
	TKN: erc,
	TNB: erc,
	TNT: erc,
	TRIG: xcp,
	TRUE: [
		["True Wallet", "https://dapp.truedapp.net/appdown/", false, false, true, false]
	],
	TRX: [
		common.exodus,
		common.ledger,
		["TRX Wallet (iOS)", "https://github.com/NewHorizonLabs/TRX-Wallet", false, false, true, false],
		["TronLink", "https://www.tronlink.org/#/", false, true, true, false],
		["TronPay", "https://chrome.google.com/webstore/detail/tronpay/gjdneabihbmcpobmfhcnljaojmgoihfk", false, true, false, false]
	],
	TTC: erc,
	TTU: erc,
	TUSD: erc,
	UBQ: [
		common.ledger,
		["Pyrus", "https://pyrus.ubiqsmart.com/", true, false, false, false]
	],
	UCASH: erc,
	USDC: erc,
	USDT: omni,
	VEE: erc,
	VEN: erc,
	VERI: erc,
	VEST: erc,
	VET: erc,      // was an ERC20 Token, migrating to their own blockchain?
	VIA: [
		common.ledger,
		["Viacoin Wallet", "https://viacoin.org/#download", false, true, false, false]
	],
	VSL: erc,
	VTC: [
		common.coinomi,
		["Electrum-VTC", "https://github.com/vertcoin/electrum-vtc/releases/", false, true, false, false],
		common.ledger,
		["Vertcoin Wallet", "https://vertcoin.org/", true, true, false, false]
	],
	WAN: [
		["Wan Wallet", "https://wanchain.org/product", false, true, false, false]
	],
	WAVES: [
		["WavesLiteApp", "https://chrome.google.com/webstore/detail/wavesliteapp/kfmcaklajknfekomaflnhkjjkcjabogm", false, true, false, false],
		["Waves Lite Client", "https://github.com/wavesplatform/WavesGUI/releases", false, true, false, false],
		["Waves Wallet (Android)", "https://play.google.com/store/apps/details?id=com.wavesplatform.wallet", false, false, true, false],
		["Waves Wallet (iOS)", "https://itunes.apple.com/us/app/waves-wallet/id1233158971?mt=8", false, false, true, false]
	],
	WAX: erc,
	WICC: erc,
	WINGS: erc,
	WTC: erc,
	XAS: [
		["Asch Lite Client", "https://www.asch.so/", false, true, false, false]
	],
	XBY: [
		["XtraBYtes Wallet", "https://www.xtrabytes.global/#wallet", false, true, false, false]
	],
	XCP: xcp,
	XDN: [
		["DigitalNote Wallet", "http://digitalnote.org/#download", false, true, false, false]
	],
	XEM: [
		["Nano Wallet", "https://www.nem.io/install.html", false, true, false, false],
		["NEM Wallet", "https://www.nem.io/install.html", false, false, true, false]
	],
	XEL: [
		["Elastic Explorer Wallet", "https://wallet.elasticexplorer.org/index.html", true, false, false,false],
		["Elastic Wallet", "https://wallet.elastic.pw/index.html", true, false, false, false],
	],
	XET: erc,
	XIN: erc,
	XLM: [
		["Centaurus", "https://github.com/TbLtzk/Centaurus", false, false, true, false],
		["Ecliptic", "https://www.ecliptic.co/", true, false, false, false],
		["go-StellarWallet", "https://github.com/jojopoper/go-StellarWallet", false, true, false, false],
		["LedgerCN", "http://ledgercn.com/", true, false, false, false],
		["Saza", "https://saza.io/", true, false, false, false],
		["Stargazer", "https://getstargazer.com/", false, true, true, false],
		["Starwallet", "https://github.com/Proxiweb/starwallet", false, false, true, false],
		["Stellar Desktop Client", "https://github.com/stellarchat/desktop-client/releases", false, true, false, false],
		["Stellar Portal", "https://portal.willet.io/", true, false, false, false],
		common.trezor
	],
	XMR: [
		["Cake Wallet (iOS)", "https://cakewallet.io/", false, false, true, false],
		common.coinomi,
		common.exodus,
		["Monerujo (Android)", "https://github.com/m2049r/xmrwallet/releases", false, false, true, false],
		["MyMonero", "https://mymonero.com/", true, false, false, false],
		["Official Monero Wallet", "https://getmonero.org/downloads/", false, true, false, false],
		common.trezor,
		common.ledger,
		["X Wallet", "https://itunes.apple.com/us/app/x-wallet-monero-wallet/id1335168711", false, false, true, false]
	],
	XP: [
		["XP Web Wallet", "https://webwallet.xpcoin.io/", true, false, false, false],
		["XP Wallet", "https://www.xpcoin.io/downloads/", false, true, true, false]
	],
	XPA: erc,
	XRL: erc,
	XRP: [
		common.ledger,
		["Rippex", "https://rippex.net/carteira-ripple.php", false, true, false, false],
		common.trezor
	],
	XTZ: [
		["Galleon", "https://github.com/Cryptonomic/Deployments/wiki/Galleon:-Releases", false, true, false, false],
		common.ledger,
		common.trezor,
		common.wetez
	],
	XUC: erc,
	XVG: [
		common.coinomi,
		["Verge Electrum Wallet", "http://vergecurrency.com/#wallets", false, true, false, false],
		["Verge Wallet", "http://vergecurrency.com/#wallets", true, true, true, false]
	],
	XZC: [
		common.coinomi,
		["Zcoin Wallet", "https://zcoin.io/get-zcoin/", false, true, false, false]
	],
	ZCL: [
		["ZClassic Wallet", "http://zclassic.org/#getstarted", false, true, false, false]
	],
	ZEC: [
		common.coinomi,
		common.jaxx,
		common.ledger,
		common.trezor,
		["Zcash Wallet", "https://github.com/vaklinov/zcash-swing-wallet-ui", false, true, false, false]
	],
	ZEN: [
		["ZenCash Swing Wallet", "https://github.com/ZencashOfficial/zencash-swing-wallet-ui/releases", false, true, false, false],
		common.trezor
	],
	ZIL: erc,
	ZRX: erc,
	ZSC: erc
}

wallets["1ST"] = erc;
