"use client";
import OrderCard from "@/components/fragments/card/customer/order-card";
import Button from "@/components/ui/button/button";
import LogoutButton from "@/components/ui/button/logout-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading"; // Import the SpinnerLoading component to display a loading spinner while fetching the order list
import ErrorText from "@/components/ui/text/error-text"; // Import the ErrorText component to display an error message if there is an error fetching the order list
import { useGetOrderList } from "@/features/order/use-get-order-list"; // Import the useGetOrderList hook to fetch the list of orders and get the data, isLoading state, and error state for managing the UI based on the fetch status
import Link from "next/link";

export default function ListOrderPage() {

  const { data, isLoading, error } = useGetOrderList(); // Use the useGetOrderList hook to fetch the list of orders and get the data, isLoading state, and error state for managing the UI based on the fetch status

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">List Order</h2>

      <LogoutButton />

      <div className="flex justify-end items-center gap-2">
        <Link href="/customer/create">
          <Button className="bg-blue-500 w-fit h-fit text-end">
            Create Order
          </Button>
        </Link>
      </div>

      {isLoading && (
        <div className="text-center">
          <SpinnerLoading />
        </div>
      )} {/* Conditionally render the SpinnerLoading component to display a loading spinner while the order list is being fetched, based on the isLoading state */}

      {error && (
        <div className="text-center">
          <ErrorText message={error.message} />
        </div>
      )} {/* Conditionally render the ErrorText component to display an error message if there is an error fetching the order list, based on the error state */}

      {!isLoading && !error && data?.length === 0 && (
        <div className="text-center">
          <ErrorText message="Order not found" />
        </div>
      )} {/* Conditionally render the ErrorText component to display an "Order not found" message if the data is successfully fetched but the order list is empty, based on the length of the data array */}

      {!isLoading && !error && data && (
        <div className="space-y-2 w-full">
          {data.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )} {/* Conditionally render the list of OrderCard components to display the order details if the data is successfully fetched and there are no loading or error states, by mapping over the data array and passing each order object as a prop to the OrderCard component */}
    </div>
  );
}
