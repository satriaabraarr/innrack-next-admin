export interface RefreshTokenResponse {
  refreshToken: {
    verifyMeResponse: {
      accessToken: string;
      refreshToken: string;
    };
  };
};