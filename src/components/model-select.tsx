import React from "react";
import {Select, SelectItem} from "@nextui-org/react";

export default function ModelSelect() {

    const models = [
        {label: "Default (Model 1)", value: "model1"},
        {label: "Model 1", value: "model1"},
        {label: "Model 2", value: "model2"},
    ]

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