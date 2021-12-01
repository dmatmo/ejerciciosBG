import java.util.HashMap;

public class HashMapDemo {
    public static void main(String[] args) {

        HashMap<String, String> colors = new HashMap<>();
        //Red Green Blue

        colors.put("Red", "#FF0000");
        colors.put("Geen","#00FF00");
        colors.put("Blue", "#0000FF");
        colors.put("white", "#FFFFFF");
        colors.put("Black", "#000000");

        String color = colors.remove("Red");

        System.out.println(color);

        System.out.println(colors.get("Red"));
        System.out.println(colors.size());
        System.out.println(colors.containsKey("Amarillo"));
        System.out.println(colors.containsValue("#FFFFFF"));

        for (String k:colors.keySet()){
            System.out.println(k + "->" + colors.get(k));
        }//for

        colors.forEach((k,v)->System.out.println(v));


    }//main

}//class HashMapDemo