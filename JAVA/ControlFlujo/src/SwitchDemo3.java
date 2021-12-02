import java.util.Scanner;

public class SwitchDemo3 {

    public static void main(String[] args) {

        System.out.print("Escribe el número del mes: ");
        int days= (new Scanner(System.in)).nextInt();

        String monthDays = switch (days){
            case 1 -> "January 31 days";
            case 2 -> "February 28 / 29 days";
            case 3 -> "March 31 days";
            case 4 -> "April 30 days";
            case 5 -> "May 31 days";
            case 6 -> "Jun 30 days";
            case 7 -> "July 31 days";
            case 8 -> "August 31 days";
            case 9 -> "September 30 days";
            case 10 -> "October 31 days";
            case 11 -> "November 30 days";
            case 12 -> "December 31 days";
            default -> "Invalid Month";
        };//Switch
        System.out.println(monthDays);
    }//main
}//class SwitchDemo3