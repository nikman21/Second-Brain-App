import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Journal {
    @prop({ default: () => nanoid(9) })
    _id: string;
  
    @prop({ required: true })
    title: string;
  
    @prop({ required: true })
    content: string;
  
    @prop({ default: Date.now })
    created_at: Date;
  
    @prop({ default: Date.now })
    modified_at: Date;
  }