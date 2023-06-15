import { NextResponse } from "next/server";
import prisma from "@prisma/prisma";
export async function main(){
    try{
        await prisma.$connect();
    }catch(err){
        return Error("Database Connection Unsuccessful");
    }
}

export const GET = async (req: Request, res: NextResponse) => {
    try{
        await main();
        const todos = await prisma.todo.findMany();
        return NextResponse.json({ message: "Success", todos }, {status: 200})
    }catch (err){
        return NextResponse.json({ message: "Error", err}, {status: 500});
    }finally{
        await prisma.$disconnect();
    }
};

export const POST = async (req: Request, res: NextResponse) => {
    /*
    try{
        const { title } = await req.json();
        await main();

        const new_todo = await prisma.todo.create({data: { title }});
        return NextResponse.json({ message: "Success", new_todo }, {status: 201})
    }catch(err){
        return NextResponse.json({ message: "Error", err}, {status: 500});
    }finally{
        await prisma.$disconnect();
    }
    */
};