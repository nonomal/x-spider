import { Dayjs } from 'dayjs';

export interface TwitterUser {
  screenName: string;
  avatar: string;
  name: string;
  id: string;
  mediaCount?: number;
  registerTime: Dayjs;
}
