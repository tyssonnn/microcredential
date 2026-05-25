"use client";
import UserCard from "@/components/fragments/card/admin/user-card";
import Button from "@/components/ui/button/button";
import LogoutButton from "@/components/ui/button/logout-button";
import SpinnerLoading from "@/components/ui/loading/spinner-loading"; // Import the SpinnerLoading component to display a loading spinner while fetching the user list
import ErrorText from "@/components/ui/text/error-text"; // Import the ErrorText component to display an error message if there is an error fetching the user list
import { useGetUserList } from "@/features/admin/use-get-user-list";
import Link from "next/link";

export default function ListUserPage() {

  const { data, isLoading, error } = useGetUserList(); // Use the useGetUserList hook to fetch the list of users and get the data, isLoading state, and error state for managing the UI based on the fetch status

  return (
    <div className="space-y-4 w-full">
      <h2 className="font-bold text-lg">List User</h2>

      <LogoutButton />

      <div className="flex justify-end items-center gap-2">
        <Link href="/admin/create">
          <Button className="bg-blue-500 w-fit h-fit text-end">
            Create User
          </Button>
        </Link>
      </div>

      {isLoading && (
        <div className="text-center">
          <SpinnerLoading />
        </div>
      )} {/* Conditionally render the SpinnerLoading component to display a loading spinner while the user list is being fetched, based on the isLoading state */}

      {error && (
        <div className="text-center">
          <ErrorText message={error.message} />
        </div>
      )} {/* Conditionally render the ErrorText component to display an error message if there is an error fetching the user list, based on the error state */}

      {!isLoading && !error && data?.length === 0 && (
        <div className="text-center">
          <ErrorText message="User not found" />
        </div>
      )} {/* Conditionally render the ErrorText component to display a "User not found" message if the data is successfully fetched but the user list is empty, based on the length of the data array */}

      {!isLoading && !error && data && (
        <div className="space-y-2 w-full">
          {data.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )} {/* Conditionally render the list of UserCard components to display the user details if the data is successfully fetched and there are no loading or error states, by mapping over the data array and passing each user object as a prop to the UserCard component */}
    </div>
  );
}
