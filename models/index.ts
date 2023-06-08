// Initializing models
import { Todo } from "@/models/todos";
import { Notes } from "@/models/notes";
import { User } from "@/models/users";
import { Journal } from "@/models/journals";
import { getModelForClass } from "@typegoose/typegoose";

export const TodoModel = getModelForClass(Todo);
export const NotesModel = getModelForClass(Notes);
export const UserModel = getModelForClass(User);
export const JournalModel = getModelForClass(Journal);
