import Search from "./Search";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

export default function TashBoard() {
  return (
    <>
      {/* <!-- Begin Table --> */}
      <section className="mb-20" id="tasks">
        <div className="container">
          <Search />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction />
            <div className="overflow-auto">
              <TaskList />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Table --> */}
    </>
  );
}
