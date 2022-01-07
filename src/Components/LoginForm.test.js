import axios from "axios";

describe("Login test", () => {
  it("valid login", async () => {
    const data = await axios.post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "pistol",
    });
    expect(data.data.token).toBeTruthy();
  });

  it("invalid login", async () => {
    let data = null
    try {
      const request = await axios.post("https://reqres.in/api/login", {
        email: "ve.holt@reqres.in",
        password: "pistol",
      });
      data = request
    } catch (ex) {
        expect(data).toBe(null)
    }
  });
});
