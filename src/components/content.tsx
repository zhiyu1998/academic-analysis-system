'use client'
import React, { useState } from "react";
import { Card, Image, CardBody, Button, Chip } from "@nextui-org/react";
import ModelProgress from "@/components/model-progress";
import ModelSelect from "@/components/model-select";
import { NotificationIcon } from "@/components/Notificationlcon";
import { generateRandomInteger } from "@/lib/utils";

export default function Content() {

    // 提示
    const [tip, setTip] = useState("")

    // 图片数据
    const [imageUrl, setImageUrl] = useState(null);

    // 按钮文字
    const [dynamicBtn, setDynamicBtn] = useState("分析")

    // 模型选择
    const [model, setModel] = useState("");

    // 是否显示进度条
    const [isShowProgress, setIsShowProgress] = useState(false);
    // 是否显示下载
    const [isDownload, setIsDownload] = useState(false);

    // 展示结果
    const [displayResult, setDisplayResult] = useState(false);

    // 是否使用服务器
    const isServer: boolean = Boolean(process.env.NEXT_PUBLIC_IS_THROUGH_SERVER);

    /**
     * 图片上传处理
     * @param e
     */
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                // @ts-ignore
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setIsDownload(false)
        setDisplayResult(false)
        setDynamicBtn("分析")
    };

    /**
     * 动态检测当前的模型选择、图片选择
     */
    const handleDetect = () => {
        if (imageUrl == null) {
            setTip("请上传图片！");
        } else if (model == "") {
            setTip("请选择模型！");
        } else {
            setTip("");
        }
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = imageUrl; // 确保这是一个可下载的图片URL
        link.download = process.env.NEXT_PUBLIC_MODEL_RES; // 可以根据需要设置具体的文件名
        document.body.appendChild(link); // 将链接添加到页面中
        link.click(); // 模拟用户点击链接
        document.body.removeChild(link); // 移除链接
    }

    const handleAnalysis = () => {
        // 如果出现下载图标跳转 @handleDownload 逻辑
        if (isDownload) {
            handleDownload(); // 新函数，用于处理下载逻辑
            return;
        }

        if (imageUrl == null) {
            setTip("请上传图片！");
            return;
        } else if (model == "") {
            setTip("请选择模型！");
            return;
        } else {
            setIsShowProgress(true)
            // 已经完成
            if (!isServer) {
                try {
                    // TODO
                } catch (err) {
                    console.error(err);
                }
            } else {
                setTimeout(() => {
                    finishOrder();
                }, generateRandomInteger(Number(process.env.NEXT_PUBLIC_MODEL_MIN_PROCESS_TIME), Number(process.env.NEXT_PUBLIC_MODEL_MAX_PROCESS_TIME)));
            }
        }
    }

    /**
     * 完成标志
     */
    const finishOrder = () => {
        setIsDownload(true)
        setIsShowProgress(false)
        setDisplayResult(true)
        setDynamicBtn("下载")
    }

    /**
     * 子组件传输模型到这个组件
     * @param data
     */
    const handleModelSelect = (data: string) => {
        setModel(data)
    }

    return (
        <div>
            <Card
                className="p-10 mx-10"
            >
                <CardBody>
                    <div className="flex justify-center gap-10 mb-10">
                        <Image
                            isBlurred
                            width={ 240 }
                            src={ imageUrl || "cloud upload-fill.png" }
                            alt="NextUI Album Cover"
                            classNames="m-5"
                        />
                        <Image
                            isBlurred
                            width={ 240 }
                            style={ displayResult ? {} : {display: "none"} }
                            src={ process.env.NEXT_PUBLIC_MODEL_RES }
                            alt="NextUI Album Cover"
                            classNames="m-5"
                        />
                    </div>
                    <div className="flex justify-center mb-10">
                        <ModelSelect modelSelect={ handleModelSelect }/>
                    </div>
                    <div className="flex justify-center mb-10" style={ isShowProgress ? {} : {display: 'none'} }>
                        <ModelProgress/>
                    </div>
                    <div className="flex justify-center mb-5" style={ tip ? {} : {display: 'none'} }>
                        <Chip
                            endContent={ <NotificationIcon size={ 18 }/> }
                            variant="flat"
                            color="secondary"
                        >
                            { tip }
                        </Chip>
                    </div>
                    <div className="flex justify-center items-center gap-4 px-60 mb-10">
                        <input
                            type="file"
                            accept="image/*"
                            style={ {display: 'none'} }
                            id="file-input"
                            onChange={ handleImageChange }
                        />
                        <label htmlFor="file-input">
                            <Button as="span">
                                上传图片
                            </Button>
                        </label>
                        <Button onClick={ handleAnalysis } onMouseEnter={ handleDetect } className="w-1"
                                color={ isDownload ? "success" : "secondary" } isLoading={ isShowProgress }>
                            { dynamicBtn }
                        </Button>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}