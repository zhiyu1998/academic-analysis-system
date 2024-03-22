'use client'
import React from "react";
import {Card, Input, Image, CardBody, Button} from "@nextui-org/react";
import ModelProgress from "@/components/model-progress";
import ModelSelect from "@/components/model-select";

export default function Content() {
    return (
        <div>
            <Card
                className="p-10 mx-10"
            >
                <CardBody>
                    <div className="flex justify-center gap-10 mb-10">
                        <Card
                            className="px-10"
                        >
                            <CardBody className="flex justify-center items-center cursor-grab">
                                <Image width={70} src="upload.png"/>
                                <p className="font-bold text-inherit">上传图片</p>
                            </CardBody>
                        </Card>
                        <Image
                            isBlurred
                            width={240}
                            src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                            alt="NextUI Album Cover"
                            classNames="m-5"
                        />
                    </div>
                    <div className="flex justify-center mb-10">
                        <ModelSelect/>
                    </div>
                    <div className="flex justify-center mb-10">
                        <ModelProgress/>
                    </div>
                    <div className="flex justify-center items-center gap-4 px-60 mb-10">

                        <Button className="w-1" isLoading>
                            上传
                        </Button>

                        <Button className="w-1" color="success">
                            下载
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}