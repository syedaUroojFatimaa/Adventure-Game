#! usr/env/bin node
import inquirer from "inquirer";
import chalk from "chalk";

class Player{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
        name : "name",
        type : "input",
        message : "Enter Your Name: "
    }
])
console.log(player.name);

let opponent = await inquirer.prompt([
    {
        name : "select",
        type : "list",
        message : "Select Your Opponent: ",
        choices: ["Skeleton","Alein","Zombie"]
    }
])
console.log(opponent.select);

let p1 = new Player (player.name);
let o1 = new Opponent (opponent.select);

do{
    if (opponent.select == "Skeleton"){

    let ask = await inquirer.prompt([
        {
            name : "opt",
            type : "list",
            message : "Select Your Opponent: ",
            choices : ["Attack","Drink Portion","Run For Your Life.."]
        }
    ])
    if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(p1.fuel <=  0){
            console.log(chalk.bold.yellow("\n You Loose , Better Luck Next Time\n"));
            process.exit()
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(o1.fuel <= 0){
            console.log(chalk.bold.yellow("\n You Win!!\n"));
            process.exit()
            }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
            console.log(chalk.red(`\n You Drink Healthy Portion Your Fuel is ${p1.fuel} \n`));
    }
    if(ask.opt == "Run For Your Life.."){
        console.log(chalk.bold.yellow("You Loose , Better Luck Next Time"));
        process.exit()
    }
}
if (opponent.select == "Alein"){

    let ask = await inquirer.prompt([
        {
            name : "opt",
            type : "list",
            message : "Select Your Opponent: ",
            choices : ["Attack","Drink Portion","Run For Your Life.."]
        }
    ])
    if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(p1.fuel <=  0){
            console.log(chalk.bold.yellow("\n You Loose , Better Luck Next Time\n"));
            process.exit()
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(o1.fuel <= 0){
            console.log(chalk.bold.yellow("\n You Win!!\n"));
            process.exit()
            }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
            console.log(chalk.red(`\n You Drink Healthy Portion Your Fuel is ${p1.fuel} \n`));
    }
    if(ask.opt == "Run For Your Life.."){
        console.log(chalk.bold.yellow("\n You Loose , Better Luck Next Time\n"));
        process.exit()
    }
}
if (opponent.select == "Zombie"){

    let ask = await inquirer.prompt([
        {
            name : "opt",
            type : "list",
            message : "Select Your Opponent: ",
            choices : ["Attack","Drink Portion","Run For Your Life.."]
        }
    ])
    if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(p1.fuel <=  0){
            console.log(chalk.bold.yellow("\n You Loose , Better Luck Next Time\n"));
            process.exit()
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            }
            if(o1.fuel <= 0){
            console.log(chalk.bold.yellow("\n You Win!! \n"));
            process.exit()
            }
    }
    if(ask.opt == "Drink Portion"){
        p1.fuelIncrease()
            console.log(chalk.red(`\n You Drink Healthy Portion Your Fuel is ${p1.fuel} \n`));
    }
    if(ask.opt == "Run For Your Life.."){
        console.log(chalk.bold.yellow("\n You Loose , Better Luck Next Time\n"));
        process.exit()
    }
}
}
while(true)
