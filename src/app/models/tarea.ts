export class Tarea {
  private title: string;
  private description: string;
  private state: boolean;

  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
    this.state = false;
  }

  public getTitle = (): string => {
    return this.title;
  };

  public getDescription = (): string => {
    return this.description;
  };

  public getState = (): boolean => {
    return this.state;
  };

  public revertState = (): void => {
    this.state = !this.state;
  };
}
