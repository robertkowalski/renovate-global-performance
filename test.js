const assert = require("assert");
require("renovate/dist/workers/repository");

console.log("still set", performance.markResourceTiming);

const { test, before } = require("node:test");

before(async () => {
  console.log(
    "in test hooks it disappears, remove require of renovate to fix",
    performance.markResourceTiming
  );

  assert.ok(
    performance.markResourceTiming,
    "performance.markResourceTiming is set"
  );
});

test("test", async () => {});
