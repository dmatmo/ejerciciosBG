import java.util.ArrayList;

public class ArrayListDemo {
    public static void main(String[] args) {

        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(35);        numbers.add(33);        numbers.add(42);
        numbers.add(10);        numbers.add(14);        numbers.add(19);
        numbers.add(27);        numbers.add(44);        numbers.add(26);
        numbers.add(31);

        /*
        System.out.println(numbers.size());

        System.out.println(numbers.isEmpty());
        System.out.println(numbers.size());
        System.out.println(numbers.get(9));
        //System.out.println(numbers.get(10));

        for (int i = 0; i <numbers.size(); i++) {
            System.out.println(numbers.get(i));
         }//for i
         */

        System.out.println(numbers.toString());
        System.out.println(numbers.size());
        numbers.clear();
        System.out.println(numbers.toString());
        System.out.println(numbers.size());

        //numbers.forEach((num)->System.out.println(num));
        /*
        for (int n:numbers) {
           System.out.println(n);
        }//foreach
        */
    }//main

}//class ArrayListDemo
