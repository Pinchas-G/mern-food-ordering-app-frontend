import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import { Loader } from "@/components/Loader";
import MetaTags from "@/components/MetaTags";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <Loader title="Loading user profile..." />;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <>
      <MetaTags
        page="userProfilePage"
        dynamicProps={{ userName: currentUser.name }}
      />
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </>
  );
};

export default UserProfilePage;
