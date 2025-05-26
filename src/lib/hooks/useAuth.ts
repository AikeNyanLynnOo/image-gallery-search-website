import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokenRequest } from "@/lib/features/auth/authSlice";
import { getUserProfileRequest } from "@/lib/features/user/userSlice";

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN || "";
const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN || "";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const { isTokenRefreshSuccess } = useSelector((state: any) => state.auth);
  const { profile, _id, email, isVerified, createdAt, updatedAt } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    const checkAuth = () => {
      const accessToken = getCookie(ACCESS_TOKEN);
      const refreshToken = getCookie(REFRESH_TOKEN);

      if (accessToken) {
        setIsAuthenticated(true);
        // Fetch user profile if we have an access token
        if (!profile) {
          dispatch(getUserProfileRequest(null));
        }
      } else if (refreshToken) {
        // If we have a refresh token but no access token, try to refresh
        dispatch(refreshTokenRequest({ refreshToken }));
      } else {
        setIsAuthenticated(false);
      }
    };

    // Check auth status on mount
    checkAuth();

    // Set up an interval to check auth status periodically
    const interval = setInterval(checkAuth, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [dispatch, profile]);

  // Update authentication status when token refresh succeeds
  useEffect(() => {
    if (isTokenRefreshSuccess) {
      setIsAuthenticated(true);
      // Fetch user profile after successful token refresh
      dispatch(getUserProfileRequest(null));
    }
  }, [isTokenRefreshSuccess, dispatch]);

  return {
    isAuthenticated,
    user: {
      profile,
      _id,
      email,
      isVerified,
      createdAt,
      updatedAt,
    },
  };
};
