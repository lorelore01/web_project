export class User {
  constructor(
    public id: number, // Ideia caso a gente queira gerar id: import {randomUUID} from "node:crypto"
    public name: string,
    public email: string
  ) {}

  isValidEmail(): boolean {
    return /\S+@\S+\.\S+/.test(this.email);
  }
}
