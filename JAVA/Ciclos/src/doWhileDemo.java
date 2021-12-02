public class doWhileDemo {

    public static void main(String[] args) {

        int i = 0;
        int total = 0;

        do{
            total += i;
            i+=2;
        }//do
            while (i<=20); //while
        System.out.println("Los suma de los  primeros 10 números pares es:  " + total);


    }//main
}//class
