export class Question {
  id: string;
  objectifId: string;
  question: string;
  dateCreation: Date;
  answer: string;
  audio: string; // url
  reminder: string;
  order: number;
  isNote: boolean;

  constructor(question: string, order: number, objectifId: string, date: Date) {
    this.question = question;
    this.order = order;
    this.objectifId = objectifId;
    this.dateCreation = date;
  }
}
