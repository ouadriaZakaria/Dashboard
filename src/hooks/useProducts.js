// src/hooks/useProducts.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { toast } from 'react-hot-toast';

export const useProducts = (query = '') => {
  const queryClient = useQueryClient();

  // Fetch all products
  const { data: products, isLoading: isFetchingProducts } = useQuery({
    queryKey: ['products', { query }],
    queryFn: () => apiClient.get(`/products?search=${query}`).then(res => res.data),
  });

  // Fetch single product
  const { data: product, isLoading: isFetchingProduct } = useQuery({
    queryKey: ['products', 'detail'],
    queryFn: (id) => apiClient.get(`/products/${id}`).then(res => res.data),
    enabled: false, // Disabled by default, need to call refetch manually
  });

  // Create product mutation
  const createProductMutation = useMutation({
    mutationFn: (productData) => apiClient.post('/products', productData),
    onSuccess: () => {
      toast.success('Product created successfully');
      queryClient.invalidateQueries(['products']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to create product');
    },
  });

  // Update product mutation
  const updateProductMutation = useMutation({
    mutationFn: ({ id, ...productData }) => apiClient.put(`/products/${id}`, productData),
    onSuccess: () => {
      toast.success('Product updated successfully');
      queryClient.invalidateQueries(['products']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update product');
    },
  });

  // Delete product mutation
  const deleteProductMutation = useMutation({
    mutationFn: (id) => apiClient.delete(`/products/${id}`),
    onSuccess: () => {
      toast.success('Product deleted successfully');
      queryClient.invalidateQueries(['products']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete product');
    },
  });

  return {
    products,
    isFetchingProducts,
    product,
    isFetchingProduct,
    createProduct: createProductMutation.mutateAsync,
    isCreatingProduct: createProductMutation.isLoading,
    updateProduct: updateProductMutation.mutateAsync,
    isUpdatingProduct: updateProductMutation.isLoading,
    deleteProduct: deleteProductMutation.mutateAsync,
    isDeletingProduct: deleteProductMutation.isLoading,
  };
};