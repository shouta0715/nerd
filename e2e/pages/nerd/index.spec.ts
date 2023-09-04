import { expect, test } from "@playwright/test";

test("タイトルが表示される", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle(/Nerd/);
});

test("お知らせをクリックするとお知らせページに遷移する", async ({ page }) => {
  await page.goto("/");

  const link = page.getByRole("link", { name: /お知らせ/ });

  await link.click();

  await expect(page).toHaveTitle(/お知らせ/);
});
