import prisma from "@prisma/prisma";
import bcrypt from 'bcrypt'

export async function main(){
    try{
        await prisma.$connect();
    }catch(err){
        return Error("Database Connection Unsuccessful");
    }
}

export const POST = async (req: Request) => {
    try{
        await main();

        const {username,email, password: pass} = await req.json();
        /*
        const isExisting = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        */
    }catch(err){
        
    }

}