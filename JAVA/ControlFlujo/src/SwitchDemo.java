import java.util.Scanner;

public class SwitchDemo {

    public static void main(String[] args) {

        System.out.print("Escribe el número del mes: ");

        int month = (new Scanner(System.in)).nextInt();
        String monthString;

        switch (month){
            case 1: monthString ="January";
                break;
            case 2: monthString ="February";
                break;
            case 3: monthString ="March";
                break;
            case 4: monthString ="April";
                break;
            case 5: monthString ="May";
                break;
            case 6: monthString ="Jun";
                break;
            case 7: monthString ="July";
                break;
            case 8: monthString ="August";
                break;
            case 9: monthString ="September";
                break;
            case 10: monthString ="October";
                break;
            case 11: monthString ="November";
                break;
            case 12: monthString ="December";
                break;
            default: monthString = "Invalid Month";
                break;
        }//switch
        System.out.println("El mes es: " + monthString);
    }//main
}//class SwitchDemo