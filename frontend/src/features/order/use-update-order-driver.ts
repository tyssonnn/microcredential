import { updateOrder } from "@/services/actions/order.actions";
import { IUpdateOrderRequest } from "@/types/order.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateOrderDriver = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ id, body }: { id: number; body: IUpdateOrderRequest }) => {
      return await updateOrder({
        Id: id,
        body,
      });
    },
    onSuccess: (_, variables) => {
      toast.success("Order status updated successfully");

      queryClient.invalidateQueries({
        queryKey: ["get-order-list"],
      });

      queryClient.invalidateQueries({
        queryKey: ["get-order-by-id", variables.id],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateOrderStatus: mutation.mutate, isLoading: mutation.isPending };
};
