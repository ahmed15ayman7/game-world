import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse,faCircleInfo,faGamepad} from '@fortawesome/free-solid-svg-icons'
import {faPlaystation} from '@fortawesome/free-brands-svg-icons'
export const footerLinksPagesMore = [
  {
    name: "Home ",
    url: "/",
    classIcon: <FontAwesomeIcon icon={faHouse} beatFade color= "#ffffff"/>,
  },
  {
    name: "Games ",
    url: "/games",
    classIcon: <FontAwesomeIcon icon={faGamepad} beatFade color= "#ffffff"/>,
  },
  {
    name: "Platforms ",
    url: "/games/platforms",
    classIcon: <FontAwesomeIcon icon={faPlaystation} beatFade color= "#ffffff"/>,
  },
];
