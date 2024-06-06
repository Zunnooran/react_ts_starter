import { useEffect } from 'react';

import { useMutation } from '@tanstack/react-query';

import { ISignInForm } from '../_models';
import { getUserByToken, login } from '../_requests';
import { useAuth } from '../auth-context';

const useSignIn = () => {
  const { saveAuth, setCurrentUser } = useAuth();

  const { mutate, isError, error, isSuccess, isPending, data } = useMutation({
    mutationFn: (body: ISignInForm) => login(body),
  });

  const { mutate: mutateVerifyToken, isPending: isLoadingVerifyToken } = useMutation({
    mutationFn: (token: string) => getUserByToken(token),
  });

  useEffect(() => {
    if (isSuccess && data) {
      mutateVerifyToken(data?.data?.api_token, {
        onSuccess: (res) => {
          // ✅ Save token to storage
          saveAuth({
            api_token: data?.data?.api_token,
          });
          setCurrentUser(res?.data);
        },
      });
    }
  }, [data, isSuccess, mutateVerifyToken, saveAuth, setCurrentUser]);

  return { mutate, isError, error, isPending, isLoadingVerifyToken };
};

export default useSignIn;
