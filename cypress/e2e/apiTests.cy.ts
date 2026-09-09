import { ApiTest } from "../pages/api.js";
import example from "../fixtures/example.json"
describe('API Validation', () => {
    it('should validate user data', () => {
      const apiTest = new ApiTest()
      apiTest.validateUser()
    });
  });