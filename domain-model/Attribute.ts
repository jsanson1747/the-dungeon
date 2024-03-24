type AttributeName =
  | "strength"
  | "dexterity"
  | "constitution"
  | "intelligence"
  | "wisdom"
  | "charisma";

export class Attribute {
  private _name: AttributeName;
  private _value: number;
  private _modifier: number;

  public constructor(name: AttributeName, value: number, modifier: number) {
    this._name = name;
    this._value = value;
    this._modifier = modifier;
  }

  public get name(): AttributeName {
    return this._name;
  }

  public set name(name: AttributeName) {
    this._name = name;
  }

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }

  public get modifier(): number {
    return this._modifier;
  }

  public set modifier(modifier: number) {
    this._modifier = modifier;
  }
}
