// src/hooks/useCart.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { toast } from 'react-hot-toast';

export const useCart = () => {
  const queryClient = useQueryClient();

  // Fetch cart
  const { data: cart, isLoading: isFetchingCart } = useQuery({
    queryKey: ['cart'],
    queryFn: () => apiClient.get('/cart').then(res => res.data),
  });

  // Add to cart mutation
  const addToCartMutation = useMutation({
    mutationFn: ({ productId, quantity }) => 
      apiClient.post('/cart/items', { productId, quantity }),
    onSuccess: () => {
      toast.success('Item added to cart');
      queryClient.invalidateQueries(['cart']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to add item to cart');
    },
  });

  // Update cart item mutation
  const updateCartItemMutation = useMutation({
    mutationFn: ({ itemId, quantity }) => 
      apiClient.put(`/cart/items/${itemId}`, { quantity }),
    onSuccess: () => {
      toast.success('Cart updated');
      queryClient.invalidateQueries(['cart']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update cart');
    },
  });

  // Remove from cart mutation
  const removeFromCartMutation = useMutation({
    mutationFn: (itemId) => apiClient.delete(`/cart/items/${itemId}`),
    onSuccess: () => {
      toast.success('Item removed from cart');
      queryClient.invalidateQueries(['cart']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to remove item from cart');
    },
  });

  // Clear cart mutation
  const clearCartMutation = useMutation({
    mutationFn: () => apiClient.delete('/cart'),
    onSuccess: () => {
      toast.success('Cart cleared');
      queryClient.invalidateQueries(['cart']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to clear cart');
    },
  });

  return {
    cart,
    isFetchingCart,
    addToCart: addToCartMutation.mutateAsync,
    isAddingToCart: addToCartMutation.isLoading,
    updateCartItem: updateCartItemMutation.mutateAsync,
    isUpdatingCartItem: updateCartItemMutation.isLoading,
    removeFromCart: removeFromCartMutation.mutateAsync,
    isRemovingFromCart: removeFromCartMutation.isLoading,
    clearCart: clearCartMutation.mutateAsync,
    isClearingCart: clearCartMutation.isLoading,
  };
};