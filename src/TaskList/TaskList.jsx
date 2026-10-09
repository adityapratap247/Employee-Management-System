import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
    return (
        <div
            id="tasklist"
            className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full mt-10"
        >
            {data?.tasks && data.tasks.length > 0 ? (
                data.tasks.map((elem, idx) => {
                    if (elem.active) {
                        return <AcceptTask key={idx} elem={elem} />;
                    }

                    if (elem.newTask) {
                        return <NewTask key={idx} elem={elem} />;
                    }

                    if (elem.completed) {
                        return <CompleteTask key={idx} elem={elem} />;
                    }

                    if (elem.failed) {
                        return <FailedTask key={idx} elem={elem} />;
                    }

                    return null;
                })
            ) : (
                <div className="text-gray-400 text-lg">
                    No tasks assigned yet.
                </div>
            )}
        </div>
    );
};

export default TaskList;