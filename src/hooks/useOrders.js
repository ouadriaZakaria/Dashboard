// src/hooks/useOrders.js
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import apiClient from '../api/apiClient';
import { toast } from 'react-hot-toast';

export const useOrders = (status = '') => {
  const queryClient = useQueryClient();

  // Fetch all orders
  const { data: orders, isLoading: isFetchingOrders } = useQuery({
    queryKey: ['orders', { status }],
    queryFn: () => {
      const url = status ? `/orders?status=${status}` : '/orders';
      return apiClient.get(url).then(res => res.data);
    },
  });

  // Fetch single order
  const { data: order, isLoading: isFetchingOrder } = useQuery({
    queryKey: ['orders', 'detail'],
    queryFn: (id) => apiClient.get(`/orders/${id}`).then(res => res.data),
    enabled: false, // Disabled by default, need to call refetch manually
  });

//   // Create order mutation
//   const createOrderMutation = useMutation({
//     mutationFn: (orderData) => apiClient.post('/orders', orderData),
//     onSuccess: () => {
//       toast.success('Order created successfully');
//       queryClient.invalidateQueries(['orders']);
//       queryClient.invalidateQueries(['cart']); // Invalidate cart as well
//     },
//     onError: (error) => {
//       toast.error(error.response?.data?.message || 'Failed to create order');
//     },
//   });

  // Update order status mutation
  const updateOrderStatusMutation = useMutation({
    mutationFn: ({ id, status }) => apiClient.patch(`/orders/${id}/status`, { status }),
    onSuccess: () => {
      toast.success('Order status updated successfully');
      queryClient.invalidateQueries(['orders']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update order status');
    },
  });

  // Delete order mutation
  const deleteOrderMutation = useMutation({
    mutationFn: (id) => apiClient.delete(`/orders/${id}`),
    onSuccess: () => {
      toast.success('Order deleted successfully');
      queryClient.invalidateQueries(['orders']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete order');
    },
  });

  return {
    orders,
    isFetchingOrders,
    order,
    isFetchingOrder,
    createOrder: createOrderMutation.mutateAsync,
    isCreatingOrder: createOrderMutation.isLoading,
    updateOrderStatus: updateOrderStatusMutation.mutateAsync,
    isUpdatingOrderStatus: updateOrderStatusMutation.isLoading,
    deleteOrder: deleteOrderMutation.mutateAsync,
    isDeletingOrder: deleteOrderMutation.isLoading,
  };
};