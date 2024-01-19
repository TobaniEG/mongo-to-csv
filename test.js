import test from "node:test";
import assert from "node:assert";
import { UserService } from "./src/user.js";

const mockData = [
  { name: "Name A", email: "namea@me.com" },
  { name: "Name B", email: "nameb@me.com" },
];

test("Mock and Test", async (t) => {
  test.before(() => {
    UserService.findAll = async () => {
      return mockData;
    };
  });

  await t.test("should return all users", async () => {
    const users = await UserService.findAll();
    assert.deepStrictEqual(users, mockData);
  });

  await t.test("make csv", async () => {
    const users = await UserService.findAll();
    const csv = UserService.toCSV(users);
    assert.ok(
      csv.includes("Name,Email\nName A,namea@me.com\nName B,nameb@me.com"),
      true,
    );
  });
});
