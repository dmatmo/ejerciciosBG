import java.util.Scanner;

public class SwitchDemo {

    public static void main(String[] args) {


        int month = 0;

         do {
             System.out.print("Ingresa el número del mes (1-12):  ");
             month = (new Scanner(System.in)).nextInt();
         }while((month<1 || month>12));



             String monthString = switch (month) {
                 case 1 -> "January";
                 case 2 -> "February";
                 case 3 -> "March";
                 case 4 -> "April";
                 case 5 -> "May";
                 case 6 -> "Jun";
                 case 7 -> "July";
                 case 8 -> "August";
                 case 9 -> "September";
                 case 10 -> "October";
                 case 11 -> "November";
                 case 12 -> "December";
                 default -> "Invalid Month";
             };//switch
        System.out.print("El mes es: " + monthString);
    }//main
}//class SwitchDemo