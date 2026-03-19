# Free Market Data Widgets — Crypto, Forex & Stock Widgets for Any Website

Free, embeddable, real-time market data widgets for websites and blogs. Display live cryptocurrency prices, forex rates, stock tickers, market screeners, heatmaps, and currency converters — no API key needed.

Built by **[Vunelix](https://vunelix.com)** — a free financial data platform for developers, traders, and content creators.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## Why Use These Widgets?

- **Free** — No subscription, no API key, no sign-up required to get started
- **Real-time** — Live prices via WebSocket, not delayed or cached data
- **17 Widgets** — Tickers, screeners, heatmaps, market movers, currency tools
- **Auto Theme** — Detects light/dark mode and adapts automatically
- **Fully Customizable** — Colors, languages, columns, animations, and more
- **Shadow DOM** — Isolated from your page CSS, zero style conflicts
- **Responsive** — Desktop, tablet, and mobile ready
- **Lightweight** — Each widget JS is 30-80 KB gzipped, loads async
- **No Dependencies** — Pure web components, works with React, Vue, Angular, or static HTML
- **Multi-language** — 20+ languages supported out of the box

---

## Installation

### Download

```bash
# Clone the repo
git clone https://github.com/vunelix/free-market-data-widgets.git

# Or download via npx (no install needed)
npx degit vunelix/free-market-data-widgets my-widgets

# Or download ZIP
curl -L https://github.com/vunelix/free-market-data-widgets/archive/refs/heads/main.zip -o widgets.zip
```

### Embed in Your Website

Widgets are loaded via a single `<script>` tag — no npm install, no build step, no bundler config.

```html
<!-- Add the widget tag -->
<vunelix-ticker-tape></vunelix-ticker-tape>

<!-- Load the widget script -->
<script src="https://vunelix.com/assets/bundles/js/widgets/ticker/vunelix-ticker-tape.js" type="module"></script>
```

That's it. The script registers the web component and renders the widget automatically.

> Scripts are served from `vunelix.com` CDN. Updates are backwards-compatible — existing `data-*` attributes will continue to work.

---

## All Widgets

### Ticker Widgets

![Ticker Tape Widget](assets/images/ticker-tape.png)

Scrolling and static real-time price tickers for crypto, forex, and stocks.

| Widget | Live Demo | Documentation |
|--------|-----------|---------------|
| **Ticker Tape** — Scrolling real-time ticker | [Demo](ticker/ticker-tape.html) | [vunelix.com/widgets/ticker-tape](https://vunelix.com/widgets/ticker-tape) |
| **Ticker** — Static grid ticker | [Demo](ticker/ticker.html) | [vunelix.com/widgets/ticker](https://vunelix.com/widgets/ticker) |

**Embed a scrolling ticker:**
```html
<vunelix-ticker-tape
    data-symbols="BINANCE:BTCUSDT,NASDAQ:AAPL,FX:EURUSD"
    data-speed="35"
    data-animation-mode="digits">
</vunelix-ticker-tape>
<script src="https://vunelix.com/assets/bundles/js/widgets/ticker/vunelix-ticker-tape.js" type="module"></script>
```

---

### Market Movers Widgets

![Market Movers Widget](assets/images/market-movers.png)

Top gainers and losers across crypto, forex, and stock markets — updated in real-time.

| Widget | Live Demo | Documentation |
|--------|-----------|---------------|
| **Crypto Market Movers** — Top crypto gainers & losers | [Demo](market-movers/crypto-market-movers.html) | [vunelix.com/widgets/crypto-market-movers](https://vunelix.com/widgets/crypto-market-movers) |
| **Forex Market Movers** — Top forex pair movers | [Demo](market-movers/forex-market-movers.html) | [vunelix.com/widgets/forex-market-movers](https://vunelix.com/widgets/forex-market-movers) |
| **Stock Market Movers** — Top stock gainers & losers | [Demo](market-movers/stock-market-movers.html) | [vunelix.com/widgets/stock-market-movers](https://vunelix.com/widgets/stock-market-movers) |

**Embed crypto market movers:**
```html
<vunelix-crypto-market-movers
    data-sort-by="active.chp_desc"
    data-per-page="12"
    data-change-badge="true">
</vunelix-crypto-market-movers>
<script src="https://vunelix.com/assets/bundles/js/widgets/market-movers/vunelix-crypto-market-movers.js" type="module"></script>
```

---

### Currency Widgets

![Currency Converter Widget](assets/images/currency-converter.png)

Currency converter and cross rates table with live exchange rates.

| Widget | Live Demo | Documentation |
|--------|-----------|---------------|
| **Currency Converter** — Convert between 150+ currencies | [Demo](currency/currency-converter.html) | [vunelix.com/widgets/currency-converter](https://vunelix.com/widgets/currency-converter) |
| **Currency Cross Rates** — Live cross rates table | [Demo](currency/currency-cross-rates.html) | [vunelix.com/widgets/currency-cross-rates](https://vunelix.com/widgets/currency-cross-rates) |

**Embed a currency converter:**
```html
<vunelix-currency-converter
    data-from="USD"
    data-to="EUR"
    data-show-chart="true">
</vunelix-currency-converter>
<script src="https://vunelix.com/assets/bundles/js/widgets/vunelix-currency-converter.js" type="module"></script>
```

---

### Heatmap Widgets

![Crypto Heatmap Widget](assets/images/crypto-heatmap.png)

Visual heatmaps showing market performance at a glance — crypto, stocks, and currencies.

| Widget | Live Demo | Documentation |
|--------|-----------|---------------|
| **Crypto Heatmap** — Crypto market cap & price heatmap | [Demo](heatmap/crypto-heatmap.html) | [vunelix.com/widgets/crypto-heatmap](https://vunelix.com/widgets/crypto-heatmap) |
| **Stock Heatmap** — Stock market heatmap by sector | [Demo](heatmap/stock-heatmap.html) | [vunelix.com/widgets/stock-heatmap](https://vunelix.com/widgets/stock-heatmap) |
| **Currency Heatmap** — Forex pair performance heatmap | [Demo](heatmap/currency-heatmap.html) | [vunelix.com/widgets/currency-heatmap](https://vunelix.com/widgets/currency-heatmap) |

**Embed a crypto heatmap:**
```html
<vunelix-crypto-heatmap
    data-default-per-page="100"
    data-default-color-mode="gradient"
    data-default-border-radius="true"
    data-enable-zoom-controls="true">
</vunelix-crypto-heatmap>
<script src="https://vunelix.com/assets/bundles/js/widgets/heatmap/vunelix-crypto-heatmap.js" type="module"></script>
```

---

### Screener Widgets

![Stock Screener Widget](assets/images/stock-screener.png)

Advanced data tables with sorting, filtering, custom tabs, watchlists, and technical analysis.

| Widget | Live Demo | Documentation |
|--------|-----------|---------------|
| **Crypto Screener** — Coins, tokens, DeFi with 100+ metrics | [Demo](screener/crypto-screener.html) | [vunelix.com/widgets/crypto-screener](https://vunelix.com/widgets/crypto-screener) |
| **Stock Screener** — Stocks with fundamentals, earnings & dividends | [Demo](screener/stock-screener.html) | [vunelix.com/widgets/stock-screener](https://vunelix.com/widgets/stock-screener) |
| **Forex Screener** — Forex pairs with bid/ask, spread & technicals | [Demo](screener/forex-screener.html) | [vunelix.com/widgets/forex-screener](https://vunelix.com/widgets/forex-screener) |
| **Fund Screener** — ETFs & mutual funds with dividends & cash flow | [Demo](screener/fund-screener.html) | [vunelix.com/widgets/fund-screener](https://vunelix.com/widgets/fund-screener) |
| **CEX Screener** — Centralized exchange pairs with volume data | [Demo](screener/cex-screener.html) | [vunelix.com/widgets/cex-screener](https://vunelix.com/widgets/cex-screener) |
| **DEX Screener** — Decentralized exchange tokens with liquidity | [Demo](screener/dex-screener.html) | [vunelix.com/widgets/dex-screener](https://vunelix.com/widgets/dex-screener) |
| **DR Screener** — Depositary receipts with valuation & income data | [Demo](screener/dr-screener.html) | [vunelix.com/widgets/dr-screener](https://vunelix.com/widgets/dr-screener) |

**Embed a stock screener with custom tabs:**
```html
<vunelix-stock-screener
    data-default-country="US"
    data-per-page="50"
    data-custom-presets='{"Price":["price","change","change-percent","volume"],"Fundamentals":["market-cap-stock","pe-ratio","eps-ttm","dividend-yield-current"]}'
    data-animation-mode="digits">
</vunelix-stock-screener>
<script src="https://vunelix.com/assets/bundles/js/widgets/screener/vunelix-stock-screener.js" type="module"></script>
```

---

## Quick Start

**Step 1** — Add the widget HTML tag to your page:

```html
<vunelix-ticker-tape></vunelix-ticker-tape>
<script src="https://vunelix.com/assets/bundles/js/widgets/ticker/vunelix-ticker-tape.js" type="module"></script>
```

**Step 2** — Customize with `data-*` attributes:

```html
<vunelix-ticker-tape
    data-symbols="BINANCE:BTCUSDT,BINANCE:ETHUSD,NASDAQ:TSLA"
    data-speed="35"
    data-ui-template="ticker-block"
    data-animation-mode="digits"
    data-lang="en">
</vunelix-ticker-tape>
```

**Step 3** — Done. No API key, no sign-up, no build step.

Visit **[vunelix.com/widgets](https://vunelix.com/widgets)** for the full interactive configurator where you can customize settings and copy the embed code.

---

## Symbol Format

Symbols use the `EXCHANGE:SYMBOL` format. Here are the supported exchanges and examples:

| Exchange | Prefix | Example | Description |
|----------|--------|---------|-------------|
| Binance | `BINANCE` | `BINANCE:BTCUSDT` | Crypto spot pairs |
| Binance Futures | `BINANCE` | `BINANCE:BTCUSDT.P` | Crypto perpetual futures |
| Coinbase | `COINBASE` | `COINBASE:BTCUSD` | Crypto spot pairs |
| NASDAQ | `NASDAQ` | `NASDAQ:AAPL` | US stocks |
| NYSE | `NYSE` | `NYSE:JPM` | US stocks |
| LSE | `LSE` | `LSE:HSBA` | UK stocks |
| Forex | `FX` | `FX:EURUSD` | Currency pairs |
| ONA | `ONA` | `ONA:AEDUSD` | Exotic forex pairs |

You can mix exchanges in a single widget:
```html
data-symbols="BINANCE:BTCUSDT,NASDAQ:TSLA,FX:EURUSD,NYSE:JPM"
```

For the full list of supported symbols, use the search on **[vunelix.com](https://vunelix.com)**.

---

## Customization Reference

### Theme

Widgets auto-detect your page's color scheme. Override manually:

```html
data-theme="auto"    <!-- System preference (default) -->
data-theme="light"   <!-- Force light theme -->
data-theme="dark"    <!-- Force dark theme -->
```

### Custom Colors

All colors accept a `light,dark` pair — first value for light theme, second for dark:

```html
data-positive-color="#059669,#34d399"
data-negative-color="#dc2626,#fb7185"
data-bg-color="#ffffff,#0a0a0a"
data-bg-secondary-color="#f8fafc,#141414"
data-text-color="#0f172a,#f1f1f1"
data-text-secondary-color="#475569,#aaaaaa"
data-border-color="#e2e8f0,#282828"
```

### Live Data Animation

Control how real-time price updates animate:

```html
data-animation-mode="digits"     <!-- Animate only changed digits -->
data-animation-mode="full"       <!-- Animate full price value -->
data-animation-mode="flash"      <!-- Background color flash -->
data-animation-mode="none"       <!-- No animation -->
data-animation-duration="1500"   <!-- Animation duration in ms -->
```

### Custom Tabs (Screener Widgets)

Build your own column presets with any combination of 200+ available metrics:

```html
data-custom-presets='{"My Tab":["price","change-percent","volume","market-cap"],"Technicals":["price","rsi","macd","signal-summary"]}'
```

### Custom Currency Groups (Cross Rates & Heatmap)

Create your own currency group tabs:

```html
data-presets='{"Gulf":"AED,SAR,QAR,KWD,BHD","South Asian":"INR,PKR,BDT,LKR","BRICS":"CNY,INR,BRL,ZAR,RUB"}'
```

### Pre-applied Filters (Screener Widgets)

Load the screener with filters already applied:

```html
data-default-filters='{"earnings.market_cap_gt":"10000000000","active.chp_gt":"1"}'
```

### Language

Set the widget language (20+ supported):

```html
data-lang="en"    <!-- English (default) -->
data-lang="ar"    <!-- Arabic (RTL supported) -->
data-lang="zh"    <!-- Chinese -->
data-lang="es"    <!-- Spanish -->
data-lang="fr"    <!-- French -->
data-lang="de"    <!-- German -->
data-lang="ja"    <!-- Japanese -->
data-lang="ko"    <!-- Korean -->
data-lang="tr"    <!-- Turkish -->
data-lang="ru"    <!-- Russian -->
data-lang="pt"    <!-- Portuguese -->
data-lang="it"    <!-- Italian -->
data-lang="hi"    <!-- Hindi -->
data-lang="ur"    <!-- Urdu (RTL supported) -->
data-lang="fa"    <!-- Persian (RTL supported) -->
```

---

## Supported Markets & Data

| Market | Assets | Data |
|--------|--------|------|
| **Crypto** | 10,000+ coins & tokens | Price, volume, market cap, DeFi, on-chain metrics |
| **Forex** | 150+ currency pairs | Bid, ask, spread, cross rates, historical charts |
| **Stocks** | 50,000+ stocks worldwide | Price, earnings, dividends, balance sheet, income |
| **ETFs & Funds** | 10,000+ funds | NAV, performance, dividends, cash flow |
| **DEX** | 5,000+ decentralized pairs | Liquidity, transactions, buy/sell volume |
| **CEX** | Major exchange pairs | Real-time volume, order book data |
| **Depositary Receipts** | ADRs & GDRs | Valuation, fundamentals, income statements |

---

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 67+ | Fully supported |
| Firefox | 63+ | Fully supported |
| Safari | 13.1+ | Fully supported |
| Edge | 79+ | Fully supported |
| Opera | 64+ | Fully supported |
| Chrome Android | 67+ | Fully supported |
| Safari iOS | 13.4+ | Fully supported |

Widgets use Web Components (Custom Elements v1 + Shadow DOM v1), which are supported in all modern browsers. No polyfills needed.

---

## Use Cases

- **Finance blogs** — Add live price tickers and market data to your articles
- **Crypto news sites** — Embed screeners and heatmaps for your readers
- **Trading communities** — Show real-time market movers and top gainers/losers
- **Portfolio trackers** — Build custom watchlists with color-coded groups
- **Forex broker sites** — Display live cross rates and currency converters
- **Educational platforms** — Teach market analysis with interactive widgets
- **SaaS dashboards** — Embed market data into your product UI
- **WordPress sites** — Paste the embed code in any HTML block
- **Shopify stores** — Add crypto payment tickers to your store
- **Mobile apps (WebView)** — Works inside any WebView container

---

## Project Structure

```
free-market-data-widgets/
├── README.md
├── assets/
│   ├── css/
│   │   └── demo.css
│   ├── js/
│   │   └── demo.js
│   └── images/
│       ├── ticker-tape.png
│       ├── market-movers.png
│       ├── currency-converter.png
│       ├── crypto-heatmap.png
│       └── stock-screener.png
├── ticker/
│   ├── ticker-tape.html
│   └── ticker.html
├── market-movers/
│   ├── crypto-market-movers.html
│   ├── forex-market-movers.html
│   └── stock-market-movers.html
├── currency/
│   ├── currency-converter.html
│   └── currency-cross-rates.html
├── heatmap/
│   ├── crypto-heatmap.html
│   ├── stock-heatmap.html
│   └── currency-heatmap.html
└── screener/
    ├── crypto-screener.html
    ├── stock-screener.html
    ├── forex-screener.html
    ├── fund-screener.html
    ├── cex-screener.html
    ├── dex-screener.html
    └── dr-screener.html
```

---

## Links

- **Website** — [vunelix.com](https://vunelix.com)
- **Widget Configurator** — [vunelix.com/widgets](https://vunelix.com/widgets)
- **Crypto Screener** — [vunelix.com/screener/crypto](https://vunelix.com/screener/crypto)
- **Stock Screener** — [vunelix.com/screener/stock](https://vunelix.com/screener/stock)
- **Forex Screener** — [vunelix.com/screener/forex](https://vunelix.com/screener/forex)
- **Crypto Heatmap** — [vunelix.com/heatmap/crypto](https://vunelix.com/heatmap/crypto)
- **Stock Heatmap** — [vunelix.com/heatmap/stock](https://vunelix.com/heatmap/stock)
- **Currency Heatmap** — [vunelix.com/heatmap/currency](https://vunelix.com/heatmap/currency)
- **Currency Converter** — [vunelix.com/currency-converter](https://vunelix.com/currency-converter)
- **Currency Cross Rates** — [vunelix.com/cross-rates](https://vunelix.com/cross-rates)

---

## Contributing

Found a bug? Have a feature request? Want to improve the demo pages?

- **[Open an issue](../../issues)** — Report bugs or suggest features
- **[Pull requests](../../pulls)** — Contributions welcome for demo improvements, new examples, and documentation fixes

---

## License

MIT — free to use in personal and commercial projects.

---

Built with data from **[Vunelix](https://vunelix.com)** — Free crypto, forex & stock market data for developers.
