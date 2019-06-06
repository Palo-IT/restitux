import { Tag } from "./Tag";

export class Interview {
  id: string;
  participant: string;
  jobTitle: string;
  expertise: string;
  status: string;
  analysis: string;
  date: Date;
  refToAudio: string;
  refToText: string;
  tags: Tag[];
  isFinished: boolean;
  duration: number;

  constructor(participant: string, jobTitle: string, expertise: string, date: Date) {
    this.participant = participant;
    this.jobTitle = jobTitle;
    this.expertise = expertise;
    this.date = date;
    this.refToAudio = "";
    this.refToText = "";
    this.tags = [];
    this.isFinished = false;
    this.duration = 0;
    this.status = "Scheduled";
    this.analysis = "Scheduled";
  }
}
