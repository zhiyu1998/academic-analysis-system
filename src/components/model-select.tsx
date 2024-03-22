import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function ModelSelect() {

    let models = [
        {label: "模型1", value: "model1"},
        {label: "模型2", value: "model2"},
        {label: "模型3", value: "model3"},
    ]
    // 加载环境变量的内容
    const modelsInEnv = process.env.NEXT_PUBLIC_MODEL_SELECT;
    if (modelsInEnv != undefined) {
        models = modelsInEnv.split(",").map(item => {
            return {label: item, value: item}
        });
    }


    return (
        <Select
            variant="flat"
            label="模型选择"
            className="max-w-xs"
        >
            {models.map((model) => (
                <SelectItem key={model.value} value={model.value}>
                    {model.label}
                </SelectItem>
            ))}
        </Select>
    )
}