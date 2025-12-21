
const add = () => {
    const x = 10;
    const y = 20;
    const z = x + y;
    return z;
}

setTimeout(() => {
    console.log("Print")
}, 1000)

fetch(url).then(console.log()).catch(error=> console.log())

const getdata = async () => {
    const response = await fetch(url);
    console.log(response);
}

