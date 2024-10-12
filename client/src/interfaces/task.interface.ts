export enum TASK_STATUS {
  SCHEDULED = "SCHEDULED",
  ONGOING = "ONGOING",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export interface IDashboardTask {
  task_id: string;
  title: string;
  description: string;
  is_critical: boolean;
  category: string;
  status: TASK_STATUS;
  start_date: string;
  end_date: string | null;
  start_time: string | null;
  end_time: string | null;
}

export interface ITaskDashboardResponse {
  ongoing_task_count: number;
  completed_task_count: number;
  scheduled_task_count: number;
  total_task_count: number;
  todays_task_list: IDashboardTask[];
}
