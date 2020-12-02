import { useState } from "react";
import { useTransition, animated } from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const transitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  // mask className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          key={key}
          style={props}
          className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
        >
          This is the menu
        </animated.div>
      ))}
    </nav>
  );
}
