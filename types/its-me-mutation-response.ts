export interface  ItsMeMutationResponse {
  itsMe: {
    verifyMeResponse: {
      accessToken: string;
      refreshToken: string;
    };
  };
};