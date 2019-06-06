import {AbstractControl, ValidationErrors} from "@angular/forms";
import {ProjectService} from "../providers/persistence/project.service";
import {Project} from "../model/Project";
import {Observable} from "rxjs/Observable";

export class ProjectValidator {

  constructor() {
  }

  static check(projectService: ProjectService,
               control: AbstractControl): Observable<ValidationErrors> | Observable<null> {
    let name = control.value;
    return projectService.getProjects().take(1)
      .map((projects: Project[]) => projects.filter(p => p.name === name))
      .map(projects => !!projects.length)
      .map(hasValue => hasValue ? ProjectValidator.mapErr(control, hasValue) : null);

  }

  private static mapErr(c: AbstractControl, value: boolean): ValidationErrors {
    let err: ValidationErrors;
    if (value) {
      err = {existed: true};
    } else {
      err = null;
    }
    c.setErrors(err);
    return err;
  }
}
