import useOwnerProjects from "./useOwnerProjects";
import Loading from "../../ui/Loading";

const projectstestData = [
  {
    id: 1,
    title: "سایت فروش ساعت",
    category: "طراحی سایت",
    budget: 5000000,
    deadline: 30,
    tags: ["سایت", "وردپرس", "فرانت اند"],
    freelancer: undefined,
    status: "open",
  },
  {
    id: 2,
    title: "طراحی بنر سایت",
    category: "طراحی",
    budget: 1000000,
    deadline: 10,
    tags: ["طراحی", "فتوشاپ", "ایلاستریتور"],
    freelancer: undefined,
    status: "open",
  },
  {
    id: 3,
    title: "تولید محتوا سئو شده",
    category: "تولید محتوا",
    budget: 5000000,
    deadline: 20,
    tags: ["سئو", "سایت"],
    freelancer: "محمود ابراهیمی",
    status: "close",
  },
  {
    id: 4,
    title: "انجام سئو سایت",
    category: "سئو",
    budget: 2000000,
    deadline: 5,
    tags: ["سئو"],
    freelancer: "رضا محمدی",
    status: "close",
  },
  {
    id: 5,
    title: "افزایش سرعت سایت",
    category: "سایت",
    budget: 500000,
    deadline: 10,
    tags: ["سئو", "وردپرس", "سایت"],
    freelancer: "",
    status: "open",
  },
];
export default function ProjectsTable() {
  const { isLoading, data } = useOwnerProjects();
  if (isLoading) return <Loading />;
  // if (projects.length) return <p>پروژه یافت نشد..</p>;
  // console.log(data);
  return (
    <div className="bg-secondary-0 overflow-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {/* {projects?.map((project, index) => {
            return (
              <tr key={project._id}>
                <td>{(index = 1)}</td>
                <td>{project.title}</td>
                <td>{project.category.title}</td>
                <td>{project.budget}</td>
                <td>{project.deadline}</td>
                <td>{project.tags.join("-")}</td>
                <td>{project.freelancer?.name || "-"}</td>
                <td>{project.status == "open" ? <span>باز</span> : <span>بسته</span>}</td>
                <td>...</td>
              </tr>
            );
          })} */}
          {projectstestData.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.budget.toLocaleString("fa")}</td>
                <td>{`${item.deadline} روز`}</td>
                <td className="max-w-[200px] flex gap-2 flex-wrap text-xs">
                  {item.tags.map((i) => {
                    return (
                      <span
                        key={i}
                        className="bg-secondary-100 px-2 py-1 rounded-full shadow"
                      >
                        {i}
                      </span>
                    );
                  })}
                </td>
                <td>{item.freelancer ? item.freelancer : "-----"}</td>
                <td className="text-secondary-0">
                  {item.status == "open" ? (
                    <span className="inline-block text-center w-[43px] bg-success px-2 py-1 rounded-full shadow">
                      باز
                    </span>
                  ) : (
                    <span className="bg-red-400 px-2 py-1 rounded-full shadow">بسته</span>
                  )}
                </td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
