import React from "react";
import { Link } from "react-router-dom";

const FormCard = ({ form }) => {
  const { id, title } = form;
  return (
    <li>
      <Link to={`${id}`}>
        {title}: {id}
      </Link>
    </li>
  );
};

export default FormCard;
