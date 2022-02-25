function jouer()
{
    let num=Math.floor(Math.random() * 10);
    let tentatives=window.prompt("donner le nombres de tentatives sur 10 ");
    let win=false;
    while ((tentatives) && (win==false))
    {
        let essai=window.prompt("Essayer !")
        if(num==essai)
        {
        window.alert("Vous avez gagné ! ");
        win=true;    
        }
        else
        {
        tentatives--;
        }
    }
    if (win==false)
    {
        window.alert("vous avez perdu!")
    }
        a=window.prompt("voulez vous réésseyer? 1 si oui 0 sinon :")
        if (a==1)
        jouer();
        else
        window.location.href = "../index.html";
}
jouer();
