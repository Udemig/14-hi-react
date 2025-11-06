import { Link } from "react-router-dom";
import { collapsedNavItems } from "../../utils/constants";

const Sidebar = () => {
  // sidebar küçükse
  if (true) {
    return (
      <aside>
        <div>
          {collapsedNavItems.map((item, key) => (
            <Link to="/" key={key} className="flex flex-col items-center justify-center py-4 px-2">
              <span className="text-2xl mb-2">{item.icon}</span>
              <span className="text-xs text-center">{item.name}</span>
            </Link>
          ))}
        </div>
      </aside>
    );
  }

  // sidebar büyükse
  return <aside>Büyük Sidebar</aside>;
};

export default Sidebar;
