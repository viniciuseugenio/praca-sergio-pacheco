export interface Event {
  id: number;
  title: string;
  description: string;
  day: string;
  time: string;
  end_time?: string;
  address: string;
  capacity: string;
}

export interface CreateEventDto {
  title: string;
  description: string;
  day: string;
  time: string;
  end_time?: string;
  address: string;
  capacity: string;
}

export interface UpdateEventDto extends Partial<CreateEventDto> {}
