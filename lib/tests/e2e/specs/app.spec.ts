import App from "../pageobjects/app.page";

describe("upload-js sandbox", () => {
  it("should contain an upload button", async () => {
    await App.open();
    await expect(App.uploadButton).toHaveText("Upload");
  });
});
