import { mockPosts } from "./mockData.js";

import { toTitleCase, getUserNameByID, userIDs } from "./app.js";
import { assert, describe, expect, test } from "vitest";

//start tests:
describe("JSON Placeholder posts", () => {
  test("should return a positive result that is an array", () => {
    assert.isArray(mockPosts, "mockPosts should be an array");
  });
});

//Individual object testing:
const bodyObject = {
  userId: expect.any(Number),
  id: expect.any(Number),
  title: expect.any(String),
  body: expect.any(String),
};

test("Each item in the array should be an object.", () => {
  mockPosts.forEach((item) => {
    expect(typeof item).toBe("object");
    expect(item).not.toBeNull();
  });
});

// Write a test which checks that "Each item in the array should be an object, but with a for loop":
describe("UserID Array Validation", () => {
  test("Each item in the Array should be an object, through a for loop.", () => {
    for (let i = 0; i < userIDs.length; i++) {
      expect(typeof userIDs[i]).toBe("object");
      expect(userIDs[i]).not.toBeNull();
    }
  });
});

// Test the function toTitleCase:
// This is one for you to finish and fix:
describe("toTitleCase", () => {
  test("any string put through the toTitleCase function should return a Titled Case String.", () => {
    //test A: for lowercase strings to return titlecase strings
    const result = toTitleCase("hello world");
    const expected = "Hello World";
    expect(result).toBe(expected);
  });
});

// Next, make a 'toTitleCase' test work with a single title, from a post, from the mockData
describe("Post Title Formatting", () => {
  test("a post title, put through the toTitleCase function, should return a Titled Case String.", () => {
    const result = toTitleCase("this is an array");
    const expected = "This Is An Array";
    expect(result).toBe(expected);
  });
});

// The following tests are going to fail. Part of your assignment is to figure out why (it's partly because your project lead gets paid way too much, and spends their time at the pub, and not coding correctly....):

describe("User Data Validation", () => {
  test("individual item should not be an array", () => {
    const result = getUserNameByID(1);
    assert.typeOf(result, "string");
    expect(Array.isArray(result)).toBe(false);
  });
});

// Perhaps some of these tests should be in a different suite??
describe("UserID array validation", () => {
  test("checks that each userID, in each item, should be a number", () => {
    for (let i = 0; i < userIDs.length; i++) {
      expect(typeof userIDs[i].userID).toBe("number");
    }
  });
});

describe("getUserNameByID", () => {
  test("returns the correct username matched from the userID in an array", () => {
    const userID = 1;
    const expected = "Frankie";
    const result = getUserNameByID(userID);
    expect(result).toBe(expected);
  });
});

describe("getUserNameByID Function", () => {
  test("returns the correct username for a given userID", () => {
    expect(getUserNameByID(1)).toBe("Frankie");
    expect(getUserNameByID(5)).toBe("Sam");
    expect(getUserNameByID(10)).toBe("Embo");
  });

  test("returns undefined for a non-existent userID", () => {
    expect(getUserNameByID(27)).toBeUndefined(); // No userID 27
    expect(getUserNameByID(-1)).toBeUndefined(); // No user with negative ID
    expect(getUserNameByID(null)).toBeUndefined(); // Null test
    expect(getUserNameByID("5")).toBeUndefined(); // String instead of number
  });
});

describe("testing for first and last user", () => {
  test("return accurate first and last userNames from array", () => {
    const FirstUserID = 1;
    const expectedFirstUserName = "Frankie";
    const LastUserID = 10;
    const expectedLastUserName = "Embo";

    const resultFirstUser = getUserNameByID(FirstUserID);
    const resultLastUser = getUserNameByID(LastUserID);

    expect(resultFirstUser).toBe(expectedFirstUserName);
    expect(resultLastUser).toBe(expectedLastUserName);
  });
});

describe("testing performance with a large array of userIDs", () => {
  test("handles large arrays", () => {
    const largeUserIDs = Array.from({ length: 50000 }, (_, i) => ({
      userID: i + 1,
      userName: `User${i + 1}`,
    }));
    const getUserNameByIDLarge = (userID) => {
      const match = largeUserIDs.find((user) => user.userID === userID);
      return match ? match.userName : undefined;
    };
    const result = getUserNameByIDLarge(20000);
    const expected = "User20000";

    expect(result).toBe(expected);
  });
});
