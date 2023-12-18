"use client";

import { faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import RadioTogglers from "../formItems/RadioTogglers";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { savePageSettings } from "@/actions/pageActions";
import toast from "react-hot-toast";

const PageSettingsForm = ({ page, user }) => {
  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);
    if (result) {
      toast.success("Saved !");
    }
  }

  return (
    <div className="-m-4">
      <form action={saveBaseSettings}>
        <div
          className=" py-16 flex justify-center items-center"
          style={{ backgroundColor: page.bgColor }}
        >
          {/* 4:58 */}
          <div>
            <RadioTogglers
              defaultValue={page.bgType}
              options={[
                { value: "color", icon: faPalette, label: "Color" },
                { value: "image", icon: faImage, label: "Image" },
              ]}
            />
            <div className="bg-gray-200 shadow text-gray-700 p-2 mt-2 ">
              {page.bgType === "color" && (
                <div className="mt-2 flex justify-center gap-2">
                  <span>Background color</span>
                  <input
                    type="color"
                    name="bgColor"
                    defaultValue={page.bgColor}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center -mb-12">
          <Image
            className="rounded-full relative -top-8 border-4 shadow-black shadow border-white"
            src={user?.image}
            alt={"avatar"}
            width={128}
            height={128}
          />
        </div>
        <div className="p-4">
          <label className="input-label" htmlFor="nameInput">
            Display name
          </label>
          <input
            type="text"
            name="displayName"
            defaultValue={page.displayName}
            id="nameInput"
            placeholder="Ababsa Rabii"
          />
          <label className="input-label" htmlFor="locationInput">
            Location
          </label>
          <input
            type="text"
            id="locationInput"
            name="location"
            defaultValue={page.location}
            placeholder="Morocco"
          />
          <label className="input-label" htmlFor="bioInput">
            Bio
          </label>
          <textarea
            id="bioInput"
            name="bio"
            defaultValue={page.bio}
            placeholder="Cool bio..."
          />
          <div className="max-w-[200px] mx-auto">
            <SubmitButton>
              <FontAwesomeIcon icon={faSave} className={"h-6 w-6"} />
              Save
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PageSettingsForm;
