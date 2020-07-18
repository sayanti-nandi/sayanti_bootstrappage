function validation() {
    var text = document.getElementById('text').value;
    var password= document.getElementById('password').value;
    var retypepass= document.getElementById('retypepass').value;

    if(text == null || text == "")
    {
        alert('Text can not be empty');
        return false;
    }
    else if(text.length >10)
    {
        alert('Name must be less than 10');
    }
    else if(text.substring(0,1)>0 || text.substring(0,1)<9)
    {
        alert('Do not use digit at first');
    }
    else if(password.length<1)
    {
        alert('Password can not be blank');
        return;
    }
    /*else if(password.length<6)
    {
        alert('Password have to greater than 6 digit');
        return false;
    }*/
    else if(retypepass.length<1)
    {
        alert('Password can not be blank');
        return;
    }
    else if(password != retypepass)
    {
        alert('password must be same');
    }
    else{
        text = text.toUpperCase();
        text = text.bold();
        document.write(text.fontcolor("red"));
    }

}