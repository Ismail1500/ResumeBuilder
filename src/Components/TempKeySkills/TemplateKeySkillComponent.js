import { Container } from "@mui/system";
import React from "react";
import "./TemplateKeySkillComponent.css";

const TemplateKeySkillComponent = (props) => {
  return (
    <Container>
      <li className="skill">{props.skill}</li>
    </Container>
  );
};

export default TemplateKeySkillComponent;
