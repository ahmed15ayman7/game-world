import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook,faLinkedin,faInstagram, faTelegram,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'
export const links = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/ahmed15ayman7",
    classIcon: <FontAwesomeIcon icon={faLinkedin} beatFade color= "#ffffff"/>,
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=100012410432156",
    classIcon: <FontAwesomeIcon icon={faFacebook} beatFade color= "#ffffff"/>
  },
  {
    name: "instagram",
    url: "http://www.instgram.com/eng_ahmed.ayman.948",
    classIcon: <FontAwesomeIcon icon={faInstagram} beatFade color= "#ffffff"/>,
  },
  {
    name: "freelancer",
    url: "https://www.freelancer.com/u/ahmed15ayman7",
    classIcon: <FontAwesomeIcon icon={faTelegram} beatFade color= "#ffffff"/>,
  },
  {
    name: "github",
    url: "https://github.com/ahmed15ayman7",
    classIcon: <FontAwesomeIcon icon={faGithub} beatFade color= "#ffffff"/> ,
  },
  {
    name: "twitter",
    url: "https://twitter.com/ahmed15ayman7?t=klqq7QsWrC3uQItgp3J4cw&s=09",
    classIcon: <FontAwesomeIcon icon={faTwitter} beatFade color= "#ffffff"/>,
  },
];
