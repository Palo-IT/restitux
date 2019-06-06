export class Note {
  note: string;
  id: string;
  isNote: boolean = true;

  constructor(note?: string) {
    this.note = note;
  }
}
