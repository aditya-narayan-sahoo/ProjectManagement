const UserRoleEnum = {
  ADMIN: "admin",
  MEMBER: "member",
  PROJECT_ADMIN: "project_admin",
};
const AvailableUserRole = Object.values(UserRoleEnum);

const TaskStatusEnum = {
  TODO: "todo",
  DONE: "done",
  IN_PROGRESS: "in_progress",
};
const AvailableTaskStatus = Object.values(TaskStatusEnum);

export { UserRoleEnum, AvailableUserRole, TaskStatusEnum, AvailableTaskStatus };
