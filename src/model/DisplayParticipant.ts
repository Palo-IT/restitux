export class DisplayParticipant {
  expanded: boolean;
  uploading: boolean;
  edit: EditParticipant;
  hover: EditParticipant;

  constructor() {
    this.expanded = false;
    this.uploading = false;
    this.edit = new EditParticipant();
    this.hover = new EditParticipant();
  }
}

export class EditParticipant {
  phone: boolean;
  email: boolean;
  name: boolean;
  lastName: boolean;
  job: boolean;
  company: boolean;
  level: boolean;
  proto: boolean;
  notes: boolean;

  constructor() {
    this.phone = false;
    this.email = false;
    this.name = false;
    this.lastName = false;
    this.job = false;
    this.company = false;
    this.level = false;
    this.proto = false;
    this.notes = false;
  }
}
