import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "Home" },
  { id: 2, url: "about", text: "About" },
  { id: 3, url: "Contact", text: "Contact Us" },
  { id: 4, url: "products", text: "Products" },
  { id: 5, url: "cart", text: "Cart" },
  { id: 6, url: "checkout", text: "Checkout" },
  { id: 7, url: "orders", text: "Orders" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
