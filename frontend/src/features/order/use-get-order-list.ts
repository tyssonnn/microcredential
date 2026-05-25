import { getOrderList } from "@/services/actions/order.actions";
import { useQuery } from "@tanstack/react-query";

//TASK 3
// Buatkan Features untuk get order list dengan menggunakan OrderInstance yang sudah dibuat sebelumnya
export const useGetOrderList = () => {
  return useQuery({
    queryKey: ["get-order-list"],
    queryFn: () => getOrderList(),
  });
};