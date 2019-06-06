export class Objective {
  name: string;
  id: string;
  order: number;
  questions?: string[];

  constructor(name: string, index: number) {
    this.name = name;
    this.order = index;
  }
}
