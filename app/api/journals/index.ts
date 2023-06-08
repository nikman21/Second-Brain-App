import { JournalModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/database.ts";

interface CreateJournalBody{
    title: string;
    content: string; 
    
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
    await dbConnect();
    
  }