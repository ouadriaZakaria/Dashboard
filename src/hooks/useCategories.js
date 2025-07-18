// src/hooks/useCategories.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { toast } from 'react-hot-toast';

export const useCategories = () => {
  const queryClient = useQueryClient();

  // Fetch all categories
  const { data: categories, isLoading: isFetchingCategories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => apiClient.get('/categories').then(res => res.data),
  });

  // Fetch single category
  const { data: category, isLoading: isFetchingCategory } = useQuery({
    queryKey: ['categories', 'detail'],
    queryFn: (id) => apiClient.get(`/categories/${id}`).then(res => res.data),
    enabled: false, // Disabled by default, need to call refetch manually
  });

  // Create category mutation
  const createCategoryMutation = useMutation({
    mutationFn: (categoryData) => apiClient.post('/categories', categoryData),
    onSuccess: () => {
      toast.success('Category created successfully');
      queryClient.invalidateQueries(['categories']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to create category');
    },
  });

  // Update category mutation
  const updateCategoryMutation = useMutation({
    mutationFn: ({ id, ...categoryData }) => apiClient.put(`/categories/${id}`, categoryData),
    onSuccess: () => {
      toast.success('Category updated successfully');
      queryClient.invalidateQueries(['categories']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update category');
    },
  });

  // Delete category mutation
  const deleteCategoryMutation = useMutation({
    mutationFn: (id) => apiClient.delete(`/categories/${id}`),
    onSuccess: () => {
      toast.success('Category deleted successfully');
      queryClient.invalidateQueries(['categories']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete category');
    },
  });

  return {
    categories,
    isFetchingCategories,
    category,
    isFetchingCategory,
    createCategory: createCategoryMutation.mutateAsync,
    isCreatingCategory: createCategoryMutation.isLoading,
    updateCategory: updateCategoryMutation.mutateAsync,
    isUpdatingCategory: updateCategoryMutation.isLoading,
    deleteCategory: deleteCategoryMutation.mutateAsync,
    isDeletingCategory: deleteCategoryMutation.isLoading,
  };
};