import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categoriess, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/catagories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {categoriess.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`} className="text-black text-decoration-none">
              {category.title}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
