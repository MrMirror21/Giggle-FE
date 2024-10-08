import { Container, MenuBox, MenuText } from "./style";

import DocumentIcon from "../../../assets/icons/document_icon.svg?react";
import NoticeIcon from "../../../assets/icons/notice_icon.svg?react";
import HomeIcon from "../../../assets/icons/home_icon.svg?react";
import CalendarIcon from "../../../assets/icons/calendar_icon.svg?react";
import ChatIcon from "../../../assets/icons/chat_icon.svg?react";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo } from "react";
import { menuItem } from "../../../interfaces/common/menuItem";

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const mainMenu = useMemo<menuItem[]>(
    () => [
      {
        name: "서류",
        src: "/document",
        icon: <DocumentIcon />,
      },
      {
        name: "공고",
        src: "/notice",
        icon: <NoticeIcon />,
      },
      {
        name: "홈",
        src: "/",
        icon: <HomeIcon />,
      },
      {
        name: "캘린더",
        src: "/calendar",
        icon: <CalendarIcon />,
      },
      {
        name: "챗봇",
        src: "/chatbot",
        icon: <ChatIcon />,
      },
    ],
    []
  );

  return (
    <Container>
      {mainMenu.map((item, idx) => (
        <MenuBox
          key={`${item.name}_${idx}`}
          $currentmenu={location.pathname === item.src ? true : false}
          onClick={() => navigate(item.src)}
        >
          {item.icon}
          <MenuText>{item.name}</MenuText>
        </MenuBox>
      ))}
    </Container>
  );
};

export default Menu;
