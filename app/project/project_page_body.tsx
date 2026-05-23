"use client";
import React from "react";
import { Project } from "../../utils/constants";
import Projectcard_Web from "./project_card/project_card_web";
import Projectcard_Mobile from "./project_card/project_card_mobile";
import { useSelector } from "react-redux";
import {
  opctionchoose_data,
  SearchQuery_data,
} from "../../redux_store/redux_action";
import Server_card from "./server_card";
function Projectpagebody() {
  const NavTag = useSelector(opctionchoose_data);
  const Search_query = useSelector(SearchQuery_data);

  const onlyReactProject = Project.filter(
    (data: Project_data) => data.Type === NavTag
  );

  const Search_data = Project.filter((data: Project_data) =>
    data.title.toLowerCase().includes(Search_query.toLowerCase())
  );

  return (
    <div className="w-full h-screen">
      {Search_query.length ? (
        <div className=" w-full h-auto flex flex-row items-center justify-center   flex-wrap p-[10px] 840:p-0  ">
          {Search_data.map((data: Project_data, index: any) =>
            data.Type === "React Native" ? (
              <Projectcard_Mobile
                key={data.title + data.project_image}
                index={index}
                data={data}
              />
            ) : data.Type === "server" ? (
              <div></div>
            ) : (
              <Projectcard_Web
                key={data.title + data.project_image}
                index={index}
                data={data}
              />
            )
          )}
        </div>
      ) : NavTag === "All" ? (
        <div className=" w-full h-auto flex flex-row  items-center  justify-center  flex-wrap p-[10px] 840:p-0  ">
          {Project.map((data: Project_data, index: any) =>
            data.Type === "React Native" ? (
              <Projectcard_Mobile
                key={data.title + data.project_image}
                index={index}
                data={data}
              />
            ) : data.Type === "server" ? (
              <div></div>
            ) : (
              <Projectcard_Web
                key={data.title + data.project_image}
                index={index}
                data={data}
              />
            )
          )}
        </div>
      ) : NavTag === "server" ? (
        <div className="w-full h-auto flex flex-row items-center justify-center   flex-wrap p-[10px] 840:p-0">
          {onlyReactProject.map((data: Project_data, index: any) => (
            <Server_card key={data.title + index} data={data} />
          ))}
        </div>
      ) : (
        <div
          className={` ${
            NavTag === "All" ? " hidden " : ""
          } w-full h-auto flex flex-row items-center justify-center   flex-wrap p-[10px] 840:p-0  `}
        >
          {onlyReactProject.map((data: Project_data, index: any) =>
            data.Type === "React Native" ? (
              <Projectcard_Mobile
                key={data.title + data.video_key + data.project_image}
                index={index}
                data={data}
              />
            ) : (
              <Projectcard_Web
                key={data.title + data.video_key + data.project_image}
                index={index}
                data={data}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Projectpagebody;
