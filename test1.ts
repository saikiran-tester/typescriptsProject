
//variable
export let x=14;


//function

export function add()
{
    let a = 14;
    let b = 18;

    console.log(a+b);
}


//class

export class together
{
    couple1:string;
    couple2:string;

    constructor(couple1:string,couple2:string)
    {
        this.couple1=couple1;
        this.couple2=couple2;

        console.log(`Both ${couple1} and ${couple2} are married.`);

    }

    love()
    {
        console.log('Both are lived happly and together')
    }


}

