import type { TestRunnerConfig } from "@storybook/test-runner";
import { injectAxe, checkA11y } from "axe-playwright";
import { getStoryContext } from "@storybook/test-runner";

const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is rendered.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preRender(page, context) {
    // Add your configuration here.
    if (context.name.startsWith("SP")) {
      await page.setViewportSize({ width: 375, height: 667 });
    } else {
      await page.setViewportSize({ width: 1024, height: 768 });
    }

    await injectAxe(page);
  },
  /* Hook to execute after a story is rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postRender(page, context) {
    // Add your configuration here.
    const storyContext = await getStoryContext(page, context);

    await checkA11y(page, "#root", {
      includedImpacts: ["critical"],
      detailedReport: false,
      detailedReportOptions: {
        html: true,
      },
      axeOptions: storyContext.parameters?.a11y?.options,
    });
  },
};

module.exports = config;
