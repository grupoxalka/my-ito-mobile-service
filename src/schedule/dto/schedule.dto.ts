export class SubjectDto {
  id: string;
  name: string;
  initial_time: string;
  end_time: string;
  category: string;
}

export class ScheduleDto {
  day: string;
  subjects: SubjectDto[];
}

export class SubjectDetailDto {
  subject_id: string;
  subject_name: string;
  initial_time: string;
  end_time: string;
  category: string;
  summary: {
    total_classes: number;
    absent: number;
    present: number;
  };
}

export class TodayScheduleDto {
  today_date: string;
  classes: SubjectDto[];
}

export class ClassStatusDto {
  id: string;
  name: string;
  initial_time: string;
  end_time: string;
  remaining_time: string;
  status: string;
}
