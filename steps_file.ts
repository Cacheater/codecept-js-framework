import assert from 'node:assert';
import { actor } from 'codeceptjs';

export default function () {
  return actor({
    assertEqual(actual: unknown, expected: unknown) {
      assert.strictEqual(actual, expected);
    }
  });
}