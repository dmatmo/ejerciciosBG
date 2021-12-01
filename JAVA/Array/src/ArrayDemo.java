import javax.lang.model.element.NestingKind;
import java.util.Arrays;

public class ArrayDemo {
    public static void main(String[] args) {
/*
        String [] months = {"January", "February", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "December"};

        System.out.println(months.length);
        System.out.println(months[4]);

        for (int i = 0; i <months.length ; i++) {
            System.out.println(months[i]);
        }// for i

       for (String m:months){
            System.out.println(m);
        }//for months
*/
        int [] numbers = {2,4,8}; //16,32,64,128,256,512,1024,2048,4096};
        int [] cnumbers = Arrays.copyOf(numbers, numbers.length);
        numbers[0]=20;

        for (int n:numbers){
            System.out.println(n);
        }//foreach

        System.out.println();

        for (int n:cnumbers) {
            System.out.println(n);
        }//foreach

    /*    int n= 5;
          int x = n;

          n += 5;
          System.out.println(n);
          System.out.println(x);
*/
    }//main

}//class ArrayDemo




