"use client";

import { useAuth, useUser } from "@clerk/nextjs";

const ProtectedPage = () => {
  const { userId } = useAuth();
  const { user } = useUser();
  return (
    <div>
      Protected Page
      <p>User: {user?.firstName}</p>
      <p>UserId: {userId}</p>
    </div>
  );
};

export default ProtectedPage;
