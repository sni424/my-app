import React, { useEffect } from "react";

const Home = () => {
    const greeter = (name: string) => {
        console.log(`hello ${name}`);
    };
    const greetUser = (user: { name: string; age: number }) => {
        console.log(`bye ${user.name} and ${user.age}`);
    };
    const returnType = (x: number): number => {
        return x * 2;
    };

    const active: boolean = true;
    const hex: number = 0xf00d;
    const arr: Array<number> = [4, 5, 6];

    //2개타입이 들어가기를 원할때
    type BothType = string | number;
    const both: BothType = 20;

    console.log(active, hex, arr, both);
    useEffect(() => {
        greeter("world");
        greetUser({ name: "love", age: 30 });
        console.log(returnType(4));
    }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Home;
