# Dotcom Screen Testing

A Playwright-based visual regression testing suite for BrightHR's website.

## Overview

This project contains automated visual tests that capture screenshots of key pages and compare them against baseline images to detect visual regressions.

## Features

- **Visual Regression Testing**: Automated screenshot comparison across multiple browsers
- **Multi-Browser Support**: Tests run on Chromium, Firefox, WebKit, and mobile browsers
- **GitHub Actions Integration**: Automated test execution on code changes
- **Full Page Screenshots**: Captures complete page layouts including content below the fold

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/brighthr/dotcom-screen-testing.git
cd dotcom-screen-testing
```

2. Install dependencies:

```bash
npm install
```

3. Install Playwright browsers:

```bash
npx playwright install
```

## Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (see browser)

```bash
npx playwright test --headed
```

### Run specific test

```bash
npx playwright test homepage.spec.ts
```

### Run tests with a specific tag

```bash
npx playwright test --grep "@homepage"
```

### Update screenshots (when visual changes are intended)

```bash
npx playwright test --update-snapshots
```

## Test Reports

After running tests, you can view the HTML report:

```bash
npx playwright show-report
```

## Project Structure

```
├── tests/
│   ├── homepage.spec.ts              # Homepage visual tests
│   └── homepage.spec.ts-snapshots/   # Baseline screenshots
├── tests-examples/
│   └── demo-todo-app.spec.ts         # Example test file
├── playwright.config.ts              # Playwright configuration
├── .github/
│   └── workflows/
│       └── playwright.yml            # GitHub Actions workflow
└── package.json                      # Project dependencies
```

## Configuration

The Playwright configuration is in `playwright.config.ts`. Key settings include:

- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari
- **Base URL**: Can be configured via environment variables
- **Screenshot settings**: Full page captures with threshold settings
- **Parallel execution**: Tests run in parallel for faster execution

## Environment Variables

Create a `.env` file in the root directory for environment-specific configurations:

```env
# Add any environment variables here
BASE_URL=https://www.brighthr.com
```

## GitHub Actions

Tests automatically run on:

- Push to main branch
- Pull requests to main branch

The workflow includes:

- Multi-browser test execution
- Screenshot artifact upload on failures
- Test report generation

## Writing Tests

### Basic Visual Test

```typescript
import { test, expect } from "@playwright/test";

test("page visual test", async ({ page }) => {
  await page.goto("https://www.brighthr.com/page");
  await expect(page).toHaveScreenshot("page-name.png", { fullPage: true });
});
```

### Test with User Interactions

```typescript
test("interactive visual test", async ({ page }) => {
  await page.goto("https://www.brighthr.com/");
  await page.getByRole("button", { name: "Accept all" }).click();
  await expect(page).toHaveScreenshot("after-interaction.png", {
    fullPage: true,
  });
});
```

## Troubleshooting

### Screenshot Differences

If tests fail due to screenshot differences:

1. Review the diff images in the test report
2. If changes are expected, update snapshots with `--update-snapshots`
3. If unexpected, investigate the visual regression

### Browser Installation Issues

```bash
# Reinstall browsers
npx playwright install --force
```

### Flaky Tests

- Check for animations or dynamic content
- Add appropriate wait conditions
- Consider using `waitForLoadState('networkidle')`

## Contributing

1. Create a new branch for your changes
2. Add or modify tests as needed
3. Run tests locally to ensure they pass
4. Create a pull request

## Tags

Tests are organized with tags for easier filtering:

- `@homepage` - Homepage related tests
- Add more tags as needed for different page types

## Support

For questions or issues, please create an issue in this repository or contact the development team.
