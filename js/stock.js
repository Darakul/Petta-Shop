
class Name{
    setName(name){
        this.name = name;
    }
}

class Customer extends Name{
    //--- Inheritance ---//
    Name(){
        document.write ('Name: '+this.name+"<br>"); //สืบทอดค่า name จาก class Name
        }
    
    //--- Abstraction ---//
    setOrder(breed, price){
    this.breed = breed;
    this.price = price;

    let service = 500;

    let TotalPrice = function(){ //คำนวนค่า service
        let total = price + service; 
        document.write ('<br>Total price is : '+total); 
        }
    this.getTotal = function (){
        TotalPrice(); //เรียกใช้ Method TotalPrice
    }
        
    }
    
    //--- Encapsulation ---//
    getMenu(){        
    return this.breed;
    }
    
    getPrice(){
    return this.price;
    }
}
  
let c1 = new Customer();
c1.setName('Rimuru');
c1.setOrder('Shitsu', 5500);
c1.Name();
document.write (c1.getMenu());



//--- รับค่าจาก Method getTotal ---//
c1.getTotal();