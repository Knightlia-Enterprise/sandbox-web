import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Sandbox - Particle Chat");
});
