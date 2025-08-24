export class Task {
  constructor(
    public id: number,
    public title: string,
    public priority: 'low' | 'medium' | 'high',
    public dueDate: Date,
    public tags: string[],
    public completed: boolean = false
  ) {}
}
