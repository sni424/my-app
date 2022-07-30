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

    const sayHello = (): void => {
        console.log("hello");
    };
    enum Os {
        Window = 3,
        Ios = 10,
        Android,
    }

    type Score = "A" | "B" | "C" | "F";

    interface User {
        name: string;
        age: number;
        gender?: string;
        birthYear: number;
        [grade: number]: Score;
    }

    let user: User = {
        name: "hello",
        age: 30,
        birthYear: 2000,
        1: "A",
        2: "B",
    };

    interface Add {
        (num1: number, numb2: number): number;
    }

    const interGood: Add = (x, y) => {
        return x + y;
    };

    interface IsAdult {
        (age: number): boolean;
    }

    const goodT: IsAdult = (age) => {
        return age > 19;
    };

    useEffect(() => {
        greeter("world");
        greetUser({ name: "love", age: 30 });
        console.log(returnType(4));
        sayHello();
        console.log(Os[10], Os["Window"]);
        console.log(user.name, (user.gender = "his"));
        console.log(10, 20);
        console.log(goodT(17));
    }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Home;
