public class forDemo {

    public static void main(String[] args) {
        int total = 0;
        int numeros =0;

        for (int i = 0 ; i <= 20 ; i += 2 ){
            total += i;
            if(total>=90){
                break;
            }//if
        }//for-1
        System.out.println("Los suma de los  primeros 10 números pares es:  " + total);

        for (int imp = 1 ; imp <= 20 ; imp += 2 ){
            numeros += imp;
        }//for-2
        System.out.println("Los suma de los  primeros 10 números impares es:  " + numeros);

    }//main
}//class


