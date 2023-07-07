import { WorkItem } from "../components/WorkItem";
import { works } from "../data/works";

export const WorkPage = () => {
  return (
    <div id="work" className="content">
      <h1 className="text-3xl">02. Some works</h1>

      {works.map(({ name, desc, technologies, img, github_url, live_url }) => {
        return (
          <WorkItem
            key={name}
            name={name}
            desc={desc}
            technologies={technologies}
            img={img}
            github_url={github_url}
            live_url={live_url}
          />
        );
      })}
    </div>
  );
};
