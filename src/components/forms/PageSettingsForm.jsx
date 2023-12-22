"use client";

import {
  faCloudArrowUp,
  faPalette,
  faSave,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import RadioTogglers from "../formItems/RadioTogglers";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import SubmitButton from "../buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { savePageSettings } from "@/actions/pageActions";
import toast from "react-hot-toast";
import { useState } from "react";
import SectionBox from "../layout/SectionBox";
import { upload } from "@/libs/upload";

const PageSettingsForm = ({ page, user }) => {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [avatar, setAvatar] = useState(user?.image);

  async function saveBaseSettings(formData) {
    const result = await savePageSettings(formData);
    if (result) {
      toast.success("Saved !");
    }
  }

  const handleCoverImageChange = async (e) => {
    await upload(e, (link) => {
      setBgImage(link);
    });
  };

  const handleAvatarImageChange = async (e) => {
    await upload(e, (link) => {
      setAvatar(link);
    });
  };

  return (
    <div>
      <SectionBox>
        <form action={saveBaseSettings}>
          <div
            className=" py-16 -m-4 flex min-h-[300px] justify-center items-center bg-cover bg-center"
            style={
              bgType === "color"
                ? { backgroundColor: bgColor }
                : { backgroundImage: `url(${bgImage})` }
            }
          >
            <div>
              <RadioTogglers
                defaultValue={page.bgType}
                options={[
                  { value: "color", icon: faPalette, label: "Color" },
                  { value: "image", icon: faImage, label: "Image" },
                ]}
                onChange={(value) => setBgType(value)}
              />
              {bgType === "color" && (
                <div className="bg-white shadow text-gray-700 px-4 py-1 mt-2 ">
                  <div className="mt-2 flex justify-center items-center gap-2">
                    <span>Background color</span>
                    <input
                      type="color"
                      name="bgColor"
                      className=" bg-white"
                      onChange={(e) => setBgColor(e.target.value)}
                      defaultValue={page.bgColor}
                    />
                  </div>
                </div>
              )}
              {bgType === "image" && (
                <div className="flex justify-center ">
                  <label
                    className="bg-white shadow px-4 py-2 mt-2 flex gap-2 text-gray-700 hover:text-violet-800 cursor-pointer"
                    type="button"
                  >
                    <input type="hidden" name="bgImage" value={bgImage} />
                    <input
                      type="file"
                      onChange={handleCoverImageChange}
                      className="hidden"
                    />
                    <div className="flex gap-2 items-center">
                      <FontAwesomeIcon
                        icon={faCloudArrowUp}
                        className=" w-6 h-6"
                      />
                      <span>Change image</span>
                    </div>
                  </label>
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center -mb-12">
            <div className="relative -top-8 w-[128px] h-[128px]">
              <div className=" overflow-hidden h-full rounded-full  border-4 shadow-black/50 shadow border-white">
                <Image
                  className="w-full h-full object-cover"
                  src={avatar}
                  alt={"avatar"}
                  width={128}
                  height={128}
                />
              </div>

              <label
                htmlFor="avatarInput"
                className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow shadow-black/50  aspect-square flex items-center cursor-pointer text-gray-700 hover:text-violet-800"
              >
                <FontAwesomeIcon className={"w-6 h-6"} icon={faCloudArrowUp} />
              </label>
              <input
                onChange={handleAvatarImageChange}
                type="file"
                id="avatarInput"
                className="hidden"
              />
              <input type="hidden" name="avatar" value={avatar} />
            </div>
          </div>
          <div className="p-0">
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
              className=" focus:outline-2 outline-violet-800"
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
      </SectionBox>
    </div>
  );
};

export default PageSettingsForm;
