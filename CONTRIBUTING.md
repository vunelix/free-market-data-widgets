# Contributing to Free Market Data Widgets

Thanks for your interest in contributing! This project provides free embeddable financial widgets powered by [Vunelix](https://vunelix.com).

## How to Contribute

### Reporting Bugs

- Open an [issue](https://github.com/vunelix/free-market-data-widgets/issues) with a clear title
- Include the widget name (e.g., Crypto Screener, Ticker Tape)
- Describe the expected vs actual behavior
- Include your browser name and version
- Add a screenshot if possible

### Suggesting Features

- Open an [issue](https://github.com/vunelix/free-market-data-widgets/issues) with the `feature request` label
- Describe the use case and why it would be useful
- Include examples or mockups if you have them

### Improving Demo Pages

Demo pages are the HTML files in each widget folder. You can improve them by:

1. Fork the repository
2. Create a new branch: `git checkout -b improve-demo`
3. Make your changes to the HTML files
4. Test locally by opening the HTML files in a browser
5. Submit a pull request

### Adding New Examples

Want to add a new widget variation or a new combination of settings?

1. Find the widget folder (e.g., `ticker/`, `screener/`)
2. Add a new `<div class="widget-section">` block with your configuration
3. Use different `data-*` attributes to showcase a unique setup
4. Include custom colors to make it visually distinct
5. Submit a pull request

### Documentation Fixes

Found a typo, broken link, or unclear explanation?

- Edit the `README.md` directly and submit a PR
- Or open an issue pointing out the problem

## Guidelines

- Keep demo pages simple — no external dependencies
- Use the shared `assets/css/demo.css` and `assets/js/demo.js` for consistency
- Test in both light and dark themes before submitting
- All widget scripts should load from `https://vunelix.com/assets/bundles/js/widgets/`

## Code of Conduct

Be respectful and constructive. We're here to build useful tools for the community.

## Questions?

- Open an [issue](https://github.com/vunelix/free-market-data-widgets/issues)
- Visit [vunelix.com](https://vunelix.com)
