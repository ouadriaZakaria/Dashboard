// src/hooks/useAuth.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Check current authenticated user
  const { data: user, isLoading: isCheckingAuth } = useQuery({
    queryKey: ['auth', 'me'],
    queryFn: async () => {
      try {
        const response = await apiClient.get('/auth/me');
        return response.data;
      } catch (error) {
        localStorage.removeItem('token');
        return null;
      }
    },
    retry: false,
  });

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: (credentials) => apiClient.post('/auth/login', credentials),
    onSuccess: (data) => {
      localStorage.setItem('token', data.data.token);
      queryClient.setQueryData(['auth', 'me'], data.data.user);
      toast.success('Logged in successfully');
      navigate('/dashboard');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed');
    },
  });

  // Register mutation
  const registerMutation = useMutation({
    mutationFn: (userData) => apiClient.post('/auth/register', userData),
    onSuccess: () => {
      toast.success('Registration successful! Please login.');
      navigate('/login');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Registration failed');
    },
  });

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    queryClient.setQueryData(['auth', 'me'], null);
    queryClient.clear();
    toast.success('Logged out successfully');
    navigate('/login');
  };

  return {
    user,
    isCheckingAuth,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isLoading,
    register: registerMutation.mutateAsync,
    isRegistering: registerMutation.isLoading,
    logout,
  };
};