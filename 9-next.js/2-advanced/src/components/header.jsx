import { fetchRecipes } from "@/utils/service";
import NavLink from "./nav-link";

const Header = async () => {
  const { recipes } = await fetchRecipes();

  return (
    <header className="p-5 border-b border-zinc-500 flex justify-between">
      <h1 className="font-play">NEXT</h1>

      <nav className="flex gap-5">
        <NavLink href="/">Anasayfa</NavLink>
        <NavLink href="/wonders">Harikalar</NavLink>
        <NavLink href="/recipes-server">Tarifler - S - {recipes.length}</NavLink>
        <NavLink href="/recipes-client">Tarifler - C</NavLink>
      </nav>
    </header>
  );
};

export default Header;
