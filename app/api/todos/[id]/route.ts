import { NextResponse } from "next/server";
import { main } from "../route";
import prisma from "@prisma/prisma";



export const GET =async (req:Request, res: NextResponse) => {
    try{
        const id = req.url.split("/todos/")[1];
        await main();
        const todo = await prisma.todo.findFirst({ where : {id}});

        if(!todo){
            return NextResponse.json({message: "Item not found!" }, {status: 404})
        }
        return NextResponse.json({message: "Succes!" }, {status: 200})
    }catch(err){
        return NextResponse.json({message: "Error", err }, {status: 500})
    }finally{
        await prisma.$disconnect();
    }

}

export const PUT =async (req:Request, res: NextResponse) => {
    try{
        const id = req.url.split("/todos/")[1];
        await main();
        const todo = await prisma.todo.findFirst({ where : {id}});

        if(!todo){
            return NextResponse.json({message: "Item not found!" }, {status: 404})
        }
        return NextResponse.json({message: "Succes!" }, {status: 200})
    }catch(err){
        return NextResponse.json({message: "Error", err }, {status: 500})
    }finally{
        await prisma.$disconnect();
    }

}

export const DELETE =async (req:Request, res: NextResponse) => {}
