public class MatrizDemo {
    public static void main(String[] args) {

        int [][] matriz ={
                {1,2,3,4,5},
                {6,7,8,9,10},
                {11,12,13,14,15}
        };

        System.out.println(matriz[1][3]);
/*
        for (int m=0; m < matriz.length; m++) {
            for (int n:matriz[m]){
                System.out.println(n);
            }//foreach
        }for

        for (int n:matriz){
            System.out.println(n);
        }//foreach
*/
        for (int m=0; m < matriz.length; m++) {
            for (int z = 0; z < matriz[m].length; z++) {
                System.out.print(matriz[m][z] + " ");
            }//for z
            System.out.println();
        }//for m

    }//main

}//class MatrizDemo