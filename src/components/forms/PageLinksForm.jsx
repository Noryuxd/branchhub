"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import {
  faCloudArrowUp,
  faGripLines,
  faLink,
  faPlus,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import SubmitButton from "../buttons/SubmitButton";
import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { upload } from "@/libs/upload";
import Image from "next/image";

const PageLinksForm = ({ page, user }) => {
  const [links, setLinks] = useState(page.links || []);
  function save(formData) {
    
  }
  function addNewLink() {
    setLinks((prev) => {
      return [
        ...prev,
        {
          key: Date.now().toString(),
          title: "",
          subtitle: "",
          icon: "",
          url: "",
        },
      ];
    });
  }

  const handleLinkChange = (keyOfLinkToChange, prop, e) => {
    setLinks((prevLinks) => {
      const newLinks = [...prevLinks];
      newLinks.forEach((link) => {
        if (link.key === keyOfLinkToChange) {
          link[prop] = e.target.value;
        }
      });
      return [...prevLinks];
    });
  };

  const handleUpload = (e, linkKeyForUpload) => {
    upload(e, (uploadedImageUrl) => {
      setLinks((prevLinks) => {
        const newLinks = [...prevLinks];
        newLinks.forEach((link, index) => {
          if (link.key === linkKeyForUpload) {
            link.icon = uploadedImageUrl;
          }
        });
        return newLinks;
      });
    });
  };

  return (
    <SectionBox>
      <h2 className="text-2xl font-bold mb-4 text-violet-800">Custom links</h2>
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
          <span>Add new</span>
        </button>
        <div>
          <ReactSortable list={links} setList={setLinks}>
            {links.map((link) => (
              <div key={link.key} className="mt-8 flex gap-2 items-center ">
                {/* <div>
                  <FontAwesomeIcon
                    className="text-gray-700 mr-2 "
                    icon={faGripLines}
                  />
                </div> */}
                <div className="text-center">
                  <div className="bg-gray-100 relative aspect-square overflow-hidden w-16 h-16 inline-flex justify-center items-center">
                    {link.icon && (
                      <Image
                        className=" object-cover h-full w-full"
                        src={link.icon}
                        alt={"icon"}
                        width={64}
                        height={64}
                      />
                    )}
                    {!link.icon && <FontAwesomeIcon size="xl" icon={faLink} />}
                  </div>
                  <div>
                    <input
                      onChange={(e) => handleUpload(e, link.key)}
                      type="file"
                      id={"icon" + link.key}
                      className="hidden"
                    />
                    <label
                      htmlFor={"icon" + link.key}
                      type="button"
                      className="flex gap-1 items-center p-2 mt-2 border text-gray-700 hover:text-violet-800 cursor-pointer"
                    >
                      <FontAwesomeIcon icon={faCloudArrowUp} />
                      <span>Change icon</span>
                    </label>
                  </div>
                </div>
                <div className="grow">
                  <input
                    type="text"
                    value={link.title}
                    onChange={(e) => handleLinkChange(link.key, "title", e)}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    value={link.subtitle}
                    onChange={(e) => handleLinkChange(link.key, "subtitle", e)}
                    placeholder="Subtitle (optional)"
                  />
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) => handleLinkChange(link.key, "url", e)}
                    placeholder="URL"
                  />
                </div>
              </div>
            ))}
          </ReactSortable>
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
