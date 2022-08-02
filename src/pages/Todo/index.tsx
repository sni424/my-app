import React, { useReducer, useState } from "react";

interface ActionType {
    type: string;
    payload: string | number;
}

interface ArrayType {
    id: number;
    content: string | number;
}
interface ContentType {
    count: number;
    newContent: ArrayType[];
}

interface MapType {
    id: number;
    content: string | number;
}

const initaialState: ContentType = {
    count: 0,
    newContent: [
        {
            id: Date.now(),
            content: "",
        },
    ],
};

const reducer = (state: ContentType, action: ActionType): ContentType => {
    switch (action.type) {
        case "add-content":
            const content = action.payload;
            const newContent1 = {
                id: Date.now(),
                content,
            };
            return {
                count: state.count + 1,
                newContent: [...state.newContent, newContent1],
            };
        case "delete-content":
            return {
                count: state.count + 1,
                newContent: state.newContent.filter(
                    (content: ArrayType) => content.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

const TodoMain = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [content, dispath] = useReducer(reducer, initaialState);

    const valueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setInputValue(e.target.value);
    };
    return (
        <div>
            <h1>useReducer TodoList</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispath({ type: "add-content", payload: inputValue });
                    setInputValue("");
                }}
            >
                <input type="text" value={inputValue} onChange={valueChange} />
                <button>추가</button>
            </form>
            {content.newContent.map((data: MapType, key: number) => {
                return (
                    data.content !== "" && (
                        <div key={key} style={{ display: "flex" }}>
                            <h3>{data.content}</h3>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    dispath({
                                        type: "delete-content",
                                        payload: data.id,
                                    });
                                }}
                            >
                                삭제
                            </button>
                        </div>
                    )
                );
            })}
        </div>
    );
};

export default TodoMain;
