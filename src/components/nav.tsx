import "../styles/nav.css";

type NavItem = {
  text: string;
  url: string;
};

type NavItems = {
  items: NavItem[];
};

const Nav = ({ items }: { items: NavItems }) => {
  return (
    <nav className="nav-container">
      {items.items.map((item, index) => (
        <a key={index} href={item.url}>
          {item.text}
        </a>
      ))}
    </nav>
  );
};

export default Nav;