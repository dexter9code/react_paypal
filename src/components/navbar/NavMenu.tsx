import styles from "./navMenu.module.scss";
import { useDispatch } from "react-redux/es/exports";
import { activeShown, closeShown } from "../../features/NavbarSlice";

type ChooseNavbar = "shown" | "business" | "partner" | "info";

type AboutInfo = {
  id: number;
  title: string;
  description: string;
};

type NavMenusProps = {
  menuTitles: AboutInfo[];
  type: ChooseNavbar;
};

const NavMenu = ({ menuTitles, type }: NavMenusProps) => {
  const dispatch = useDispatch();

  const mouseEnterHandler = (currentType: string) => {
    if (currentType === "shown") {
      dispatch(activeShown("shown"));
    } else if (currentType === "business") {
      dispatch(activeShown("business"));
    } else if (currentType === "info") {
      dispatch(activeShown("info"));
    }
  };

  const mouseCloseHandler = (currentType: string) => {
    if (currentType === "shown") {
      dispatch(closeShown("shown"));
    } else if (currentType === "business") {
      dispatch(closeShown("business"));
    } else if (currentType === "info") {
      dispatch(closeShown("info"));
    }
  };

  return (
    <div
      className={styles.nav__menu}
      onMouseEnter={() => mouseEnterHandler(type)}
      onMouseLeave={() => mouseCloseHandler(type)}
    >
      {menuTitles.map((item) => (
        <div className={styles.nav__menu_actions} key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NavMenu;
