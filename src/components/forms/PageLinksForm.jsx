"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../buttons/SubmitButton";
import { useState } from "react";

const PageLinksForm = ({ page, user }) => {
  const [links, setLinks] = useState(page.links || []);
  function save(formData) {}
  function addNewLink() {
    setLinks((prev) => {
      return [...prev, { title: "", subtitle: "", icon: "", url: "" }];
    });
  }
// 7:32
  return (
    <SectionBox>
      <h2 className="text-2xl font-bold mb-4 text-violet-800">Links</h2>
      <form action={save}>
        <button
          onClick={addNewLink}
          type="button"
          className="text-violet-800 text-lg flex gap-2 items-center"
        >
          <FontAwesomeIcon
            icon={faPlus}
            className={
              "w-4 h-4 bg-violet-800 text-white p-2 rounded-full cursor-pointer aspect-square "
            }
          />
          <span>Add a custom link</span>
        </button>
        <div>
          {links.map((link) => (
            <div></div>
          ))}
        </div>
        <div className="max-w-[200px] mx-auto mt-4 pt-4">
          <SubmitButton>
            <FontAwesomeIcon icon={faSave} className={"h-5 w-5"} />
            Save
          </SubmitButton>
        </div>
      </form>
    </SectionBox>
  );
};

export default PageLinksForm;
