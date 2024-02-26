import React from "react";
import Button from "./small/Button";
import History from "./small/History";
import Upgrade from "./small/Upgrade";
import Username from "./small/Username";

const Sidebar = ({feedState, setFeedState, createNewChat}) => {
  const {previousChats } = feedState;
  const handleButtonClick = () => {
    createNewChat();
  };
  const changeTitle = (uniqueTitles) => {
    setFeedState((prevState) => ({
      ...prevState,
      value: "",
      currentTitle: uniqueTitles,
    }));
  }
  const uniqueTitles = Array.from(new Set(previousChats.map(previousChats => previousChats.title)))
  return (
    <div
      className="flex-shrink-0 h-svh bg-sidebg overflow-hidden bg-token-sidebar-surface-primary"
      style={{ width: "260px" }}
    >
      <div className="h-full w-[260px]">
        <div className="flex h-full min-h-0 flex-col">
          <div className="flex h-full min-h-0 flex-col transition-opacity opacity-100">
            <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">
              <h2
                style={{
                  position: "absolute",
                  border: "0px",
                  width: "1px",
                  height: "1px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  overflowWrap: "normal",
                }}
              >
                Chat history
              </h2>
              <nav className="flex h-full w-full flex-col px-3 pb-3.5">
                <div className="flex-col flex-1 overflow-hidden transition-opacity duration-500 -mr-2 pr-2 overflow-y-auto">
                  <Button handleButtonClick={handleButtonClick}/>
                  <div className="flex flex-col gap-2 pb-2 text-token-text-primary text-sm">
                    <div>
                      <span>
                        <div
                          className="relative mt-5 h-screen"
                          style={{ opacity: "1" }}
                        >
                          <div style={{ opacity: "1" }}>
                            <h3 className="h-9 pt-3 px-2 text-xs font-medium text-ellipsis overflow-hidden break-all text-gray-500">
                              Today
                            </h3>
                          </div>
                          {uniqueTitles?.map((uniqueTitle,index) =><History changeTitle={changeTitle}  feedState={feedState} key={index}  uniqueTitle={uniqueTitle} />)}
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="bg-sidebg sticky bottom-0 left-0 right-0 z-30 pt-3.5">
                    <Upgrade />
                    <Username/>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
