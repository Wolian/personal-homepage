import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/Github.svg";
import { ReactComponent as FacebookIcon } from "./icons/Facebook.svg";
import { ReactComponent as LinkedInIcon } from "./icons/LinkedIn.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/Wolian",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/krzysiek.banasiak.37/",
        Icon: styleIcon(FacebookIcon),
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kbanasiak347/",
        Icon: styleIcon(LinkedInIcon),
    },
];