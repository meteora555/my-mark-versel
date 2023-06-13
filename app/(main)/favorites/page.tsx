import Favorites from "@/modules/Favorites/components/Favorites";
import { FAVORITES_ROUTE, MAIN_ROUTE } from "@/src/consts/routes";

export default async function Page() {
  const linksData = [
    {
      name: "Главная",
      href: `${MAIN_ROUTE}`,
    },
    {
      name: "Избранное",
      href: `${FAVORITES_ROUTE}`,
    },
  ];
  return (
    <>
      <Favorites breadcrumbs={linksData} />
    </>
  );
}
