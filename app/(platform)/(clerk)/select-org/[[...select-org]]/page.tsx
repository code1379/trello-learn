import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  // slug
  return (
    <OrganizationList
      hidePersonal
      afterSelectOrganizationUrl="/organization/:id"
      afterCreateOrganizationUrl="/organization/:id"
    />
  );
}
