'use client';

import { saveTokenStorage } from '@/services/auth/auth.helper';
import authService from '@/services/auth/auth.service';
import userService from '@/services/user.service';
import { transformUserToState } from '@/utils/transform-user-to-state';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export function useProfile() {
  const { data, isLoading, isError, isSuccess: isProfileQuerySuccess } = useQuery({
    queryKey: ['profile'],
    queryFn: () => userService.fetchProfile(),
    retry: 1,
    refetchInterval: 1800000
  });

  const { isSuccess, data: dataTokens } = useQuery({
    queryKey: ['new tokens'],
    queryFn: () => authService.getNewTokens(),
    retry: 1,
    enabled: !!data?.data,
  });

  useEffect(() => {
    if (isSuccess && dataTokens?.data?.accessToken) {
      saveTokenStorage(dataTokens.data.accessToken);
    }
  }, [isSuccess, dataTokens]);

  const profile = data?.data;

  const userState = profile ? transformUserToState(profile) : null;

  return {
    isLoading,
    user: {
      ...profile,
      ...userState
    },
    isProfileQuerySuccess,
    isError
  };
}
