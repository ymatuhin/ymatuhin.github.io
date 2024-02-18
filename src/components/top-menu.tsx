import s from "./top-menu.module.scss";

type MenuItem = {
  text: string;
  path: string;
  locales: string[];
};

type Props = {
  pathname: string;
  menuItems: MenuItem[];
};

export const TopMenu = ({ pathname, menuItems }: Props) => {
  return (
    <div class={s.header}>
      <a {...(pathname !== "/" && { href: "/" })} class={s.logo}>
        <img src="/favicon.svg" width="20" height="20" />
        <span>ymatuhin</span>
      </a>

      <nav class={s.nav}>
        {menuItems.map((item) => (
          <a
            href={item.path}
            className={`${s.navItem} ${
              pathname === item.path ? s.active : ""
            }`}>
            {item.text}
          </a>
        ))}
      </nav>

      {/* <div class={s.right}>
        <span>v0.1.1</span>
        <button>dark mode</button>
        <select name="" id="">
          <option value="system">По умолчанию</option>
          <option value="light">Светлая тема</option>
          <option value="dark">Темная тема</option>
        </select>
        <select name="" id="">
          <option value="ru">Русский</option>
          <option value="en">Английский</option>
        </select>
      </div> */}
    </div>
  );
};
