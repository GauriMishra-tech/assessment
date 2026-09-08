import { ApiTest } from "../pages/api.js";

describe('API Validation', () => {
    it('should validate user data', () => {
      const apiTest = new ApiTest()
      apiTest.validateUser()
    });
  });