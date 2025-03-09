export function toTitleCase(str) {
  if (typeof str !== "string") return "";
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// An array of usernames paired with their IDs
export const userIDs = [
  {
    userID: 1,
    userName: "Frankie",
  },
  {
    userID: 2,
    userName: "Bertie",
  },
  {
    userID: 3,
    userName: "Tim",
  },
  {
    userID: 4,
    userName: "Jez",
  },
  {
    userID: 5,
    userName: "Sam",
  },
  {
    userID: 6,
    userName: "Angelica",
  },
  {
    userID: 7,
    userName: "Manny",
  },
  {
    userID: 8,
    userName: "Joe",
  },
  {
    userID: 9,
    userName: "Akshat",
  },
  {
    userID: 10,
    userName: "Embo",
  },
];

// Get a user's name by their ID from an array
export function getUserNameByID(userID) {
  let match = userIDs.find((user) => user.userID === userID);
  return match ? match.userName : undefined;
}
