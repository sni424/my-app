import { type } from "@testing-library/user-event/dist/type";
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
            return name;
        } else if (typeof name === "number") {
            return name;
        } else {
            return name;
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

    //Classes

    //     구분　　　선언한 클래스 내　상속받은 클래스 내　인스턴스
    // private 　 　　　⭕　　　　　　　❌　　　　　❌
    // protected 　　　⭕　　　　　　　⭕　　　　　❌
    // public　　　　　⭕　　　　　　　⭕　　　　　⭕

    //abstract클래스는 다른 클래스가 상속받을 수 있는 클래스
    abstract class Gooduser {
        constructor(
            private firstSong: string,
            protected lastSong: string,
            public nickSong: string
        ) {}
        getFullSong() {
            return `${this.firstSong} ${this.lastSong}`;
        }
    }

    class Player3 extends Gooduser {}

    class UserGood {
        constructor(
            private firstName: string,
            private lastName: string,
            public nickName: string
        ) {}
    }

    const nico2 = new UserGood("good", "hello", "nico");
    const nico3 = new Player3("good", "hello", "nico");

    //hashmap
    type Words = {
        [key: string]: string;
    };

    class Dict {
        private words: Words;
        constructor() {
            this.words = {};
        }
        add(word: Words) {
            if (this.words[word.term] === undefined) {
                this.words[word.term] = word.def;
            }
        }
    }

    class Word {
        constructor(term: string, def: string) {}
    }

    const kimchi = new Word("kimchi", "한국의 음식");

    //Interfaces 오직 오브젝트 모양을 특정한다
    //type은 type Team = "red" | "blue" | "yellow", type Hello = string 등 도 가능
    //type은 interface에 비해 다양한 형태로 사용가능
    //interface는 class처럼 extends를 사용하요 상속 가능
    //그러나 type도 비슷하게 사용 가능

    interface UserNumber {
        name: string;
    }

    interface SpecialUser extends UserNumber {}

    const nico4: SpecialUser = {
        name: "hello",
    };

    type UserNumber1 = {
        name: string;
    };

    type SpecialUser1 = UserNumber1 & {};

    const nico5: SpecialUser1 = {
        name: "hello",
    };

    //implements 상속이라고 생각하면 편함
    //클래스가 특정 인터페이스를 충족하는지 확인할 수 있습니다.
    //interface를 implements하면 private 및 protected 사용 불가

    //베스트 댓글
    //     Type Aliases과 Interfaces의 차이점

    // Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

    // 결론: 대부분의 경우 개인 취향에 따라 선택 가능
    // (인터페이스 사용을 조금 더 추천)
    interface UserTwo {
        firstName: string;
        lastName: string;
        sayHi(name: string): string;
        fullName(): string;
    }
    interface Human {
        health: number;
    }

    class PlayerTwo implements UserTwo, Human {
        constructor(
            public firstName: string,
            public lastName: string,
            public health: number
        ) {}
        fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
        sayHi(name: string): string {
            return `Hello ${name}. My name is ${this.firstName}`;
        }
    }

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
