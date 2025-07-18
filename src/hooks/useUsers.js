// src/hooks/useUsers.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { toast } from 'react-hot-toast';

export const useUsers = () => {
  const queryClient = useQueryClient();

  // Fetch all users
  const { data: users, isLoading: isFetchingUsers } = useQuery({
    queryKey: ['users'],
    queryFn: () => apiClient.get('/users').then(res => res.data),
  });

  // Fetch single user
  const { data: user, isLoading: isFetchingUser } = useQuery({
    queryKey: ['users', 'detail'],
    queryFn: (id) => apiClient.get(`/users/${id}`).then(res => res.data),
    enabled: false, // Disabled by default, need to call refetch manually
  });

  // Update user mutation
  const updateUserMutation = useMutation({
    mutationFn: ({ id, ...userData }) => apiClient.put(`/users/${id}`, userData),
    onSuccess: () => {
      toast.success('User updated successfully');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update user');
    },
  });

  // Delete user mutation
  const deleteUserMutation = useMutation({
    mutationFn: (id) => apiClient.delete(`/users/${id}`),
    onSuccess: () => {
      toast.success('User deleted successfully');
      queryClient.invalidateQueries(['users']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete user');
    },
  });

  return {
    users,
    isFetchingUsers,
    user,
    isFetchingUser,
    updateUser: updateUserMutation.mutateAsync,
    isUpdatingUser: updateUserMutation.isLoading,
    deleteUser: deleteUserMutation.mutateAsync,
    isDeletingUser: deleteUserMutation.isLoading,
  };
};