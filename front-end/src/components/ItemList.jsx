import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, arrayList, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        {isHome ? (
          <Link to={path} className="item-list__link">
            Mostrar Tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {arrayList
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => {
            return (
              <SingleItem
                {...currObj}
                idPath={idPath}
                key={`${title}-${index}`}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ItemList;
