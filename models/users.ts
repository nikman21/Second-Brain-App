import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid"; 
import { Todo } from "@/models/todos";
import { Notes } from "@/models/notes";
import { Journal } from "@/models/journals";

export class User {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  email: string;

  @prop()
  password: string;

  @prop({ default: [] })
  notes: Notes[];

  @prop({ default: [] })
  todos: Todo[];

  @prop({ default: [] })
  journals: Journal[];

}