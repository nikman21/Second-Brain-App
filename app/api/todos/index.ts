//retrieving the todos list and creating a single Todo
import { TodoModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/utils/database.ts";


interface CreateTodoBody {
  title: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if(req.method === "GET"){
    //for retrieving todos list

    const todos = await TodoModel.find({}).limit(10).lean();
    res.status(200).json(todos);
  }else if (req.method === "POST"){
    //creating single todo

    const body = req.body as CreateTodoBody;

    const todo = new TodoModel({
      title: body.title,
      desciption: body.description,
    });
    await todo.save();

    res.status(200).json(todo.toJSON());
  
  }else{
    res.status(405).json({ error: "Method not allowed"})
  }
}

/*
This code checks the HTTP method of the incoming request using req.method. 
If it is a "GET" request, it retrieves the todos list from the database. 
It uses TodoModel.find({}) to find all the todo items, .limit(10) to limit the results to 10 items, and .lean() to convert the results into plain JavaScript objects. 
The resulting todos are then sent as a JSON response with a 200 status code using res.status(200).json(todos).

If the request method is "POST", it means the client is trying to create a new todo item. 
The code extracts the title and description from the request body using req.body, assuming it conforms to the CreateTodoBody interface. 
A new instance of TodoModel is created with the provided title and description. The todo.save() method is called to save the new todo item to the database. 
Finally, the newly created todo item, converted to a plain JavaScript object using todo.toJSON(), 
is sent as a JSON response with a 200 status code.

If the request method is neither "GET" nor "POST", the code sends a 405 status code (Method Not Allowed) with an error message as a JSON response.
*/