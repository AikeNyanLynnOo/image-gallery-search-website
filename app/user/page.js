import { NavBar } from "@/src/components/NavBar";
import { BackToTopBtn } from "@/src/components/atoms/BackToTopBtn";

export default async function UserProfile({ params, searchParams }) {
  return (
    <div>
      <NavBar />
      User Profile
      <BackToTopBtn />
    </div>
  );
}
