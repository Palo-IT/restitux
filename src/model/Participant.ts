import { Person } from "./Person";

export class Participant extends Person {
  firstName: string;
  lastName: string;
  job: string;
  company?: string;
  email: string;
  phone?: string;
  level?: string;
  city: string;
  rdv?: Date;
  notes?: string;
  urlImage?: string;
  proto?: string;
  expanded?: boolean;
  edit?: any;
  interviewStatus: 'toInvite' | 'waiting' | 'confirmed' | 'refused' | 'toTreat' | 'finished';

  constructor() {
    super();
    this.interviewStatus = 'toInvite';
  }
}
