export class MyClass {
  "id"?: string;
  "name"?: string;
  "child"?: MySubClass;
}

export class MySubClass {
  "description"?: string;
}

export enum MyEnum {
  "Option1" = "Option1",
  "Option2" = "Option2"
}