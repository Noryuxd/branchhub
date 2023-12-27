import { Page } from "@/models/page";
import { User } from "@/models/user";
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
import {
  faEnvelope,
  faLink,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import Image from "next/image";
import Link from "next/link";

export const buttonsIcons = {
  email: faEnvelope,
  instagram: faInstagram,
  spotify: faSpotify,
  soundcloud: faSoundcloud,
  facebook: faFacebook,
  discord: faDiscord,
  tiktok: faTiktok,
  youtube: faYoutube,
  twitch: faTwitch,
  github: faGithub,
  linkedin: faLinkedin,
  whatsapp: faWhatsapp,
  telegram: faTelegram,
};

const UserPage = async ({ params }) => {
  const uri = params.uri;
  mongoose.connect(process.env.MONGODB_URI);
  const page = await Page.findOne({ uri });
  const user = await User.findOne({ email: page.owner });

  return (
    <div className=" bg-violet-950 text-white min-h-screen">
      <div
        className="h-36 bg-gray-500  bg-cover bg-center"
        style={
          page.bgType === "color"
            ? { backgroundColor: page.bgColor }
            : { backgroundImage: `url(${page.bgImage})` }
        }
      ></div>
      <div className=" aspect-square w-36 h-36 mx-auto relative -top-16 -mb-12">
        <Image
          src={user.image}
          alt={"avatar"}
          width={256}
          height={256}
          className="rounded-full w-full h-full object-cover"
        />
      </div>
      <h2 className="text-2xl text-center mb-1">{page.displayName}</h2>
      <h3 className="text-md flex gap-2 justify-center items-center text-white/70">
        <FontAwesomeIcon className={"w-6 h-6"} icon={faLocationDot} />
        <span>{page.location}</span>
      </h3>
      <div className="max-w-xs mx-auto text-center my-2">
        <p>{page.bio}</p>
      </div>
      <div className="flex gap-2 justify-center items-center pb-4 mt-4">
        {Object.keys(page.buttons).map((buttonKey) => (
          <Link
            href={"/"}
            className="rounded-full bg-white border hover:text-white hover:bg-violet-950 hover:border text-violet-950 p-3 flex justify-center items-center"
          >
            <FontAwesomeIcon
              className={"w-6 h-6"}
              icon={buttonsIcons[buttonKey]}
            />
          </Link>
        ))}
      </div>
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6 p-4 px-4">
        {page.links.map((link) => (
          <Link href={link.url} className="bg-violet-900 p-2 block flex">
            <div className=" relative -left-4 overflow-hidden w-16">
              <div className="w-16 h-16 aspect-square relative bg-violet-500 flex items-center justify-center">
                {link.icon && (
                  <Image
                    className="w-full h-full object-cover"
                    src={link.icon}
                    alt={"icon"}
                    width={64}
                    height={64}
                  />
                )}
                {!link.icon && (
                  <FontAwesomeIcon icon={faLink} className={"w-8 h-8"} />
                )}
              </div>
            </div>
            <div className="flex items-center justify-center shrink grow-0 overflow-hidden">
              <div>
                <h3>{link.title}</h3>
                <p className="text-white/50 h-6 overflow-hidden">
                  {link.subtitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserPage;