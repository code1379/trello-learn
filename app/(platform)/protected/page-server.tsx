import { currentUser, auth } from "@clerk/nextjs";

const ProtectedPage = async () => {
  const user = await currentUser();
  const { userId } = auth();
  return (
    <div>
      Protected Page
      <p>User: {user?.firstName}</p>
      <p>UserId: {userId}</p>
    </div>
  );
};

export default ProtectedPage;
