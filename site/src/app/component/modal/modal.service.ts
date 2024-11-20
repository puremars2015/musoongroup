import { Subject } from "rxjs";

export class ModalService {
  show = new Subject<boolean>();

  constructor() { }

  open(): void {
    this.show.next(true);
  }

  close(): void {
    this.show.next(false);
  }
}