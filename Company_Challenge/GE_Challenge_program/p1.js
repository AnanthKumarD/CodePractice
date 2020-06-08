const human = {
    age: 10,
    grow: () => {
        this.grow++;
    }
}
human.grow();
console.log(human.age)