import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    margin: 0;
`;

interface BoxDivProps {
    bgColor: string;
    radius?: string;
}

const BoxDiv = styled.div<BoxDivProps>`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor};
    margin-top: 1rem;
    border-radius: ${(props) => props.radius};
`;

interface CircleProps {
    bgColor: string;
}

//?? (Null 병합 연산자 (Nullish coalescing operator))
//??앞에 값이 null이거나 undefined이면 오른쪽 값을, 그렇지 않으면 왼쪽 값을 반환하는 논리연산자

const Circle = ({ bgColor = "blue" }: CircleProps) => {
    const [text, setText] = useState<string | number>("hello");
    const [value, setVaue] = useState<string>("");
    const [toDo, setToDo] = useState<Array<string>>([]);

    const onchange = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        setVaue(value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setToDo([...toDo, value]);
        setVaue("");
    };

    const onClick = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { value, id } = e.currentTarget;
        console.log(value);
        setToDo(
            toDo.filter((data: string, i: number) => {
                return data !== id;
            })
        );
    };
    return (
        <Container>
            <BoxDiv bgColor={bgColor} />
            <BoxDiv bgColor="blue" radius="50%" />
            {text}
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onchange}
                    type="text"
                    placeholder="username"
                />
                <button>Login</button>
            </form>
            {toDo.map((data: string, i: number) => {
                return (
                    <div key={i}>
                        <h1>{data}</h1>
                        <button value={i} id={data} onClick={onClick}>
                            삭제
                        </button>
                    </div>
                );
            })}
        </Container>
    );
};

export default Circle;
