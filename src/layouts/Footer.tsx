import { useContext } from "react";
import { FaHashtag } from "react-icons/fa6";
import { categoriesContext } from "../context/categoriesContext";
import { v4 } from "uuid";

const Footer = () => {
  const { categories, setSelected } = useContext(categoriesContext)
  return (
    <footer className="footer px-10 py-5 2xl:py-10 bg-base-200 text-base-content">
      <aside>
        <FaHashtag className="size-16" />
        <p>Mini-Ecommerce Kata Ltd.<br />Providing reliable service since 1992</p>
      </aside>
      <nav>
        <h6 className="footer-title">Categories</h6>
        {
          categories.map((cat: string) => (
            <a role="button" onClick={() => { setSelected(cat) }} className="link link-hover" key={v4()}>{cat}</a>
          ))
        }
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
}

export default Footer;