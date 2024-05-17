export class CreateTaskDto {
  readonly user: any;
  readonly title: string;
  readonly description: string;
  readonly dueDate: Date;
  readonly status: string;
}
