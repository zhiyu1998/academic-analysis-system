import { exec } from "node:child_process";
import { NextRequest, NextResponse } from "next/server";

export default function handler(req: NextRequest, res: NextResponse) {
    const command = req.nextUrl.searchParams.get("command");
    if (command === '') {
        throw Error("没有命令！")
    }
    exec('command', (error, stdout, stderr) => {
        if (error || stderr) {
            return Response.json({
                data: `exec error: ${error}`
            })
        }
        return Response.json({
            data: `${stdout}`
        })
    });
}
