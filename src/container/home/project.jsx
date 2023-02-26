import * as React from "react";
import useHook from "../../hooks/hook";

function ProjectItem({ title, imgUrl, gen, link }) {
  return (
    <div className="w-full max-w-full px-3 mb-6 lg:w-1/3 sm:flex-none">
      <div
        className="relative flex flex-col min-w-0 break-words bg-white border-0 px-3 py-3 rounded-2xl bg-clip-border"
        style={{"--tw-shadow": "0 20px 27px 0 rgba(0,0,0,0.05)", "--tw-shadow-colored": "0 20px 27px 0 var(--tw-shadow-color)", boxShadow: "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}}
        >
        <div className="relative">
          <a className="block shadow-xl rounded-2xl">
            <img
              src={imgUrl}
              alt="프로젝트 이미지"
              className="max-w-full shadow-soft-2xl rounded-2xl"
            />
          </a>
        </div>
        <div className="flex-auto px-1 pt-6">
          <p className="relative z-10 mb-2 leading-normal text-size-sm bg-clip-text">
            devRent {gen}기
          </p>
          <a href={link} target="_blank" style={{fontSize: "1.25rem", lineHeight: "1.375", fontWeight: "600"}}>
            <h5>{title}</h5>
          </a>
        </div>
      </div>
    </div>
  );
}

function ProjectList({ children }) {
  return (
    <div className="w-full px-6 py-6 mx-auto loopple-min-height-78vh text-slate-500">
      <div className="flex flex-wrap -mx-3 removable">
        {children}
      </div>
    </div>
  );
}

const Project = () => {
  let [projects, _] = React.useState(useHook().projects);
  return (
    <>
    <h3
      className="mb-4"
      style={{fontWeight: "700", color: "#344767"}}
    >
      Projects
    </h3>
    <ProjectList>
      {
        projects.data.map((p) => {
          return (
            <ProjectItem
              key={p.index}
              title={p.title}
              imgUrl={p.imgUrl}
              gen={p.gen}
              link={p.link}
            />
          );
        })
      }
    </ProjectList>
    </>
  );
};

export default Project;
