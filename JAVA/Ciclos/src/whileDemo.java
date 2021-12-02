public class whileDemo {
    public static void main(String[] args) {
        
        int i = 0;
        int total = 0;
        
        while (i<=20){
            total += i;
            i+=2;
        }//while
        System.out.println("Los suma de los  primeros 10 números pares es:  " + total);
    }//main
}//class whileDemo
