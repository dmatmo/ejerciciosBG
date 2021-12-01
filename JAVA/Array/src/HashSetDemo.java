import java.util.HashSet;

public class HashSetDemo {
    public static void main(String[] args) {
        HashSet<String> cars = new HashSet<String>();
        cars.add("volvo");
        cars.add("BMW");
        cars.add("VW");
        cars.add("Ford");
        cars.add("Audi");
        cars.add("BMW");
        System.out.println(cars.toString());
        System.out.println(cars.size());
        //cars.forEach((c)->System.out.println(c));
        Object[] objs = cars.toArray();
        System.out.println(objs.length);
        System.out.println((String) objs[0]);
        //objs[0];
    }//main
}//class HasSetDemo