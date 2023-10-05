

let info = {
    "name": "Mani",
    "age": 25,

    new: function () {
        let greet = ()=>{
            console.log(this.name);
        }
        greet();
        console.log(this);
        console.log("My new lecturer is", this.name);
        console.log("My lecturer age is", this.age)
    }

}
info.new();