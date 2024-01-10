"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionBox from "../layout/SectionBox";
import {
  faEnvelope,
  faGripLines,
  faPlus,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faSoundcloud,
  faSpotify,
  faTelegram,
  faTiktok,
  faTwitch,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import { savePageButtons } from "@/actions/pageActions";
import toast from "react-hot-toast";
import { ReactSortable } from "react-sortablejs";

export const allButtons = [
  {
    key: "email",
    label: "E-mail",
    icon: faEnvelope,
    placeholder: "username@gmail.com",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: faInstagram,
    placeholder: "instagram.com/username",
  },
  {
    key: "spotify",
    label: "Spotify",
    icon: faSpotify,
    placeholder: "spotify.com/username",
  },
  {
    key: "soundcloud",
    label: "Soundcloud",
    icon: faSoundcloud,
    placeholder: "soundcloud.com/username",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: faFacebook,
    placeholder: "facebook.com/username",
  },
  {
    key: "discord",
    label: "Discord",
    icon: faDiscord,
    placeholder: "username",
  },
  {
    key: "tiktok",
    label: "TikTok",
    icon: faTiktok,
    placeholder: "tiktok.com/@username",
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: faYoutube,
    placeholder: "youtube.com/username",
  },
  {
    key: "twitch",
    label: "Twitch",
    icon: faTwitch,
    placeholder: "twitch.tv/username",
  },
  {
    key: "github",
    label: "GitHub",
    icon: faGithub,
    placeholder: "github.com/username",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: faLinkedin,
    placeholder: "linkedin.com/in/username",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    icon: faWhatsapp,
    placeholder: "+212 691000054",
  },
  {
    key: "telegram",
    label: "Telegram",
    icon: faTelegram,
    placeholder: "t.me/username",
  },
];

const PageButtonsForm = ({ user, page }) => {
  const pageSavedButtonsKeys = page.buttons ? Object.keys(page.buttons) : [];
  const pageSavedButtonsInfo = pageSavedButtonsKeys.map((key) =>
    allButtons.find((button) => button.key === key)
  );
  const [activeButtons, setActiveButtons] = useState(pageSavedButtonsInfo);

  const addButtonToProfile = (button) => {
    setActiveButtons((prevButtons) => {
      return [...prevButtons, button];
    });
  };

  async function saveButtons(formData) {
    await savePageButtons(formData);
    toast.success("Settings saved ! ");
  }

  function removeButton({ key }) {
    setActiveButtons((prevButtons) => {
      return prevButtons.filter((button) => button.key !== key);
    });
  }

  const availableButtons = allButtons.filter(
    (button1) => !activeButtons.find((button2) => button1.key === button2.key)
  );

  return (
    <SectionBox>
      <form action={saveButtons}>
        <h2 className="text-2xl font-bold mb-4 text-violet-800">Buttons</h2>
        <ReactSortable
          handle={".handle"}
          list={activeButtons}
          setList={setActiveButtons}
        >
          {activeButtons.map((button) => (
            <div key={button.label} className="mb-4 md:flex items-center">
              <div className="w-48 grow flex gap-2 text-gray-700 handle items-center p-2 hover:text-violet-800 cursor-pointer">
                <FontAwesomeIcon
                  icon={faGripLines}
                  className={"h-5 w-5 py-2 px-2"}
                />
                <FontAwesomeIcon icon={button.icon} className={"h-5 w-5"} />
                <span>{button.label}</span>
              </div>
              <div className="flex w-full">
                <input
                  placeholder={button.placeholder}
                  name={button.key}
                  defaultValue={page?.buttons?.[button.key]}
                  type="text"
                  style={{ marginBottom: "0" }}
                />
                <button
                  onClick={() => removeButton(button)}
                  type="button"
                  className="py-2 px-4 cursor-pointer hover:text-violet-800 bg-gray-200"
                >
                  <FontAwesomeIcon icon={faTrash} className={"h-5 w-5"} />
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
        <div className="flex flex-wrap gap-2 mt-4 border-y py-4 text-gray-700">
          {availableButtons.map((button) => (
            <button
              key={button.key}
              type="button"
              onClick={() => addButtonToProfile(button)}
              className=" flex gap-1 items-center p-2 bg-gray-100 hover:text-violet-800"
            >
              <FontAwesomeIcon icon={button.icon} className={"h-5 w-5"} />
              <span>{button.label}</span>
              <FontAwesomeIcon icon={faPlus} className={"h-5 w-5"} />
            </button>
          ))}
        </div>
        <div className="max-w-[200px] mx-auto mt-4">
          <SubmitButton>
            <FontAwesomeIcon icon={faSave} className={"h-5 w-5"} />
            Save
          </SubmitButton>
        </div>
      </form>
    </SectionBox>
  );
};

export default PageButtonsForm;
