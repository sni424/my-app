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

    const twoOption = () => {};

    //선택적 매개변수

    const goodFunction = (name?: string) => {
        return `Hello, ${name || "world"}`;
    };

    //나머지 매개변수

    const goodAdd = (...nums: Array<number>) => {
        return nums.reduce((result, num) => result + num, 0);
    };

    //문자열 리터럴 타입
    const userName1 = "bob1";

    let userName2: string | number = "tom";

    userName2 = 3;

    //types
    type job = "police " | "developer" | "teacher";

    //교차타입

    interface Car {
        name: string;
        start(): void;
    }

    interface Toy {
        name: string;
        color: string;
        price: number;
    }

    const toyCar: Toy & Car = {
        name: "타요",
        start() {},
        color: "bule",
        price: 1000,
    };

    class Car {
        name: string = "car";
    }

    //Generic

    const getSize = <T,>(arr: T[]): number => {
        return arr.length;
    };

    const arr1 = [1, 2, 3];
    getSize<number>(arr1);

    const arr2 = ["h", "2", "3"];
    getSize<string>(arr2);

    interface Mobile<T> {
        name: string;
        age: number;
        object: T;
    }

    // 노마드 코더

    interface Nico {
        name: string;
    }

    const nico: Nico = {
        name: "good",
    };

    let a = "hello";
    a = "bye";
    let b: boolean = true;
    // a = true;

    //alias 별칭
    type Player = {
        name: string;
        age?: number;
    };

    const player: {
        name: string;
        age?: number;
    } = {
        name: "hello",
    };

    const yoon: Player = {
        name: "good",
    };

    // if (player.age < 10) {
    //     console.log("hello");
    // }
    if (player.age && player.age > 10) {
        console.log("nico");
    }
    const playerMaker = (name: string): Player => {
        return {
            name,
        };
    };
    const nico1 = playerMaker("nico");
    nico1.age = 12;

    const numbers: readonly number[] = [1, 2, 3, 4];
    // numbers.push(1)

    //unknown
    let a1: unknown;
    // let b1 = a1 +1;
    if (typeof a1 === "number") {
        let b = a1 + 1;
    }
    if (typeof a1 === "string") {
        let b = a1.toLocaleUpperCase();
    }

    //void 아무것도 return하지 않는 함수 꼭 쓸필요 없음
    const hello = (): void => {
        console.log("x");
    };

    //never
    const good = (): never => {
        // return "x"
        throw new Error("xxx");
    };
    const good1 = (name: string | number) => {
        if (typeof name === "string") {
            name;
        } else if (typeof name === "number") {
            name;
        } else {
            name;
        }
    };

    //Call Signatures
    type Add1 = (a: number, b: number) => number;
    const add: Add1 = (a, b) => {
        return a + b;
    };

    //Overloading는 Call Signatures이 여러개인것
    type Add2 = {
        (a: number, b: number): number;
        (a: number, b: string): number;
        (a: number, b: number, c: number): number;
    };

    const add1: Add2 = (a, b, c?: number) => {
        if (typeof b === "string") {
            return a;
        }
        if (c) {
            return a + b + c;
        } else {
            return a + b;
        }
    };

    //Polymorephism 다향성 다양한 구조,모양
    //concreate type => number,string같은 원시
    type SuperPrint = {
        <T>(arr: T[]): void;
    };

    const superPrint: SuperPrint = (arr) => {
        arr.forEach((i) => console.log(i));
    };

    superPrint([1, "안녕", false]);

    //Generics Recap
    type SuperPrint1 = {
        <T, M>(a: T[], b: M): T | M;
    };
    const superPrint1: SuperPrint1 = (a, b) => {
        if (b) {
            return b;
        } else {
            return a[0];
        }
    };
    const a2 = superPrint1([1, 2, 3], "string");

    // Conclusions 결론
    type GoodPlayer<T> = {
        name: string;
        extraInfo: T;
    };

    const jong: GoodPlayer<{ favFood: string }> = {
        name: "jong",
        extraInfo: {
            favFood: "hamburger",
        },
    };

    useEffect(() => {
        greeter("world");
        greetUser({ name: "love", age: 30 });
        console.log(returnType(4));
        sayHello();
        console.log(Os[10], Os["Window"]);
        console.log(user.name, (user.gender = "his"));
        console.log(10, 20);
        console.log(goodT(17), interGood(1, 2));
        console.log(goodFunction());
        console.log(goodAdd(1, 2, 3));
    }, []);

    return (
        <div>
            <h1>hello</h1>
        </div>
    );
};

export default Home;
